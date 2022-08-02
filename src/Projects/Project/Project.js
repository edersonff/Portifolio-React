import { useParams } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs'
import './Project.css';

function Project() {
  let { id } = useParams();
  return (
    <div className="App">
      <div className="half-page">
        {/* <img src="/img/full-size/projects.png" alt="" srcset="" /> */}
      </div>
        <div className="project">
          <div className="content">
            <Painel />
            <div className="project_images">
              <div className="image"/>
              <div className="image"/>
              <div className="image"/>
              <div className="image"/>
            </div>
          </div>
        </div>
    </div>
  );
}
function Painel({style}){
  return(
    <div className="painel" style={style}>
      <div className="image"/>
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
            <BsGithub size={20} style={{opacity: '0.4'}} />
          </a>
        </h3>
      </div>
    </div>
  )
}
export default Project;
