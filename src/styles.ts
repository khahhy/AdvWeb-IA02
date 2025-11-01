import Container from "@mui/material/Container";
import { styled } from "@mui/system";

export const AppWrapper = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  background: "#222222",
  color: "#ffffff",
});

export const Content = styled(Container)(({ theme }) => ({
  flexGrow: 1,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));
