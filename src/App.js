import { useEffect, useState } from "react";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/services";
import Contact from "./components/Contact1.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App =() =>{
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);

  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  return (
    <>
    <HeaderPhone  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}  />
     <Home ratio={ratio} />
     <Work />
     <Timeline />
     <Services />
     <Contact />
     <Footer />
     <Toaster />
    </>
  )
}

export default App;
