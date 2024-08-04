import { useState } from "react";
import resume from "./assets/Mithun-Karthick-Venkatesan-CV.pdf";
import profile from "./assets/profile.png";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import  About  from "./About";
import { Footer } from "./Footer";

export const LandingPage = () => {
  return (
    <main className="main h-fit bg-">
      <Navbar />
      <Home id="home" style={{overflowY: "scroll",
                    height: "800px",}} />
     <About id="about"/>
      {/* <Footer /> */}
    </main>
  )
};
