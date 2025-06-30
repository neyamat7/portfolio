import AboutMe from "../../components/AboutMe/AboutMe";
import Contacts from "../../components/Contacts/Contacts";
import HeroSection from "../../components/HeroSection/HeroSection";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
};

export default Home;
