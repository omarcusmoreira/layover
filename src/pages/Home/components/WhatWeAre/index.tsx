import Typography from "@mui/material/Typography";
import ManRestingOnChair from '../../../../assets/images/ManRestingOnChair.svg'
import ManWorkingOnComputer from '../../../../assets/images/ManWorkingOnComputer.svg'
import WomanMeditating from '../../../../assets/images/WomanMeditating.svg'

export function WhatWeAre() {
  return (
    <>
      <div className="what-we-are-container">
        <div className="display-flex direction-column align-items-center col-1-2">
          <Typography variant="h2" className="mb15">
            O que somos
          </Typography>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet. Et internos esse id ipsam dolor qui
            nihil porro eum enim sint ut repellendus illum. Qui voluptatem quam
            et quisquam quae ex adipisci obcaecati et cumque
          </Typography>
        </div>
        <div className="what-we-are-footer">
          <div className="display-flex direction-column align-items-center col-1-3">
            <img src={ManRestingOnChair} alt="" className="mb15" />
            <Typography variant="h4">Lorem ipsum</Typography>
            <Typography variant="subtitle1" className="col-2-3">
              Lorem ipsum dolor sit amet. Ut alias nemo eum facilis odit quo
              maxime ipsum dolore quia non quia quaerat sit blanditiis officiis.
            </Typography>
          </div>

          <div className="display-flex direction-column align-items-center col-1-3">
            <img src={ManWorkingOnComputer} alt="" className="mb15" />
            <Typography variant="h4">Lorem ipsum</Typography>
            <Typography variant="subtitle1" className="col-2-3">
              Lorem ipsum dolor sit amet. Ut alias nemo eum facilis odit quo
              maxime ipsum dolore quia non quia quaerat sit blanditiis officiis.
            </Typography>
          </div>

          <div className="display-flex direction-column align-items-center col-1-3">
            <img src={WomanMeditating} alt="" className="mb15" />
            <Typography variant="h4">Lorem ipsum</Typography>
            <Typography variant="subtitle1" className="col-2-3">
              Lorem ipsum dolor sit amet. Ut alias nemo eum facilis odit quo
              maxime ipsum dolore quia non quia quaerat sit blanditiis officiis.
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}
