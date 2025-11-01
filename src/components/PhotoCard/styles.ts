import { Card, CardMedia, type CardMediaProps } from "@mui/material";
import { styled } from "@mui/system";

export const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  backgroundColor: "#333",
  color: "#fff",
  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px #0000004d",
  },
});

interface ExtendedCardMediaProps extends CardMediaProps {
  alt?: string;
}

export const StyledCardMedia = styled(CardMedia)<ExtendedCardMediaProps>({
  width: "100%",
  aspectRatio: "3 / 2",
  height: 220,
  objectFit: "cover",
  borderBottom: "1px solid #444",
});
