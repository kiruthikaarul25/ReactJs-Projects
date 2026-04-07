import React, { useState, useEffect } from "react";
import "./Project.css";

const Projects = () => {

  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Projects Data
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio showcasing skills and projects.",
      tech: "React.js, SCSS, CSS"
    },
    {
      title: "Event Management System",
      desc: "Web app to manage and organize events.",
      tech: "HTML, CSS, Java, Spring Boot, MySQL"
    },
    {
      title: "Job Portal",
      desc: "Full stack job portal with login and job apply system.",
      tech: "HTML, CSS, Java, Servlets, JDBC, MySQL"
    },
    {
      title: "Signup/Login",
      desc: "Authentication system using Servlets and JDBC.",
      tech: "HTML, CSS, Java, MySQL"
    },
    {
      title: "Frontend Projects",
      desc: "10+ UI projects using HTML, CSS, JS.",
      tech: "HTML, CSS, JavaScript"
    },
    {
      title: "CRUD App",
      desc: "Create, Read, Update, Delete operations.",
      tech: "Java, JDBC, MySQL"
    },
    {
      title: "Responsive UI",
      desc: "Mobile-friendly UI designs.",
      tech: "HTML, CSS, Sass"
    }
  ];

  // Filter logic
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(debounced.toLowerCase())
  );

  return (
    <section className="projects">
      <h2 className="title">My Projects</h2>

      {/* Search Input */}
      <input
       className="search-input"
        type="text"
        placeholder="Search project..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="project-container">

        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <span>Tech: {project.tech}</span>
            </div>
          ))
        ) : (
          <p>No projects found ❌</p>
        )}

      </div>
    </section>
  );
};

export default Projects;