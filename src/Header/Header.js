import { useEffect, useState } from 'react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineProject, AiOutlineHome} from 'react-icons/ai'
import {IoChatboxEllipsesOutline} from 'react-icons/io5'
import {MdOutlineContacts} from 'react-icons/md'
import './Header.css'

function Header() {  
    const [sideMenu, setSideMenu] = useState(false);
    const [menuPos, setMenuPos] = useState([-60,20]);

    const functions = {
        mouseOverLinks: (e)=>{const pos = e.target.getBoundingClientRect(); setMenuPos([pos.left, pos.top, pos.width])},
        checkPage: (page)=>{ return location.pathname.includes(page) ? true : false },
        checkPageFill: (page)=>{ return functions.checkPage(page) ? 'empty' : 'fill' },
        checkPageWhite: (page)=>{ return functions.checkPage(page) ? 'white' : '' },
    }
    
    const location = useLocation();

    useEffect(() => {
        console.log('Location changed');
    }, [location]);
    return (
        <>
            <div className={"side-menu "+(sideMenu ? ('show') : ('hide'))}>
                <div className="buttons">
                <div className="image_container flex">
                    <img src="" />
                </div>
                    <div className="group_buttons">
                        <h1>Menus</h1>
                        <Link className={'flex align btn-side '+(location.pathname == "/" ? 'empty' : 'fill') } to='/'><AiOutlineHome/> Home</Link>
                        <Link className={'flex align btn-side '+(functions.checkPageFill("projetos")) } to='/projetos'><AiOutlineProject/> Projetos</Link>
                        <Link className={'flex align btn-side '+(functions.checkPageFill("sobre")) } to='/sobre'><IoChatboxEllipsesOutline /> Sobre</Link>
                        <Link className={'flex align btn-side '+(functions.checkPageFill("contato")) } to='/contato'><MdOutlineContacts /> Contato</Link>
                    </div>
                    
                    <div className="group_buttons">
                        <h1>Projetos</h1>
                        <Link className={'flex align btn-side '+(location.pathname == "/" ? 'empty' : 'fill') } to='/'><AiOutlineHome/> Back-end</Link>
                        <Link className={'flex align btn-side '+(functions.checkPageFill("projetos")) } to='/projetos'><AiOutlineProject/> Mobile</Link>
                        <Link className={'flex align btn-side '+(functions.checkPageFill("sobre")) } to='/sobre'><IoChatboxEllipsesOutline /> Front-end</Link>
                        <Link className={'flex align btn-side '+(functions.checkPageFill("contato")) } to='/contato'><MdOutlineContacts /> Outros</Link>
                    </div>
                    
                </div>
            </div>
            <header className="navbar">
                <div style={{ filter: functions.checkPage('projetos') ? 'invert()' : '' }} className="menu-btn" onClick={()=>setSideMenu(!sideMenu)}/>
                <div className="title" style={{color: functions.checkPageWhite("projetos")}}>
                Ederson Franzen Fagundes
                </div>
                <div className="links flex align">
                <Link style={{color: functions.checkPageWhite("projetos")}} onMouseOver={functions.mouseOverLinks} to='/'>Home</Link>
                <Link style={{color: functions.checkPageWhite("projetos")}} onMouseOver={functions.mouseOverLinks} to='/projetos'>Projetos</Link>
                <Link style={{color: functions.checkPageWhite("projetos")}} onMouseOver={functions.mouseOverLinks} to='/sobre'>Sobre</Link>
                <Link style={{color: functions.checkPageWhite("projetos")}} onMouseOver={functions.mouseOverLinks} to='/contato'>Contato</Link>
                <div id="selector" style={{left: menuPos[0], top: menuPos[1]+33, width: menuPos[2]}}/>
                </div>
            </header>
            <div className={"fullscreen "+(sideMenu ? ('show') : ('hide'))} onClick={()=>setSideMenu(!sideMenu)}/>
        </>
    );
}

export default Header;