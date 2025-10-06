import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const contact = [
  { icon: FaPhoneAlt, font: "Phone", label: "(33) 99857-3352" },
  { icon: FaEnvelope, font: "Email", label: "Dev.kriger@gmail.com" },
  { icon: FaMapMarkerAlt, font: "Address", label: "Paulínia - São Paulo" },
];

const ButtonContact = [
  { icon: FaWhatsapp, label: "Whatsapp", contact: "https://wa.me/+5533998573352" },
  { icon: FaLinkedin, label: "LinkedIn", contact: "https://www.linkedin.com/in/pedrokriger/" },
  {
    icon: AiOutlineMail,
    label: "Email",
    contact:
      "https://mail.google.com/mail/?view=cm&fs=1&to=dev.kriger@gmail.com&su=Contato Portfólio&body=Gostei do seu portfólio e gostaria de conversar sobre",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="w-full  py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col text-white items-center">

        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-green-500 tracking-tight">
          Contact
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-start gap-16 w-full">
          <div className="space-y-10 w-full md:w-1/2">

            {contact.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-5 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="p-4 bg-green-600/10 rounded-full group-hover:bg-green-600/20 transition">
                    <Icon className="text-green-400 text-4xl" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-green-500 ">{item.font}</p>
                    <p className="text-lg text-gray-300">{item.label}</p>
                  </div>
                </div>
              );
            })}

          </div>

          <div className="flex flex-col w-full md:w-1/2 items-center md:items-end space-y-12">
          
            {ButtonContact.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.contact}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full md:w-3/4 py-4 rounded-2xl border border-green-500 text-green-500 text-xl font-semibold transition-all duration-300 hover:bg-green-700 hover:text-white hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <Icon className="text-2xl" />
                  {item.label}
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
