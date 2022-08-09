import ProjectMenu from '../Components/ProjectMenu';
import projectsList from '../data/projectsList';
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
            {projectsList.map((project, i)=>{
              return (
                <ProjectMenu key={i} id={i+1} title={project.title}/>
              )
            })}
          </div>
        </div>
    </div>
  );
}

export default Projects;
