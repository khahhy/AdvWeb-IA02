import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

export const StyledAppBar = styled(AppBar)(() => ({
  background: "#222222",
  boxShadow: "none",
  borderBottom: "1px solid #333",
  paddingTop: 8,
  paddingBottom: 8,
}));

export const LeftSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(5),
}));

export const Logo = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: "1.5rem",
  letterSpacing: "1px",
  cursor: "pointer",
  userSelect: "none",
  color: "#ffffff",
}));

export const IconGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
  "& > svg": {
    cursor: "pointer",
    color: "#B0B0B0",
    fontSize: "1.4rem",
    transition: "color 0.2s ease",
    "&:hover": {
      color: "#ffffff",
    },
  },
}));
