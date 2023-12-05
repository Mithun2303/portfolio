import { useState } from "react";
import { Home } from "./Home";
import { About } from "./About";
import resume from "./assets/Mithun-Karthick-Venkatesan-CV.pdf"
export const LandingPage = () => {
  const [element, setElement] = useState(0);

  return (
    <main className="w-screen h-screen   ">
      <div className="navbar w-screen h-[10vh] flex  text-primary   absolute">
        <div className="w-[30%] my-8 ml-[10%] text-3xl font-extrabold">
          <span className="text-2xl text-text mx-1 ">&lt;</span>
          <span>MITHUN </span>
          <span className="text-2xl text-text mx-0 ">/&gt;</span>
        </div>
        <div className="w-[40%]   text-text ml-[20%] my-8  ">
          <button
            className={`mx-8 text-lg hover:text-primary ${
              element === 0 ? "text-primary" : null
            }`}
            onClick={(e) => setElement(0)}
          >
            &lt; Home /&gt;
          </button>
          <button
            className={`mx-8 text-lg hover:text-primary ${
              element === 1 ? "text-primary" : null
            }`}
            onClick={(e) => setElement(1)}
          >
            &lt; About /&gt;
          </button>
          <button
            className={`mx-8 text-lg hover:text-primary ${
              element === 2 ? "text-primary" : null
            }`}
            // onClick={(e) => setElement(2)}
          >
            <a href={resume}>
            &lt; Résumé /&gt;
            </a>
          </button>
        </div>
      </div>
      <div>{element === 0 ? <Home /> : element === 1 ? <About /> :null}</div>
    </main>
  );
};
