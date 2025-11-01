import {
  Card,
  Box,
  CardMedia,
  CardContent,
  type CardMediaProps,
} from "@mui/material";
import { styled } from "@mui/system";

export const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  boxShadow:
    "0px 3px 3px -2px #00000033, 0px 3px 4px 0px #00000024, 0px 1px 8px 0px #0000001f",

  "@media (min-width: 900px)": {
    flexDirection: "row",
  },
});

export const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  flex: "1 1 50%",
  maxHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: "#1e1e1e",
  borderRadius: theme.shape.borderRadius,
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  [theme.breakpoints.down("md")]: {
    borderRadius: theme.shape.borderRadius,
  },
}));

interface ExtendedCardMediaProps extends CardMediaProps {
  alt?: string;
}

export const StyledCardMedia = styled(CardMedia)<ExtendedCardMediaProps>({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

export const DarkInfoSection = styled(CardContent)(({ theme }) => ({
  flex: "1 1 50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#1e1e1e",
  color: "#f5f5f5",
  padding: theme.spacing(5),
  textAlign: "left",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    padding: theme.spacing(3),
  },
}));
