import { useEffect, useState } from 'react';
import ProjectMenu from '../Components/ProjectMenu';
import './Projects.css';

function Projects() {
  return (
    <div className="App">
      <div className="half-page">
        <img src="/img/full-size/projects.png" alt="" srcset="" />
          <h1>Projetos</h1>
      </div>
        <div className="projects">
          <div className="filters">
            <div className="filter">Todos</div>
            <div className="filter">Todos</div>
            <div className="filter">Todos</div>
            <div className="filter">Todos</div>
          </div>
          <div className="projects_menu">
            <ProjectMenu/>
            <ProjectMenu/>
            <ProjectMenu/>
            <ProjectMenu/>
          </div>
        </div>
    </div>
  );
}

export default Projects;
