import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Search, Widgets } from "@mui/icons-material";
import logo from "../../assets/images/Logo.svg";
import HandleUserSession from "../../utilities/HandleUserSession";
import Utils from "../../utilities/Utils";
import { useState } from "react";
import {
  HeaderContainer,
  LogoContainer,
  MenuContainer,
  SearchContainer,
} from "./styles";

interface HeaderProps {
  handleSearch?: (e: string) => void;
}

export function Header({ handleSearch }: HeaderProps) {
  // const userName = HandleUserSession.getItemFromLocalStorage("userName");
  const userName = "userName";

  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState("");

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar>
        <Toolbar sx={{background: '#eee', padding: 0, margin: 0}}>
          <HeaderContainer>
            {handleSearch && (
              <SearchContainer>
                <Search />
                <TextField
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    handleSearch(event.target.value);
                  }}
                  label="Procurar"
                  variant="standard"
                />
              </SearchContainer>
            )}
            <LogoContainer>
              <img src={logo} alt="logo" />
            </LogoContainer>

            {userName ? (
              <>
                <MenuContainer>
                  <Typography variant="h6">Olá, {userName}</Typography>

                  <Button
                    onClick={handleMenu}
                    color="inherit"
                    className="ml10"
                    variant="outlined"
                    startIcon={<Widgets />}
                  >
                    Menu
                  </Button>
                </MenuContainer>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={anchorEl !== null}
                  onClose={handleClose}
                >
                  <MenuItem
                    key="1"
                    onClick={() => (window.location.href = "/mypassword")}
                  >
                    Alterar Senha
                  </MenuItem>
                  <MenuItem
                    key="2"
                    onClick={() => (window.location.href = "/flight-status")}
                  >
                    Status de Voo
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <></>
            )}
          </HeaderContainer>
        </Toolbar>
      </AppBar>
    </>
  );
}
