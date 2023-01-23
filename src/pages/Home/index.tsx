import { AccountActions } from "./components/AccountActions";
import { Footer } from "./components/Footer";
import { HowItWorks } from "./components/HowItWorks";
import { SearchFlight } from "./components/SearchFlight";
import { Testimonial } from "./components/Testimonial";
import { WhatWeAre } from "./components/WhatWeAre";

export function Home() {
  return (
    <>
      <AccountActions />
      <WhatWeAre />
      <HowItWorks />
      <SearchFlight />
      <Testimonial />
      <Footer />
    </>
  );
}
