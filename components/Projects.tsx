import Languages from "./languages";
import CardProject from "./ProjectCard";

export default function Project() {
    const projects = [
        {
            Imagem: '/assets/etique.png',
            Titulo: 'Etiqueta Fácil',
            Cargo: "Desenvolvedor Full Stack",
            Descricao: 'O projeto etiqueta f[acil foi feito sobe uma necessidade real de etiquetar e cuidar de todo o gerencimento de estoque de um cozinha em restaurantesProjeto desenvolvido para atender a uma necessidade real de gerenciamento de estoque em cozinhas de restaurantes. A solução permite a criação e controle de etiquetas digitais, otimizando o processo de organização, rastreabilidade e reposição de insumos.',
            tecs: ["Next.JS", "React", "Prisma ORM", "Javascript", "TailwindCSS", "Vercel", "API REST", "CRUD", "IA", "SQL"]
        },
        {
            Imagem: '/assets/shoesadmin.png',
            Titulo: 'ShoesStore',
            Cargo: "Desenvolvedor Full Stack",
            Descricao: 'Projeto MPV de plataforma para venda de tênis. oferece uma experiência completa e personalizada para quem busca estilo, conforto e performance.',
            tecs: ["NextJS", "REDIS", "Javascript", "PostgreSQL", "TailwindCSS", "Rest api", "Git", "Github"]
        },
        {
            Imagem: '/assets/port.png',
            Titulo: 'Portfólio',
            Cargo: "Desenvolvedor Full Stack",
            Descricao: 'Este portfólio foi desenvolvido para apresentar minha trajetória como desenvolvedor full stack, destacando minhas habilidades técnicas, projetos realizados e áreas de especialização. A interface foi construída com foco em clareza, responsividade e identidade visual profissional, refletindo meu estilo de desenvolvimento e atenção aos detalhes..',
            tecs: ["Next.JS", "Landing Page", "TypeScript", "TailwindCSS", "Vercel", "Shadcn", "UI", "UX"]
        },
        {
            Imagem: '/assets/passive.png',
            Titulo: 'Passive Skill',
            Cargo: "Desenvolvedor .Lua",
            Descricao: 'O mod Passive Skills adiciona uma nova camada de progressão ao Project Zomboid, permitindo que os jogadores desenvolvam habilidades de forma passiva ao explorar o mundo do jogo. Em vez de depender exclusivamente de ações repetitivas para ganhar XP, agora é possível evoluir lendo revistas e livros espalhados pelo mapa.',
            tecs: ["LUA", "Java", "PostgreSQL", "Modding", "Documentação", "POO", "IA"]
        },
        {
            Imagem: '/assets/bot2.png',
            Titulo: 'Bot kriger',
            Cargo: "Desenvolvedor back end",
            Descricao: 'Este projeto é um bot personalizado para servidores Discord, desenvolvido com foco em automação de tarefas administrativas e interação divertida com os usuários. A proposta é oferecer comandos inovadores e adaptáveis, superando as limitações dos bots convencionais.',
            tecs: ["Python", "MongoDB", "API", "POO", "Redes", "Doc"]
        },
        {
            Imagem: '/assets/botsite.png',
            Titulo: 'Landing page Bot',
            Cargo: "Desenvolvedor Full Stack",
            Descricao: 'A landing page do Bot Kriger foi desenvolvida para apresentar de forma clara e atrativa as funcionalidades de um bot multifuncional para servidores Discord. Com foco em moderação, diversão e economia virtual, a página comunica os principais recursos do bot e convida os usuários a integrá-lo às suas comunidades.',
            tecs: ["HTML", "CSS", "Responsive", "Javascript"]
        }
    ];

    return (
        <div className="w-full min-h-[900px] bg-gray-800 py-10">
            <Languages />
            <div className="flex flex-wrap justify-center gap-10 mt-10">
                {projects.map((item, index) => (
                    <CardProject
                        key={index}
                        Title={item.Titulo}
                        C_work={item.Cargo}   // <- aqui usamos Cargo
                        Desc={item.Descricao}
                        Tec={item.tecs}
                        Img={item.Imagem}
                    />
                ))}
            </div>
        </div>
    );
}
