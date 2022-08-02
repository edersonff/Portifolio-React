import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectMenu from '../../Components/ProjectMenu';
import './Project.css';

function Project() {
  let { id } = useParams();
  return (
    <div className="App">
      <div className="half-page">
        <img src="/img/full-size/projects.png" alt="" srcset="" />
      </div>
        <div className="project">
          <div className="painel">
            <h1>Title</h1>
          </div>
          <div className="project_images">
          </div>
        </div>
    </div>
  );
}

export default Project;
