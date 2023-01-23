import { ArrowCircleRightOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function SearchFlight() {
  return (
    <>
      <div className="search-fly-container">
        <Typography variant="h3" className="mr15">
          Lorem ipsum dolor sit amet. Id temporibus
        </Typography>
        <Button
          variant="contained"
          className="col-2-3"
          endIcon={<ArrowCircleRightOutlined />}
        >
          Localizador de Voo
        </Button>
      </div>
    </>
  );
}
