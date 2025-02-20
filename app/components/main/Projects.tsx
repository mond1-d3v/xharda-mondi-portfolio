import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[80px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mes Projets
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/le-portfolio.png"
          title="Portfolio ( Next.js )"
          description="Portfolio Moderne en utilisant Next.js, Tailwind CSS et TypeScript. Pensé pour allier esthétique et efficacité grâce à une architecture optimisée."
        />
        <ProjectCard
          src="/dinocash.png"
          title="Casino Website ( SvelteKit )"
          description="Développé en SvelteKit et en Tailwind CSS avec une base de données, ce site web est un casino en ligne."
        />
        
      </div>
    </div>
  );
};

export default Projects;