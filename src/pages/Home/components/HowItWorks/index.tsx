import { LocationOn, LuggageOutlined, MapOutlined, TipsAndUpdatesOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function HowItWorks() {
  return (
    <>
      <div className="how-it-works-container">
        <div className="display-flex direction-column align-items-center col-1-2">
          <Typography variant="h2" className="mb15">
            Como funciona?
          </Typography>
          <Typography variant="h6" className="mb15">
            Lorem ipsum dolor sit amet. Et internos esse id ipsam dolor qui
            nihil porro eum enim sint ut repellendus illum. Qui voluptatem quam
            et quisquam quae ex adipisci obcaecati et cumque
          </Typography>
          <Button
            variant="contained"
            className="mb15 col-1-2"
            endIcon={<LocationOn />}
          >
            Adicionar Localização
          </Button>
        </div>
        <div className="how-it-works-footer">
          <div className="how-it-works-footer-col">
            <Typography variant="h1" className="number-section">
              1
            </Typography>
            <TipsAndUpdatesOutlined className="mb15" />
            <Typography variant="h6">Lorem ipsum dolor</Typography>
            <Typography variant="subtitle2">
              Lorem ipsum dolor sit amet. Est consequatur enim sed officiis
              voluptatem eum voluptates harum ut numquam dolor quo voluptatibus
              atque ea sunt rerum sit similique necessitatibus!
            </Typography>
          </div>
          <div className="how-it-works-footer-col">
            <Typography variant="h1" className="number-section">
              2
            </Typography>
            <LuggageOutlined className="mb15" />
            <Typography variant="h6">Lorem ipsum dolor</Typography>
            <Typography variant="subtitle2">
              Lorem ipsum dolor sit amet. Est consequatur enim sed officiis
              voluptatem eum voluptates harum ut numquam dolor quo voluptatibus
              atque ea sunt rerum sit similique necessitatibus!
            </Typography>
          </div>
          <div className="how-it-works-footer-col">
            <Typography variant="h1" className="number-section">
              3
            </Typography>
            <MapOutlined className="mb15" />
            <Typography variant="h6">Lorem ipsum dolor</Typography>
            <Typography variant="subtitle2">
              Lorem ipsum dolor sit amet. Est consequatur enim sed officiis
              voluptatem eum voluptates harum ut numquam dolor quo voluptatibus
              atque ea sunt rerum sit similique necessitatibus!
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}
