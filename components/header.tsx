'use client';

import Image from "next/image";
import Fs from 'fs';
import path from "path";

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
    window.open("/assets/doc/Dev.pdf", "_blank");
}

export default function Header(){
    return(
        <div className="w-full h-[90vh] bg-gray">
            <div className="p-6 w-full h-full flex flex-row items-center justify-center space-x-20">

                <div className="text-white">
                    <p className="tracking-wider text-3xl">
                        Full stack developer
                    </p>

                    <div className="text-8xl tracking-wider">
                        <h1>Hello I'M</h1>
                        <h1 className="text-green-500 border-b-2 border-green-400">Pedro Henrique</h1>
                    </div>

                    <p className="mt-8 tracking-wider font-light max-w-[700px]">
                        Hi, I'm Pedro, a {age} years old web full stack developer with {WorkAge} years of experience and a current student of cybersecurity.<br/>

                        <p className="mt-4">
                            I'm a student of Systems Analysis and Development, with a technical degree.<br/>
                            I'm currently seeking new opportunities to enhance my knowledge and gain valuable experience.
                        </p>
                    </p>
                    <div className="mt-10 flex flex-row space-x-8">
                        <a href="/assets/doc/Dev.pdf" download>
                            <Button onClick={HandleDownload} variant="outline" className="text-3xl cursor-pointer p-6 bg-transparent hover:bg-transparent border-green-500 text-green-500 hover:text-green-800">
                                Download CV
                            </Button>
                        </a>

                        {social.map((item, index) => {
                            return (
                                <Link className="flex flex-row justify-center items-center text-3xl text-green-500 hover:text-green-800 "
                                key={index} href={item.path} target="_blank"> {item.icon}</Link>
                            )
                        })}
                        
                    </div>
                </div>

                <div>
                    <Avatar className="animate-float size-96 border-2 border-gray-700 shadow-[0_0_12px_6px_rgba(34,197,94,0.7)]">
                        <AvatarImage
                        src="/assets/Dev.png" alt="avatar"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

            </div>
        </div>
    );
} 