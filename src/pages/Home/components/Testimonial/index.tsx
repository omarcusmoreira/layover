import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import { CarouselItem } from "../../../../components/CarouselItem";

export function Testimonial() {
  const carrouselItems = [
    {
      text: "Lorem ipsum dolor sit amet. Aut pariatur quaerat sit delectus fugit aut quasi explicabo ut veniam inventore. Non fugiat temporibus aut odit ipsam odio .\n Non suscipit eius est sint totam non quam nisi. Eum iure blanditiis qui sint quidem cum fuga illum id velit sint sed quibusdam?",
      title: "LOREM IPSUM DOLOR SIT AMET",
      name: "Loremipso",
      companyName: "CEO GetNextDesign ",
    },
    {
      text: "Lorem ipsum dolor sit amet. Aut pariatur quaerat sit delectus fugit aut quasi explicabo ut veniam inventore. Non fugiat temporibus aut odit ipsam odio .\n Non suscipit eius est sint totam non quam nisi. Eum iure blanditiis qui sint quidem cum fuga illum id velit sint sed quibusdam?",
      title: "LOREM IPSUM DOLOR SIT AMET",
      name: "Loremipso",
      companyName: "CEO GetNextDesign ",
    },
    {
      text: "Lorem ipsum dolor sit amet. Aut pariatur quaerat sit delectus fugit aut quasi explicabo ut veniam inventore. Non fugiat temporibus aut odit ipsam odio .\n Non suscipit eius est sint totam non quam nisi. Eum iure blanditiis qui sint quidem cum fuga illum id velit sint sed quibusdam?",
      title: "LOREM IPSUM DOLOR SIT AMET",
      name: "Loremipso",
      companyName: "CEO GetNextDesign ",
    },
  ];
  return (
    <>
      <div className="testimonials-container">
        <Typography variant="h4" className="mb15">
          Confira o que os nossos clientes estão falando!
        </Typography>

        <div className="testimonials-carrousel">
          <Carousel
            className="col-1-1 row-1-1"
            height="100%"
            navButtonsProps={{
              style: {
                backgroundColor: "#021442",
                color: "#eaeaea",
              },
            }}
            activeIndicatorIconButtonProps={{
              style: {
                color: "#E30B22",
              },
            }}
            animation="slide"
          >
            {carrouselItems.map((item, index) => (
              <CarouselItem
                text={item.text}
                title={item.title}
                name={item.name}
                companyName={item.companyName}
                key={index}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
