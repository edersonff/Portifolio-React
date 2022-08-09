import { useParams } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs'
import './Project.css';
import projectsList from '../../data/projectsList';

function Project() {
  let { id } = useParams();
  const project = projectsList[id-1];
  const folderImage = (image) => { return project.imagesFolder+image }
  return (
    <div className="App">
      <div className="half-page">
        <img src={project.wallpaper ? folderImage(project.wallpaper) : "/img/full-size/projects.png"} />
      </div>
        <div className="project">
          <div className="content">
            <Painel project={project} folderImage={folderImage} />
            <div className="project_images">
              {project.projectsImage.map((image, i)=>{
                return(
                  <div key={i} className="image img_container_full hard_shadow">
                    <img key={i} className='contain' src={folderImage('project_images/'+image)} alt={"project_image_"+i} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
    </div>
  );
}
function Painel({style, project, folderImage}){
  return(
    <div className="painel hard_shadow" style={style}>
      <div className="image img_container_full">
        <img className="contain" src={project.logo ? folderImage(project.logo) : './img/projects/general/not-found.jpg' } alt="project_logo" />
      </div>
      <div className="textbox">
        <h1 className='title'>Projeto</h1>
        <h2 className='subtitle'>Tecnologias usadas</h2>
        <h3 className='title'>
        Descrição do projeto
        </h3>
        <p className="paragraf">
        O objetivo do projeto era construir uma ... com as tecnologias, nele tive dificuldade em fazer ... pois havia muitas ... e consequentemente ... que enfim consegui resolver
        </p>
        
        <h3 className='title'>
          Repositorio do projeto
        
          <a style={{margin: '10px'}} target="__blank" href="https://github.com/edersonff">
            <BsGithub size={20} style={{opacity: '0.8'}} />
          </a>
        </h3>
      </div>
    </div>
  )
}
export default Project;
