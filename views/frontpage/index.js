import About from "./about";
import Banner from "./banner";
import Contact from "./contact";
import Reviews from "./reviews";
import Services from "./services";

export default function FrontPage({ banner }) {
  return (
    <>
      <Banner banner={banner} />
      <Services />
      <About />
      <Reviews />
      <Contact />
    </>
  );
}