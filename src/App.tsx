import Header from "@/components/Header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import { AppWrapper, Content } from "./styles";

function App() {
  return (
    <AppWrapper>
      <CssBaseline />
      <Header />
      <Content maxWidth="lg">
        <Outlet />
      </Content>
    </AppWrapper>
  );
}

export default App;
