import { CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { Photo } from "@/store/type/photoType";
import { StyledCard, StyledCardMedia } from "./styles";

const PhotoCard = ({ photo }: { photo: Photo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/photos/${photo.id}`);
  };

  const imageUrl = `https://picsum.photos/id/${photo.id}/600/400`;

  return (
    <StyledCard onClick={handleClick}>
      <StyledCardMedia component="img" image={imageUrl} alt={photo.author} />
      <CardContent sx={{ flexGrow: 1, py: 1.5, px: 2 }}>
        <Typography variant="body2" noWrap>
          Author: {photo.author}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default PhotoCard;
