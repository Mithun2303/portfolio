import { Navbar } from './Navbar'
import { Home } from './Home';
import { useState } from "react";
import About from './About';

export const LandingPage = () => {
  return (
    <main className="main h-fit bg-black">
      <Navbar />
      <Home/>
<About />

    </main>
  )
};
