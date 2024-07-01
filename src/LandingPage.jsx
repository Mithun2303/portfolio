import { useState } from "react";
import resume from "./assets/Mithun-Karthick-Venkatesan-CV.pdf";
import profile from "./assets/profile.png";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import  About  from "./About";

export const LandingPage = () => {
  return (
    <main className="main h-fit bg-black">
      <Navbar />
      <Home />
     <About />

    </main>
  )
};
