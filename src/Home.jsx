
import profile from "./assets/profile.png";
export const Home = () => {
  return (
    <div className="main-inner">
      <section className=" md:min-h-[90vh] h-[90vh] flex-col-reverse flex md:flex-row-reverse md:justify-between md:transition-mild z-0" id="home">
        <div className="image-wrapper md:flex flex md:w-[50%] w-[100%] justify-center items-center">
          <div className="image-container top-12 absolute md:top-0 ">
            <img src={profile} alt="" className=" object-contain md:h-[90vh] h-[40vh]  drop-shadow-image" />
          </div>
        </div>
        <div className="md:w-[50%] md:my-0 my-auto md:relative md:mt-32 relative md:-top-20 text-primaryText flex flex-col justify-center items-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold flex justify-center text-[rgb(0,0,0,0.7)] ">
              Hello&nbsp;<span className="text-2xl ">I'm</span>
            </h1>
            <div className="md:flex gap-x-0 items-center justify-center h-16 z-0">
              <section className="animation overflow-hidden md:h-16 h-32">
                <div className="first text-5xl text-center text-primary font-bold mx-8 flex justify-center items-center md:mb-[4.5rem] md:h-16 w-fit mb-24 ">
                  <span className="flex justify-center px-5">
                    &nbsp;Mithun Karthick</span>
                </div>
                <div className="second text-5xl text-primary font-bold text-center flex justify-center items-center  md:mb-[4.5rem] md:h-16 mx-6  w-fit mb-32">
                  <div>
                    Full Stack Developer
                  </div>
                </div>
                <div className="third text-5xl text-primary font-bold  flex justify-center items-center p-2  md:h-16  md:mb-[5rem]">
                  <div>
                    Cybersecurity Analyst
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="relative md:mt-8 z-10">
            {/* <span className="border-2 border-primary rounded-3xl p-2">Full-stack developer & cybersecurity analyst</span> */}
          </div>
          <div className="mt-12 flex justify-between w-[70%] ">
            <a className="flex border-2 border-textColor drop-shadow-sm hover:border-primary text-textColor hover:text-primary rounded-3xl p-2 stroke-textColor hover:stroke-primary" href="https://docs.google.com/document/d/19aqOnmLk7UfeLVrWFbxvOEsbu1rJVyqlIJkplbdACTY/edit" target="_blank">
              <span className=" ">Resume&nbsp;&nbsp;</span>
              <svg width="25" height="22" viewBox="0 0 37 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                <path d="M12.363 16.2537L18.6403 20.5369L24.9177 16.2537"    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.6403 10.8997V20.5369"   stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M32.576 17.4209C33.9403 16.7662 34.9635 15.832 35.4969 14.7537C36.0304 13.6754 36.0464 12.5091 35.5426 11.4242C35.0389 10.3393 34.0415 9.3921 32.6954 8.72014C31.3492 8.04818 29.7242 7.6864 28.0563 7.68729H26.079C25.607 6.43217 24.7238 5.26647 23.496 4.27794C22.2682 3.28941 20.7278 2.50381 18.9906 1.98029C17.2535 1.45677 15.3649 1.20897 13.4671 1.25553C11.5693 1.3021 9.71165 1.64183 8.0341 2.24914C6.35655 2.85645 4.90278 3.71552 3.78222 4.76167C2.66166 5.80783 1.90352 7.0138 1.56487 8.28881C1.22622 9.56382 1.3159 10.8746 1.82713 12.1226C2.33837 13.3705 3.25786 14.5231 4.51637 15.4934"   stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
            <div className="flex gap-4 items-center">
              <a href="https://www.instagram.com/_.mithun._.k._.venkatesan._/" target="_blank">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className=" hover:stroke-primaryText stroke-textColor">
                  <path d="M16 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21H16C18.7614 21 21 18.7614 21 16V6C21 3.23858 18.7614 1 16 1Z"   stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15 10.3701C15.1234 11.2023 14.9813 12.0523 14.5938 12.7991C14.2063 13.5459 13.5932 14.1515 12.8416 14.5297C12.0901 14.908 11.2385 15.0397 10.4078 14.906C9.57714 14.7723 8.80977 14.3801 8.21485 13.7852C7.61993 13.1903 7.22774 12.4229 7.09408 11.5923C6.96042 10.7616 7.09208 9.90995 7.47034 9.15843C7.8486 8.40691 8.4542 7.7938 9.201 7.4063C9.9478 7.0188 10.7978 6.87665 11.63 7.00006C12.4789 7.12594 13.2649 7.52152 13.8717 8.12836C14.4785 8.73521 14.8741 9.52113 15 10.3701Z"   stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.5 5.5H16.51"    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mithun-karthick-venkatesan/" target="_blank" className="">
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" className=" hover:stroke-primaryText stroke-textColor">
                  <path d="M15 7C16.5913 7 18.1174 7.63214 19.2426 8.75736C20.3679 9.88258 21 11.4087 21 13V20H17V13C17 12.4696 16.7893 11.9609 16.4142 11.5858C16.0391 11.2107 15.5304 11 15 11C14.4696 11 13.9609 11.2107 13.5858 11.5858C13.2107 11.9609 13 12.4696 13 13V20H9V13C9 11.4087 9.63214 9.88258 10.7574 8.75736C11.8826 7.63214 13.4087 7 15 7Z"   stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5 8H1V20H5V8Z"   stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3 5C4.10457 5 5 4.10457 5 3C5 1.89543 4.10457 1 3 1C1.89543 1 1 1.89543 1 3C1 4.10457 1.89543 5 3 5Z"    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              <a href="https://github.com/mithun2303" target="_blank">
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=" hover:stroke-primaryText stroke-textColor">
                  <path d="M8 20.0001C3 21.5001 3 17.5001 1 17.0001M15 23.0001V19.1301C15.0375 18.6532 14.9731 18.1739 14.811 17.7239C14.6489 17.2738 14.3929 16.8635 14.06 16.5201C17.2 16.1701 20.5 14.9801 20.5 9.52006C20.4997 8.12389 19.9627 6.78126 19 5.77006C19.4559 4.54857 19.4236 3.19841 18.91 2.00006C18.91 2.00006 17.73 1.65006 15 3.48006C12.708 2.85888 10.292 2.85888 8 3.48006C5.27 1.65006 4.09 2.00006 4.09 2.00006C3.57638 3.19841 3.54414 4.54857 4 5.77006C3.03013 6.78876 2.49252 8.14352 2.5 9.55006C2.5 14.9701 5.8 16.1601 8.94 16.5501C8.611 16.89 8.35726 17.2955 8.19531 17.74C8.03335 18.1845 7.96681 18.6581 8 19.1301V23.0001"   stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              <a href="mailto:mithunkarthick.venkatesan@gmail.com" target="_blank">
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className=" hover:stroke-primaryText stroke-textColor">
                  <path d="M3 1H19C20.1 1 21 1.9 21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3C1 1.9 1.9 1 3 1Z"    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21 3L11 10L1 3"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}