import Image from "next/image";


interface CardProjectProps {
  Title: string;
  C_work: string;
  Desc: string;
  Tec: string[];
  Img: string;
}


export default function CardProject({ Title, C_work, Desc, Tec, Img } : CardProjectProps) {
  return (
    <div className="max-w-md bg-gray-900 rounded-xl shadow-lg overflow-hidden p-4 flex flex-col gap-4">

      <div className="w-full h-48 relative">
        <Image
          src={Img}
          alt={Title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-md"
        />
      </div>


      <div className="flex flex-col gap-2 text-white">
        <h2 className="text-xl font-medium">{Title}</h2>
        <p className="font-medium">{C_work}</p>   {/* <- aqui aparece o Cargo */}
        <p className="text-sm">{Desc}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {Tec.map(tag => (
          <span
            key={tag}
            className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
}
