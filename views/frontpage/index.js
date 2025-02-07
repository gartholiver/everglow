import About from "./about";
import Banner from "./banner";
import Contact from "./contact";
import Reviews from "./reviews";
import Services from "./services";

export default function FrontPage() {
  return (
    <>
      <Banner />
      <Services />
      <About />
      <Reviews />
      <Contact />
    </>
  );
}