"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../components/projectcard";
import ProjectTag from "../components/projecttag";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Booki",
    description: "Booki est un site de réservation d'hôtel en ligne, développé en HTML et CSS. Le développement de ce site m'a permis de découvrir mes premières animations CSS ainsi que de découvrir comment fonctionne le responsive design.",
    image :"/images/booki.png",
    tag: ["All", "HTML/CSS"],
    gitUrl: "https://github.com/matslydev/Booki",
    previewUrl: "https://matslydev.github.io/Booki/",
  },
  {
    id: 2,
    title: "OhMyFood",
    description: "OhMyFood est un site regroupant des restaurants selon le secteur de votre choix, depuis celui-ci l'on peut consulter les cartes de différents restaurants. Ce projet Mobile First, construit en HTML/CSS, m'a permis d'appronfondir mes connaissances concernant les animations CSS ainsi que découvir une nouvelle approche de responsive design.",
    image: "/images/OMF.png",
    tag: ["All", "HTML/CSS"],
    gitUrl: "https://github.com/matslydev/OhMyFood",
    previewUrl: "https://matslydev.github.io/OhMyFood/",
  },
  {
    id: 3,
    title: "Kasa",
    description: "Kasa est un site de réservations de chambres d'hôtes type AirBnb. Ce projet construit en React et en Sass m'a permis de découvrir et approfondir ces 2 nouvelles technologies. Ce site m'a permis de prendre conscience de l'immensité du champ des possibles sur React",
    image: "/images/Kasa.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/matslydev/Kasa",
    previewUrl: "https://magical-flan-3f5dbd.netlify.app/",
  },
  {
    id: 4,
    title: "77 Events",
    description: "77Events est un site de consultation d'évênements en tout genre. Pour ce projet, il s'agit d'un site déliveré buggé avec plusieures erreures majeures. Sur ce projet j'ai dû debbuggé plusieurs fonctions ainsi qu'utiliser Jest qui permet de tester les différents composants de mon application.",
    image: "/images/77Events.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/matslydev/724Events",
    previewUrl: "https://dynamic-kelpie-b96c0d.netlify.app/",
  },
  {
    id: 5,
    title: "ArgentBank",
    description: "ArgentBank est un site bancaire permettant au client de consulter son compte et de modifier les opérations de celui-ci. Construit en React, il est managé par Redux via un State Global permettant à l'utilisateur connecté de se déplacer librement dans son application, contrairement à celui déconnecté. Il communique via une API qui suit le modèle CRUD lui permettant d'être opérationnel sous chaque type d'opération.",
    image: "/images/ArgentBank.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/matslydev/ArgentBank-website",
    previewUrl: "https://radiant-vacherin-55a6eb.netlify.app",
  },
  {
    id: 6,
    title: "Sophie Bluel",
    description: "Le portefeuille de Mme Bluel est un portfolio permettant de montrer son travail via des boutons de filtres. L'on a également ajouté un espace de connexion grâce a JavaScript permettant a Mme Buelle de pouvoir changer notamment les photos présentes dans les galleries de présentation via une modale. Il communique via une API qui suit le modèle CRUD lui permettant d'upload et supprimer les photos présentes dans la gallerie.",
    image: "/images/SophieBuell.png",
    tag: ["All", "JavaScript"],
    gitUrl: "https://github.com/matslydev/Sophie-Buell",
    previewUrl: "https://astonishing-scone-f0b118.netlify.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mes Créations
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="JavaScript"
          isSelected={tag === "JavaScript"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="HTML/CSS"
          isSelected={tag === "HTML/CSS"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
