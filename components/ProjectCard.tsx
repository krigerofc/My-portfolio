import Image from "next/image";

interface CardProjectProps {
  Title: string;
  C_work: string;
  Desc: string;
  Tec: string[];
  Img: string;
}

export default function CardProject({ Title, C_work, Desc, Tec, Img }: CardProjectProps) {
  return (
    <div 
      className="max-w-md bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden p-6 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 border border-gray-800 hover:border-green-500/30" 
      id="projects"
    >
      <div className="w-full h-56 relative rounded-lg overflow-hidden group">
        <Image
          src={Img}
          alt={Title}
          fill
          style={{ objectFit: "cover" }}
          className="group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-col gap-3 text-white min-h-[200px]">
        <h2 className="text-2xl font-bold tracking-wide text-white hover:text-green-400 transition-colors duration-200">
          {Title}
        </h2>
        
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 bg-green-500 rounded-full" />
          <p className="text-green-400 font-semibold text-sm uppercase tracking-wider">
            {C_work}
          </p>
        </div>
        
        <p className="text-sm text-gray-300 leading-relaxed line-clamp-6">
          {Desc}
        </p>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      <div className="flex flex-wrap gap-2">
        {Tec.map((tag) => (
          <span
            key={tag}
            className="bg-gray-800 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-500/20 hover:border-green-500/50 hover:bg-gray-700 transition-all duration-200 cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}