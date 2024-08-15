import { useState } from "react";
import resume from "./assets/Mithun-Karthick-Venkatesan-CV.pdf";
import profile from "./assets/profile.png";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import About from "./About";
import { Footer } from "./Footer";
import { TechStack } from "./TechStack";

export const LandingPage = () => {
  return (
    <main className="main ">
      <Navbar />
      <Home id="home" className="h-[90vh] overflow-y-scroll" />
      <About id="about" className="h-[90vh]" />
      <TechStack id="about" className="h-[90vh] bg-white" />
      {/* <Footer /> */}
    </main>
  )
};
