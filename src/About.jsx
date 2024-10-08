import profile from "./assets/profile\ copy.jpeg"
export default function About() {
    return (
        <div className="main-inner  md:mt-6 md:mb-16 md:pt-12">
            <section id="about" className=" md:min-h-[90vh] h-[90vh] flex md:flex-row md:justify-between md:transition-mild z-0 " >
                <div className="image-wrapper md:flex hidden md:w-[50%]  justify-center items-center">
                    <div className="border-8 md:h-[62.5vh] left-20 -top-8 md:w-[27.5vw] relative border-primary"></div>
                    <div className="image-container absolute ">
                        <img src={profile} alt="" className=" object-contain absolute top-10 h-[65vh] w-[35vw] drop-shadow-2xl" />
                    </div>
                </div>
                <div className="md:w-[50%] md:relative md:mt-32 relative md:-top-20 text-primary flex flex-col">
                    <div className="text-left mx-[15%]">
                        <h1 className="text-5xl md:my-12 my-6 uppercase">
                            Mithun Karthick
                        </h1>
                        <div className="md:flex gap-x-0 md:justify-start  md:w-full md:mt-12">
                            <p className=" text-xl w-full text-left text-white">
                                Hello! I'm Mithun Karthick, a <strong>Fullstack developer </strong>
                                 and <strong>Cybersecurity </strong> student passionate about the
                                intricate dance between code and security.
                                My passion lies in pushing the boundaries of innovation while ensuring every project I undertake bring a unique blend of creativity and technical rigor. Let's connect and explore how we can make technology not just functional, but impressively secure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}