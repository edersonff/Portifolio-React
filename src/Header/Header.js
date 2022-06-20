import { useEffect, useState } from 'react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {  
    const [sideMenu, setSideMenu] = useState(false);
    const [menuPos, setMenuPos] = useState([-60,20]);

    const functions = {
        mouseOverLinks: (e)=>{const pos = e.target.getBoundingClientRect(); setMenuPos([pos.left, pos.top, pos.width])},
    }
    const location = useLocation().pathname;

    console.log(location)
    
    return (
        <>
            <div className={"side-menu "+(sideMenu ? ('show') : ('hide'))}>
                <div className="buttons">
                <h1>Menus</h1>
                <Link className={'flex align btn '+(location == "/" ? 'empty' : 'fill') } to='/'>Home</Link>
                <Link className={'flex align btn '+(location.includes("projetos") ? 'empty' : 'fill') } to='/projetos'>Projetos</Link>
                <Link className={'flex align btn '+(location.includes("sobre") ? 'empty' : 'fill') } to='/sobre'>Sobre</Link>
                <Link className={'flex align btn '+(location.includes("contato") ? 'empty' : 'fill') } to='/contato'>Contato</Link>
                </div>
            </div>
            <header className="navbar">
                <div className="menu-btn" onClick={()=>setSideMenu(!sideMenu)}/>
                <div className="title">
                Ederson Franzen Fagundes
                </div>
                <div className="links flex align">
                <Link onMouseOver={functions.mouseOverLinks} to='/'>Home</Link>
                <Link onMouseOver={functions.mouseOverLinks} to='/projetos'>Projetos</Link>
                <Link onMouseOver={functions.mouseOverLinks} to='/sobre'>Sobre</Link>
                <Link onMouseOver={functions.mouseOverLinks} to='/contato'>Contato</Link>
                <div id="selector" style={{left: menuPos[0], top: menuPos[1]+30, width: menuPos[2]}}/>
                </div>
            </header>
            <div className={"fullscreen "+(sideMenu ? ('show') : ('hide'))} onClick={()=>setSideMenu(!sideMenu)}/>
        </>
    );
}

export default Header;