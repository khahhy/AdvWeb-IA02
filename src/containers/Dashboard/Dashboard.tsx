import { useState, useRef, useCallback } from "react";
import { useGetPhotosQuery } from "@/store/api/photoApi";
import { CircularProgress, Alert, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import PhotoCard from "@/components/PhotoCard/PhotoCard";

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const limit = 12;

  const { data, isLoading, isError, error, isFetching } = useGetPhotosQuery({
    page,
    limit,
  });

  const observer = useRef<IntersectionObserver | null>(null);
  const lastPhotoElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && data?.hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, data?.hasMore]
  );

  if (isLoading && page === 1) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    const errorMessage =
      error && typeof error === "object" && "data" in error
        ? String(error.data)
        : "An error occurred while loading the image.";
    return <Alert severity="error">{errorMessage}</Alert>;
  }

  if (!data?.photos.length && !isLoading && !isFetching) {
    return <Alert severity="warning">No image data available.</Alert>;
  }

  return (
    <Box sx={{ flexGrow: 1, px: { xs: 1, sm: 2, md: 3 } }}>
      {" "}
      <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
        {data?.photos.map((photo, index) => {
          const isLastElement = data.photos.length === index + 1;

          return (
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              key={photo.id}
              ref={isLastElement ? lastPhotoElementRef : null}
            >
              <PhotoCard photo={photo} />
            </Grid>
          );
        })}
      </Grid>
      {isFetching && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 3,
            mt: 2,
          }}
        >
          <CircularProgress size={24} />
          <Typography variant="body2" sx={{ ml: 2, color: "#B0B0B0" }}>
            Loading...
          </Typography>
        </Box>
      )}
      {!data?.hasMore && data?.photos && data?.photos.length > 0 && (
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            marginTop: 4,
            marginBottom: 4,
            color: "#777",
          }}
        >
          The End! No more photos to load.
        </Typography>
      )}
    </Box>
  );
};

export default Dashboard;
