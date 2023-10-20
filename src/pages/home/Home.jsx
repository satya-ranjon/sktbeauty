import useTheme from "../../hooks/useTheme";
import BlogSection from "./BlogSection";
import Brand from "./Brand";
import HeroSection from "./HeroSection";
import OurProducts from "./OurProducts";

const Home = () => {
  const { dark } = useTheme();
  return (
    <>
      <HeroSection />
      <Brand />
      <OurProducts />
      <BlogSection />
    </>
  );
};

export default Home;
