import { Link } from 'react-router-dom';
import './index.css';

function ProjectMenu({img = 'img/projects/general/not-found.jpg', title = 'Não nomeado'}) {
  return (
    <Link to={'/projetos/12'} className="Project_menu_container">
      <div className="project_menu_image">
        <img src={img} alt={title} />
      </div>
      <h3 className='project_name'>{title}</h3>
    </Link>
  );
}

export default ProjectMenu;
