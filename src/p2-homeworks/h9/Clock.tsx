import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'авгуса', 'сентября', 'октября', 'ноября', 'декабря'];
    const daysOfTheWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    const stop = () => {
        clearInterval(timerId);
    }
    const start = () => {
        stop();
        setDate(new Date());
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true);
    }
    const onMouseLeave = () => {
        setShow(false);
    }

    const addZero = (num: number) => num < 10 ? `0${num}` : num;

    let hours = addZero(date.getHours());
    let minutes = addZero(date.getMinutes());
    let seconds = addZero(date.getSeconds());

    let today = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let day = daysOfTheWeek[date.getDay()];

    const stringTime = `${hours}:${minutes}:${seconds}`;
    const stringDate = `${today} ${month} ${year}г. ${day}`;


    return (
        <div>
            <div style={{height: '50px'}}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    style={{display: 'inline-block', cursor: 'default'}}
                >
                    {timerId !== 0 && stringTime}
                </div>
                <br/>
                {show && (
                    <div className={s.date}>
                        {stringDate}
                    </div>
                )}
            </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
