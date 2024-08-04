import { useState } from "react";
export const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 100) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);
  return(
    <section className={`md:h-[15vh] h-[10vh] bg-blck ${colorChange?"bg-textColor":"bg-white"} flex justify-between px-24  ${colorChange?"text-white":"text-textColor"} sticky top-0  z-30`}>
        <div className="md:flex md:items-center md:h-full flex md:mx-24 justify-center items-center w-full md:w-fit">
          <h1 className="text-primary md:text-4xl text-3xl font-bold calligraffitti-regular">
            Welcome!
          </h1>
        </div>
        <div className="navbar hidden md:flex md:h-full md:mx-24 md:items-center md:gap-8">
          <a href="#home">
            <span className={`navbar-text font-semibold font-poppins text-xl ${colorChange?"text-white":"text-textColor"} hover:underline `}>
              Home
            </span>
          </a>
          <a href="#about">
            <span className={`text-xl font-semibold font-poppins ${colorChange?"text-white":"text-textColor"} hover:underline `}>
              About
            </span>
          </a>
          <div>
            <span className={`text-xl font-semibold font-poppins ${colorChange?"text-white":"text-textColor"} hover:underline `}>
              Projects
            </span>
          </div>
          <div>
            <span className={`text-xl font-semibold font-poppins ${colorChange?"text-white":"text-textColor"} hover:underline `}>
              Contact me!
            </span>
          </div>
        </div>
      </section>
  )
}