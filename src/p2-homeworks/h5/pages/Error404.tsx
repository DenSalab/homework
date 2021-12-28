import React from 'react';
import s from './Error404.module.css';

function Error404() {
    return (
        <div className={s.wrapper}>
            <div className={s.errorType}>404 error</div>
            <div className={s.title}>Page not found!</div>
            <img className={s.gif} src="https://i.yapx.ru/GyoA1.gif" alt="a"/>
        </div>
    )
}

export default Error404
