import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="certifs"
    >
      <h1 className="text-[80px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Certifications
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/sql-certificate.png"
          title="SQL (Advanced)"
          description="Certifié SQL Advanced, démontrant une expertise approfondie en conception et optimisation de bases de données relationnelles."
        />
        <ProjectCard
          src="/python-certificate.png"
          title="Python (Basics)"
          description="Certifié Python Basic, démontrant une compréhension fondamentale de la programmation en Python"
        />
        <ProjectCard
          src="/csharp-certif.png"
          title="C# (Basics)"
          description="Je suis certifié C# Basic, démontrant une compréhension fondamentale de la programmation en C#."
        />
      </div>
    </div>
  );
};

export default Projects;