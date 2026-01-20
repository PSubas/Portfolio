import { ScrollProvider } from "./context/ScrollContext";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <ScrollProvider>
        <Navbar />
        <Layout>
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </Layout>
      </ScrollProvider>
    </>
  );
}

export default App;
