import Navbar from "../navbar/Navbar";
import Carousel from "../carousel/Carousel";
import About from "../about/About";
import Help from "../help/Help";
import Projects from "../projects/Projects";
import Links from "../links/Links"
import Footer from "../footer/Footer";
function HomePage() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
      <Help />
      <Projects />
      <Links />
      <Footer />

    </div>
  );
}

export default HomePage;
