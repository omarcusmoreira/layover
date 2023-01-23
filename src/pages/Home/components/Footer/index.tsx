import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

export function Footer() {
  return (
    <>
      <div className="home-footer-container">
        <Typography variant="h6" className="mb15">
          Visite nossas redes sociais
        </Typography>
        <div className="display-flex">
          <IconButton
            className="facebook"
            onClick={() => {}}
          >
            <Facebook />
          </IconButton>

          <IconButton
            className="instagram"
            onClick={() => {}}
          >
            <Instagram />
          </IconButton>

          <IconButton
            className="twitter"
            onClick={() => {}}
          >
            <Twitter />
          </IconButton>
        </div>
        <Typography variant="subtitle2" className="mt15">
          2022 Desenvolvido por Trendhouse Tech. Todos os direitos reservados a
          Layover.
        </Typography>
      </div>
    </>
  );
}
