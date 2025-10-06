'use client';

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

import { FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import Link from "next/link";

const date_new = new Date();
const age:number = date_new.getFullYear() - 2005;
const WorkAge:number = date_new.getFullYear() - 2022;

const social = [
    {icon: <FaGithub/>, path:"https://github.com/krigerofc"},
    {icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/pedrokriger/"},
    {icon: <FaDiscord/>, path:"https://discord.gg/gzsv34RK8j"},
]

const HandleDownload = () => {
    window.open("/assets/doc/Pedro_dev.pdf", "_blank");
}

export default function Header(){
   return (
    <div className="w-full h-screen bg-gray" id="about">

      {/* ---------------- Mobile View ---------------- */}
      <div className=" md:hidden w-full h-full flex flex-col items-center justify-start text-center px-6 pt-10 gap-4 overflow-y-auto my-30">

        <p className="tracking-wider text-2xl md:text-3xl text-white mb-14">
          Full stack developer
        </p>

        <Avatar className="animate-float size-60 sm:size-72 border-2 border-gray-700 shadow-[0_0_12px_6px_rgba(34,197,94,0.7)]">
          <AvatarImage src="/assets/Dev.png" alt="avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="text-4xl sm:text-5xl tracking-wider leading-tight text-white mt-4">
          <h1>Hello, I'M</h1>
          <h1 className="text-green-500 border-b-2 border-green-400">
            Pedro Henrique
          </h1>
        </div>

        <div className="flex flex-row items-center justify-center space-x-4 mt-4">
          <a href="/assets/doc/Dev.pdf" download>
            <Button
              onClick={HandleDownload}
              variant="outline"
              className="text-2xl cursor-pointer p-4 bg-transparent hover:bg-transparent border-green-500 text-green-500 hover:text-green-800"
            >
              Download CV
            </Button>
          </a>

          <div className="flex flex-row justify-center items-center space-x-4">
            {social.map((item, index) => (
              <Link
                className="flex justify-center items-center text-2xl text-green-500 hover:text-green-800 transition-all"
                key={index}
                href={item.path}
                target="_blank"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 text-white max-w-[600px] flex flex-col items-center px-2">
          <p className="tracking-wider font-light text-base sm:text-lg">
            Hi, I'm Pedro, a {age} years old web full stack developer with{" "}
            {WorkAge} years of experience and a current student of cybersecurity.
          </p>

          <p className="mt-4 tracking-wider font-light text-base sm:text-lg">
            I'm a student of Systems Analysis and Development, with a technical
            degree.<br />
            I'm currently seeking new opportunities to enhance my knowledge and
            gain valuable experience.
          </p>
        </div>
      </div>

      {/* ---------------- Desktop View ---------------- */}
      <div className="hidden md:flex w-full h-full flex-row items-center justify-center text-left px-6 md:px-20 gap-20 lg:my-10">

        <div className="text-white max-w-[1000px] flex flex-col items-start">
          <p className="tracking-wider text-2xl md:text-3xl ">Full stack developer</p>

          <div className="text-5xl md:text-8xl tracking-wider leading-tight mt-4">
            <h1>Prazer, eu sou</h1>
            <h1 className="text-green-500 border-b-2 border-green-400">
              Pedro Henrique
            </h1>
          </div>

          <p className="mt-8 tracking-wider font-light text-base sm:text-lg">
            Olá, sou Pedro, desenvolvedor web full stack de {age} anos
            com {WorkAge} anos de experiência e amante de cibersegurança.
          </p>

          <p className="mt-4 tracking-wider font-light text-base sm:text-lg">

            Sou estudante de Análise e Desenvolvimento de Sistemas, com formação técnica.<br />
            Estou em busca de novas oportunidades para aprimorar meus conhecimentos 
            e adquirir experiências valiosas.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:space-x-8 space-y-4 sm:space-y-0">
            <a href="/assets/doc/Pedro_dev.pdf" download>
              <Button
                onClick={HandleDownload}
                variant="outline"
                className="text-2xl md:text-3xl cursor-pointer p-4 md:p-6 bg-transparent hover:bg-transparent border-green-500 text-green-500 hover:text-green-800"
              >
                Download CV
              </Button>
            </a>

            <div className="flex flex-row items-center space-x-4">
              {social.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  target="_blank"
                  className="flex items-center justify-center h-12 w-12 text-2xl md:text-3xl text-green-500 hover:text-green-800 transition-all"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Avatar className="animate-float size-96 border-2 border-gray-700 shadow-[0_0_12px_6px_rgba(34,197,94,0.7)]">
            <AvatarImage src="/assets/Dev.png" alt="avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

      </div>

    </div>
  );
}
