import Languages from "./languages";
import CardProject from "./ProjectCard";

export default function Project() {
  const projects = [
    {
      Imagem: '/assets/etique.png',
      Titulo: 'Etiqueta Fácil',
      Cargo: "Desenvolvedor Full Stack",
      Descricao: 'Sistema completo desenvolvido para atender a uma necessidade real de gerenciamento de estoque em cozinhas de restaurantes. A solução permite a criação e controle de etiquetas digitais, otimizando o processo de organização, rastreabilidade e reposição de insumos. O projeto implementa funcionalidades de etiquetagem automática, controle de validade e alertas de reposição, garantindo eficiência operacional e redução significativa de desperdícios.',
      tecs: ["Next.JS", "React", "Prisma ORM", "JavaScript", "TailwindCSS", "Vercel", "API REST", "CRUD", "IA", "SQL"]
    },
    {
      Imagem: '/assets/shoesadmin.png',
      Titulo: 'ShoesStore',
      Cargo: "Desenvolvedor Full Stack",
      Descricao: 'Projeto MVP de plataforma e-commerce especializada na venda de tênis e calçados esportivos. A aplicação oferece uma experiência completa e personalizada para quem busca estilo, conforto e performance. O sistema integra catálogo de produtos, carrinho de compras, sistema de pagamento e painel administrativo para gerenciamento de inventário e pedidos.',
      tecs: ["Next.JS", "Redis", "JavaScript", "PostgreSQL", "TailwindCSS", "REST API", "Git", "GitHub"]
    },
    {
      Imagem: '/assets/port.png',
      Titulo: 'Portfólio Profissional',
      Cargo: "Desenvolvedor Full Stack",
      Descricao: 'Portfólio profissional desenvolvido para apresentar minha trajetória como desenvolvedor full stack, destacando habilidades técnicas, projetos realizados e áreas de especialização. A interface foi construída com foco em clareza, responsividade e identidade visual profissional, refletindo meu estilo de desenvolvimento e atenção aos detalhes. O projeto implementa animações suaves, design moderno e otimização para SEO.',
      tecs: ["Next.JS", "Landing Page", "TypeScript", "TailwindCSS", "Vercel", "Shadcn", "UI/UX Design"]
    },
    {
      Imagem: '/assets/passive.png',
      Titulo: 'Passive Skills Mod',
      Cargo: "Desenvolvedor Lua",
      Descricao: 'Modificação para Project Zomboid que adiciona uma nova camada de progressão, permitindo que os jogadores desenvolvam habilidades de forma passiva ao explorar o mundo do jogo. Em vez de depender exclusivamente de ações repetitivas para ganhar XP, agora é possível evoluir através da leitura de revistas e livros espalhados pelo mapa. O mod implementa um sistema de aprendizado realista, com diferentes categorias de conhecimento e progressão gradual.',
      tecs: ["Lua", "Java", "PostgreSQL", "Modding", "Documentação", "POO", "IA"]
    },
    {
      Imagem: '/assets/bot2.png',
      Titulo: 'Bot Kriger',
      Cargo: "Desenvolvedor Back-end",
      Descricao: 'Bot personalizado para servidores Discord, desenvolvido com foco em automação de tarefas administrativas e interação dinâmica com os usuários. A proposta oferece comandos inovadores e adaptáveis, superando as limitações dos bots convencionais. O sistema implementa funcionalidades de moderação automatizada, economia virtual com sistema de moedas e ranks, mini-games interativos, sistema de níveis e recompensas, além de comandos de utilidade e entretenimento.',
      tecs: ["Python", "MongoDB", "API", "POO", "Redes", "Documentação"]
    },
    {
      Imagem: '/assets/botsite.png',
      Titulo: 'Landing Page - Bot Kriger',
      Cargo: "Desenvolvedor Front-end",
      Descricao: 'Landing page desenvolvida para apresentar de forma clara e atrativa as funcionalidades do Bot Kriger, um bot multifuncional para servidores Discord. Com foco em moderação, diversão e economia virtual, a página comunica os principais recursos do bot através de um design moderno e responsivo. O site convida os usuários a integrá-lo às suas comunidades de maneira intuitiva, apresentando guias de instalação, lista completa de comandos e exemplos práticos de uso.',
      tecs: ["HTML5", "CSS3", "Design Responsivo", "JavaScript"]
    }
  ];

  return (
    <div className="w-full min-h-[900px] bg-gray-800 py-10">
      <Languages />
      <div className="flex flex-wrap justify-center gap-10 mt-10 px-4">
        {projects.map((item, index) => (
          <CardProject
            key={index}
            Title={item.Titulo}
            C_work={item.Cargo}
            Desc={item.Descricao}
            Tec={item.tecs}
            Img={item.Imagem}
          />
        ))}
      </div>
    </div>
  );
}