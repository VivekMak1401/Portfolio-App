import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
