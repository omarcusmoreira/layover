import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useState } from "react";
import { LocationOn } from "@mui/icons-material";

export function AccountActions() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="account-actions-container">
        <div className="localizator-container">
          <Typography variant="h2">Lorem ipsum dolor sit amet.</Typography>
          <Typography variant="h5">Lorem ipsum dolor sit amet.</Typography>
          <Button
            className="align-self-flex-start"
            variant="contained"
            endIcon={<LocationOn />}
          >
            Localizador
          </Button>
        </div>
        <div className="form-acess-account-container">
          <Typography variant="h3" className="mb15">
            Já possui conta?
          </Typography>
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            label="Digite seu email"
            variant="filled"
            className="mb15 col-2-3"
            type="email"
          />
          <TextField
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            label="Digite a sua senha"
            variant="filled"
            className="mb15 col-2-3"
            type="password"
          />
          <Button variant="contained" className="mb15">
            Entrar
          </Button>
          <div className="display-flex align-items-center">
            <Typography variant="h6" className="mr15">
              Não possui conta?
            </Typography>
            <Link variant="h6" href="/registry/user">
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
