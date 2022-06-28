import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from './Routes';
import s from './Header.module.css';
import background from "../h12/HW12.module.css";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";

function Header() {
    const theme = useSelector((state: AppStoreType): string => state.theme.theme);
    return (
        <div className={s.wrapper}>
            <NavLink className={s.link} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            <NavLink className={s.link} to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink className={s.link} to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
            <div className={`${s.button} ${background[theme]}`}/>
        </div>
    )
}

export default Header
