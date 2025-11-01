import { useParams } from "react-router-dom";
import { useGetPhotoByIdQuery } from "@/store/api/photoApi";
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Container,
} from "@mui/material";
import {
  StyledCard,
  ImageWrapper,
  StyledCardMedia,
  DarkInfoSection,
} from "./styles";

const ImageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useGetPhotoByIdQuery(id || "", {
    skip: !id,
  });

  if (isLoading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );

  if (isError) {
    const errorMessage =
      error && typeof error === "object" && "data" in error
        ? String(error.data)
        : "Unable to load image details.";
    return <Alert severity="error">{errorMessage}</Alert>;
  }

  if (!data)
    return (
      <Alert severity="warning">No information found for this photo.</Alert>
    );

  const photoTitle = `ID Photo: ${data.id}`;
  const photoDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.`;

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <StyledCard>
        <ImageWrapper>
          <StyledCardMedia
            component="img"
            src={data.download_url}
            alt={data.author}
          />
        </ImageWrapper>

        <DarkInfoSection>
          <Typography variant="h4" component="h1" gutterBottom>
            {photoTitle}
          </Typography>

          <Typography variant="h6" sx={{ opacity: 0.8 }} gutterBottom>
            Author: {data.author}
          </Typography>

          <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6 }}>
            {photoDescription}
          </Typography>

          <Typography
            variant="caption"
            sx={{
              mt: 3,
              display: "block",
              opacity: 0.7,
            }}
          >
            ID: {data.id} | Size: {data.width} × {data.height}
            {data.url && (
              <>
                {" | "}
                <a
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#90caf9" }}
                >
                  View original source
                </a>
              </>
            )}
          </Typography>
        </DarkInfoSection>
      </StyledCard>
    </Container>
  );
};

export default ImageDetail;
