import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import AuthModal from "./authentication/AuthModal";
import UserSidebar from "./authentication/UserSidebar";

const title = {
  flex: 1,
  color: "gold",
  fontWeight: "bold",
  fontFamily: "Montserrat",
  cursor: "pointer",
};

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    mode: "dark",
  },
});

const Header = () => {
  const navigate = useNavigate();

  const { currency, setCurrency, user } = CryptoState();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography onClick={() => navigate("/")} sx={title}>
              Cyrpto Hunter
            </Typography>
            <Select
              onChange={(e) => setCurrency(e.target.value)}
              value={currency}
              variant="outlined"
              style={{ width: 100, height: 50, marginRight: 15 }}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
            </Select>
            {user ? <UserSidebar /> : <AuthModal />}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
