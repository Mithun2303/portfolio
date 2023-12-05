import { useState } from "react";
import { Home } from "./Home";
import { About } from "./About";
import resume from "./assets/Mithun-Karthick-Venkatesan-CV.pdf";
export const LandingPage = () => {
  const [element, setElement] = useState(0);
  const [show, setShow] = useState(false);
  return (
    <main className="w-screen h-screen bg-fixed bg-cover">
      <nav className="">
        <div className="max-w-screen-xl flex sm:flex-wrap md:flex-nowrap items-center justify-between mx-auto p-4">
          <div className="sm:w-[70%] md:w-[40%] lg:w-[70%] my-8 sm:mx-auto md:lg:ml-[10%] text-3xl text-primary font-extrabold">
            <span className="text-2xl text-text mx-1 ">&lt;</span>
            <span>MITHUN </span>
            <span className="text-2xl text-text mx-0 ">/&gt;</span>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={(e) => setShow(!show)}
          >
            <span className="sr-only text-text">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${!show ? "hidden" : null} w-full md:block md:w-auto"`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg justify-left md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 text-text">
              <li>
                <button
                  className={`mx-4 sm:mx-8 text-lg md:lg:sm:hover:text-primary ${
                    element === 0 ? "text-primary" : null
                  }`}
                  onClick={() => setElement(0)}
                >
                  &lt; Home /&gt;
                </button>
              </li>
              <li>
                <button
                  className={`mx-4 sm:mx-8 text-lg hover:text-primary ${
                    element === 1 ? "text-primary" : null
                  }`}
                  onClick={() => setElement(1)}
                >
                  &lt; About /&gt;
                </button>
              </li>
              <li>
                <a href={resume}>
                  <button
                    className={`mx-4 sm:mx-8 text-lg hover:text-primary ${
                      element === 2 ? "text-primary" : null
                    }`}
                    onClick={() => setElement(2)}
                  >
                    &lt; Résumé /&gt;
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="relative">
        {element === 0 ? (
          <Home />
        ) : element === 1 ? (
          <About />
        ) : element == 2 ? (
          <Home />
        ) : null}
      </div>
    </main>
  );
};
