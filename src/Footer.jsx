import connect from "./assets/connect.svg"
import send from "./assets/send.svg"
export const Footer = () => {
    return (
        <main className="main-inner md:h-[90vh] mt-12 mb-24 md:mb-0">
            <section className="md:h-[90vh] flex gap-12 md:p-10 text-4xl font-semibold font-poppins items-center " id="contact">
                <div className="w-1/2 md:flex flex-col items-center hidden ">
                    <span className="text-4xl  font-semibold font-poppins text-white">
                        Lets <span className="text-primary">Connect?</span>
                    </span>
                    <img src={connect} alt="" />
                </div>
                <div className="md:w-1/2 text-[15px] flex flex-col items-center gap-4">
                    <div className="w-full flex flex-wrap gap-[5%] justify-center">
                        <div className="flex w-[75%] flex-col md:w-[32.5%] ">
                            <label htmlFor="name" className="text-[15px] font-semibold text-[#ccc] ">Your name</label>
                            <input type="text" id="name" className="bg-[#393E4680] rounded-lg px-4  font-medium outline-none text-[#Eeeeee]" placeholder="Name" />
                        </div>
                        <div className="flex w-[75%] flex-col md:w-[32.5%]">
                            <label htmlFor="email" className="text-[15px] font-semibold text-[#ccc] ">Your email</label>
                            <input type="text" id="email" className="bg-[#393E4680] rounded-lg px-4  font-medium outline-none text-[#Eeeeee]" placeholder="Email" />
                        </div>
                    </div>
                    <div className="flex flex-col w-[75%] md:w-[70%]">
                        <label htmlFor="message" className="text-[15px] font-semibold text-[#ccc] ">Your message</label>
                        <textarea name="Message" id="message" placeholder="Message" className=" p-4 font-medium  bg-[#393E4680] rounded-lg leading-4 outline-none text-[#Eeeeee]" rows={10}></textarea>
                    </div>
                    <button className="flex md:w-1/3 bg-primary p-2 px-6 items-center rounded-2xl justify-center text-white">
                    Send Message 
                    <img src={send} alt="" />
                    </button>
                </div>
            </section>
        </main>
    )
}