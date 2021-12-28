import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from './Routes';
import s from './Header.module.css';

function Header() {
    return (
        <div className={s.wrapper}>
            <NavLink className={s.link} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            <NavLink className={s.link} to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink className={s.link} to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
            <div className={s.button}/>
        </div>
    )
}

export default Header
