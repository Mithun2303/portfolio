import js from "./assets/js.svg"
import tailwind from "./assets/tailwind.svg"
import react from "./assets/react.svg"
import git from "./assets/git.svg"
import nestjs from "./assets/nestjs.svg"
import postman from "./assets/postman.svg"
import fastapi from "./assets/fastapi.svg"
import express from "./assets/express.svg"
import psql from "./assets/psql.svg"
import figma from "./assets/figma.svg"
import docker from "./assets/docker.svg"
export const TechStack = () => {
    return (
        <main className="main-inner  md:p-[10vh] md:h-[90vh]">
            <section id="tech" className="flex flex-col gap-12 justify-center  text-4xl font-semibold font-poppins items-center  ">
                <div className="text-primary">
                    My Tech Stack
                </div>
                <div className="flex flex-wrap justify-center gap-12 w-[75%]">
                    <img src={tailwind} alt="" className="w-[100px] drop-shadow-lg"/>
                    <img src={js} alt="" className="w-[100px] drop-shadow-lg"/>
                    <img src={react} alt="" className="w-[100px] drop-shadow-lg"/>
                    <img src={git} alt="" className="w-[100px] drop-shadow-lg"/>
                    <img src={nestjs} alt="" className="w-[100px] drop-shadow-lg"/>
                    <img src={postman} alt="" className="w-[100px] drop-shadow-lg"/>
                    <img src={fastapi} alt="" className="w-[100px] drop-shadow-lg"/>
                    <img src={express} alt="" className="w-[100px] drop-shadow-lg"/>
                    <img src={psql} alt="" className="w-[100px] drop-shadow-lg"/>
                    <img src={figma} alt="" className="w-[100px] drop-shadow-lg"/>
                    <img src={docker} alt="" className="w-[100px] drop-shadow-lg"/>

                </div>
            </section>
        </main>
    )
}
