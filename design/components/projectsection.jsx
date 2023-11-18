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
    description: "Project 1 description",
    image :"/images/booki.png",
    tag: ["All", "HTML/CSS"],
    gitUrl: "https://github.com/Matzoo38/Booki",
    previewUrl: "https://matzoo38.github.io/Booki/",
  },
  {
    id: 2,
    title: "OhMyFood",
    description: "Project 2 description",
    image: "/images/OMF.png",
    tag: ["All", "HTML/CSS"],
    gitUrl: "https://github.com/Matzoo38/OhMyFood",
    previewUrl: "https://matzoo38.github.io/OhMyFood/",
  },
  {
    id: 3,
    title: "Kasa",
    description: "Project 3 description",
    image: "/images/Kasa.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Matzoo38/Kasa",
    previewUrl: "https://magical-flan-3f5dbd.netlify.app/",
  },
  {
    id: 4,
    title: "77 Events",
    description: "Project 4 description",
    image: "/images/77Events.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Matzoo38/724Events",
    previewUrl: "https://dynamic-kelpie-b96c0d.netlify.app/",
  },
  {
    id: 5,
    title: "ArgentBank",
    description: "Authentication and CRUD operations",
    image: "/images/ArgentBank.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Matzoo38/ArgentBank-website",
    previewUrl: "https://radiant-vacherin-55a6eb.netlify.app",
  },
  {
    id: 6,
    title: "Sophie Buell",
    description: "Project 5 description",
    image: "/images/SophieBuell.png",
    tag: ["All", "JavaScript"],
    gitUrl: "https://github.com/Matzoo38/Sophie-Buell",
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
