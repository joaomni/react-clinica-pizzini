import "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Info from "./components/Info";
import Perfil from "./components/Perfil";
import Clinic from "./components/Clinic";
import About from "./components/About"
import Road from "./components/Road"
import Error from "./components/Error"
import Feedback from "./components/Feedback"
import Footer from "./components/Footer"

import FloatButton from "./components/shared/FloatButton"


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Info />
      <Perfil />
      <Clinic />
      <About />
      <Road />
      <Error />
      <Feedback />
      <Footer />
      <FloatButton />
    </>
  );
}

export default App;
