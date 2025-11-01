import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import { CgSearch, CgShoppingBag, CgMenuGridO } from "react-icons/cg";
import { StyledAppBar, LeftSection, Logo, IconGroup } from "./styles";

const Header = () => {
  const navigate = useNavigate();

  const goHome = () => {
    void navigate("/");
  };

  return (
    <StyledAppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <LeftSection>
          <Logo variant="h6" onClick={goHome}>
            Picsum photo gallery
          </Logo>
        </LeftSection>

        <IconGroup>
          <CgSearch />
          <CgShoppingBag />
          <CgMenuGridO />
        </IconGroup>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
