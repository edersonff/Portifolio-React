import { Link } from 'react-router-dom';
import './index.css';

function ProjectMenu({img = 'img/projects/general/not-found.jpg', name = 'Não nomeado'}) {
  return (
    <Link to={'/'} className="Project_menu_container">
      <div className="project_menu_image">
        <img src={img} alt={name} />
      </div>
      <h3 className='project_name'>{name}</h3>
    </Link>
  );
}

export default ProjectMenu;
