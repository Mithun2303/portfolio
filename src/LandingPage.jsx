import { useState } from "react";
import resume from "./assets/Mithun-Karthick-Venkatesan-CV.pdf";
import profile from "./assets/profile.png";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import  About  from "./About";
import { Footer } from "./Footer";

export const LandingPage = () => {
  return (
    <main className="main ">
      <Navbar />
      <Home id="home" style={{overflowY: "scroll",
                    height: "90vh",}} />
     <About id="about" className="h-[90vh]"/>
      {/* <Footer /> */}
    </main>
  )
};
