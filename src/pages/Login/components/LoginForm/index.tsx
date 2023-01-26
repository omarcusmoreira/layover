import { Facebook, Google, LinkedIn } from "@mui/icons-material";
import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FormContainer, LoginContainer } from "./styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#fff",
  boxShadow: 10,
  p: "22px 26px",
  borderRadius: "17px",
};

interface LoginFormProps {
  handleClose: () => void;
  handleOpen: () => void;
  open: boolean;
  userType: string;
}

export function LoginForm({
  handleClose,
  handleOpen,
  open,
  userType,
}: LoginFormProps) {
  return (
    <LoginContainer className={userType === "company" ? "company" : "user"}>
      <FormContainer action="">
        <Typography variant="h2" fontWeight={700}>
          Sou {userType}
        </Typography>
        <label>Login</label>
        <input type="text" placeholder="Email Address" />
        <label>Senha</label>
        <input type="password" placeholder="Password" />
        <div>
          <a className="my_password" onClick={handleOpen}>
            Esqueci minha senha
          </a>
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <div className="modal-password-container">
                <h2>Esqueci a minha senha</h2>

                <form action="" className="form-modal">
                  <label htmlFor="email-modal" className="readonly">
                    Informe o seu e-mail
                  </label>
                  <input type="email" placeholder="Insira seu e-mail" />
                </form>
                <div className="buttons_interface">
                  <Button
                    type="button"
                    className="button_back"
                    onClick={handleClose}
                  >
                    Voltar
                  </Button>
                  <Button type="button" className="button_advance">
                    Aplicar
                  </Button>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
        <div className="buttons">
          <div className="icons">
            {" "}
            <Facebook /> <Google />
            <LinkedIn />
          </div>
          <div>
            {" "}
            <Button>entrar</Button>
          </div>
        </div>
        <a className="register">Cadastre-se</a>
      </FormContainer>
    </LoginContainer>
  );
}
