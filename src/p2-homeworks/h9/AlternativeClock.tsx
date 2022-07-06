import React, {useEffect, useState} from 'react'
import s from "./Clock.module.css";

function AlternativeClock() {
    let getTime = () => Date().substring(16, 24);
    let [time, setTime] = useState<string>(getTime);
    useEffect(() => {
        setInterval(() => {
            setTime(getTime)
        }, 1000)
    }, [])

    return (
        <div className={s.box}>
            <hr/>
            <span>alt clock</span><br/>
            <span>{time}</span>
        </div>
    )
}

export default AlternativeClock
