import link from "../assets/link.svg"
import github from "../assets/github.svg";
const ProjectCard = ({ ...props }) => {
  return (
    <main className="rounded-lg border-primary md:w-[20vw] w-[80vw] h-[50vh] bg-[rgb(27,27,27,0.5)]">
      <img src="https://s3-alpha-sig.figma.com/img/6137/8a00/32f30b561bea9168c23cb7e62e2faca6?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k39u6lk-7N7QGM9Dp3xxkj6kfkjlkvQ1GznoZEOhChZpJzsJu4H2gk93sxjuyEOnBkxX8MhIDlqOMUS6r~KE0kVRk235wxtJJ0FlP-4-04wXLf5XISxpiOmBdBkSOqyvhMPFctF7Xf-20KqkfamDhYvr3dRM5alu-q6oQhfxOVW2ey1KJUGgc0ERM9XouSTgpRVKUULCgrddMrtc7xbn4bNbjJWsa~rlyvMnjtc6NGBuotEl9m9zFLe4pIcNmDVIiigQKSN2YX-YcxW2ZVBC4Du4HiAYYNP2AdRRtJsu5I63~BcIW5RTauogz-T-C8OodC~hO2AIOGBDUtp-~Q85Tw__" alt=""
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

          <a href={props.code} className="flex text-[12.5px] gap-1 font-extralight font-poppins text-[#ccc] underline">
            <img src={github} alt="" className="w-5" />
            <span>View Code</span>
          </a>
        </div>
      </div>
    </main>
  )
}

export default ProjectCard