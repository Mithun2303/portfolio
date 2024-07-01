export const Navbar = () => {
  return(
    <section className="h-[10vh] bg-black flex justify-between px-12 drop-shadow-2xl sticky top-0  z-30">
        <div className="md:flex md:items-center md:h-full flex md:mx-24 justify-center items-center w-full md:w-fit">
          <h1 className="text-primary md:text-2xl text-3xl font-bold">
            Welcome!
          </h1>
        </div>
        <div className="navbar hidden md:flex md:h-full md:mx-24 md:items-center md:gap-8">
          <div>
            <span className="navbar-text text-xl text-white hover:underline ">
              Home
            </span>
          </div>
          <div>
            <span className="text-xl text-white hover:underline ">
              About
            </span>
          </div>
          <div>
            <span className="text-xl text-white hover:underline ">
              Projects
            </span>
          </div>
          <div>
            <span className="text-xl text-white hover:underline ">
              Contact me!
            </span>
          </div>
        </div>
      </section>
  )
}