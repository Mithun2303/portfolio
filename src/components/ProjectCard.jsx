import link from "../assets/link.svg"
import github from "../assets/github.svg";
const ProjectCard = ({ ...props }) => {
  return (
    <main className="rounded-lg border-primary md:w-[20vw] w-[80vw] h-[50vh] bg-[rgb(27,27,27,0.5)]">
      <img src={props.link} alt=""
        className="rounded-t-lg" />
      <div className="flex flex-col px-4">
        <h1 className="text-[#ccc] text-[20px] font-light font-poppins">
          {props.title}
        </h1>
        <p className="text-[12.5px] mt-2 line-clamp-5 leading-4 font-extralight text-[#ccc]">
          {props.description}
        </p>

        <span className="text-[12.5px] line-clamp-1 text-[#ccc] font-extralight">
          Tech stack: <span>{props.techStack}</span>
        </span>
        <div className="flex justify-between">
          <a className="flex text-[12.5px] gap-1 font-extralight font-poppins text-[#ccc] underline" href={props.livePreview}>
            <img src={link} alt="" className="w-5" />
            <span>Live Preview</span>
          </a>

          <a href={props.code} className="flex text-[12.5px] gap-1 font-extralight font-poppins text-[#ccc] underline" target="_blank">
            <img src={github} alt="" className="w-5" />
            <span>View Code</span>
          </a>
        </div>
      </div>
    </main>
  )
}

export default ProjectCard