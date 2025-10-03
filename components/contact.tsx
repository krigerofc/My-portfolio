import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const contact = [
    {icon:FaPhoneAlt, font:'Phone', label:'(33) 99857-3352'},
    {icon:FaEnvelope, font:'Email', label:'Dev.kriger@gmail.com'},
    {icon:FaMapMarkerAlt, font:'Address', label:'| Belo Horizonte - MG | Paulínia - São paulo'},
]

const ButtonContact = [
    {icon:FaWhatsapp, label:'Whatsapp', contact:'https://wa.me/+5533998573352'},
    {icon:FaLinkedin, label:'LinkedIn', contact:'https://www.linkedin.com/in/pedrokriger/'},
    {icon:AiOutlineMail , label:'Email', contact:"https://mail.google.com/mail/?view=cm&fs=1&to=dev.kriger@gmail.com&su=Contato Portifólio&body=Gostei do seu portfólio e gostaria de conversar sobre"},
]

export default function Contact(){
    return(
        <div className="w-full h-[550px] bg-gray-950 p-10">
             <div className="text-white flex flex-col items-center justify-center px-6 py-12">
                
                <h1 className="text-6xl font-bold mb-14">Contact</h1>
                <div className="flex flex-row gap-x-10 justify-center items-center">
                    <div className="space-y-8 max-w-md w-1/2 flex-1">
                        {contact.map((item, index) =>{
                            const Icon = item.icon;
                            return(
                                <div className="flex items-center gap-4" key={index}>
                                    <Icon className="text-green-500 text-5xl" />
                                    <div>
                                        <p className="text-2xl font-semibold">{item.font}</p>
                                        <p className="text-lg">{item.label}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="space-y-10 max-w-md w-1/2 flex-1">
                        {ButtonContact.map((item, index) =>{
                            const Icon = item.icon;
                            return(
                                <div className="flex items-center justify-center gap-4" key={index}>
                                    <a href={item.contact} target="_blank"
                                        className=" flex flex-row space-x-4 text-2xl border-1 rounded-4xl justify-center items-center
                                        text-green-500 bg-transparent hover:bg-transparent p-4 border-green-500 hover:text-green-800 cursor-pointer
                                        animate-pulse transition">
                                            <Icon/>
                                            <span>{item.label}</span>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}