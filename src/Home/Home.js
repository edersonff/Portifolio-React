import { useEffect, useState } from 'react';
import './Home.css';
import commentsList from '../data/commentsList';
import {BsLinkedin, BsGithub, BsWhatsapp} from 'react-icons/bs'

function App() {
  const [comment, setComment] = useState('');
  const [bar, setBar] = useState(' ');
  
  const functions = {
    randomComment: ()=>{lblComment( commentsList[Math.floor(Math.random() * commentsList.length)].text, 100, false)}
  }

  function lblComment(commen, delay, negative){
    let currentText = negative ? commen : '';
    commen.split('').map((l, i)=>{
      setTimeout(()=>{
        currentText = !negative ? currentText+l : currentText.slice(0, currentText.length-1);
        setComment(currentText);
      },delay*i)
    })
    setTimeout(()=>{
      if(negative) return functions.randomComment() ;
      lblComment( commen, delay === 50 ? 200 : 50, !negative )
    }, 4000);
  }

  function changeBar(bar){
    bar = bar === ' ' ? '|' : ' '
    setBar(bar);
    let check_ignore = false;
    setInterval(()=>{if(check_ignore) return; changeBar(bar); check_ignore=true}, 700);
  }

  useEffect(()=>{
    functions.randomComment();
    changeBar(bar)
  }, []);

  return (
    <div className="App">
      <div className="image-layout flex align">
        <div className="apresentation text">
          <h1>Oi, sou um <div className="dev">DEV </div><div className="dev break"><div style={{fontSize: '0.7em'}}>{comment} {bar === "|" ? bar : (<>&nbsp;</>)}</div></div></h1>
          <p>Meu nome é Ederson e sou um desenvolvedor! Ederson nome é Meu, e um desenvolvedor sou!</p>
          <div className="btns flex">
            <button className="btn fill">Mais sobre</button>
            <button className="btn empty">Fale comigo</button>
          </div>
        </div>
        <div className="apresentation image">
          <img id='notebook' draggable="false" src="/img/full-size/Notebook_Transparent.png" alt="Ederson Notebook" />
          <img id='mancha' src="/img/full-size/Mancha.png" alt="Ederson Notebook" />
        </div>
      </div>

      <div className="icons flex align">
        <a target="__blank" href="https://br.linkedin.com/in/ederson-franzen-fagundes/">
          <BsLinkedin />
        </a>
        <a target="__blank" href="https://github.com/edersonff">
          <BsGithub />
        </a>
        <a target="__blank" href="https://br.linkedin.com/in/ederson-franzen-fagundes/">
          <BsWhatsapp />
        </a>
      </div>
      <div className="eff-rectangle"/>
    </div>
  );
}

export default App;
