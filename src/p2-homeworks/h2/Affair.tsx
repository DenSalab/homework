import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css';
type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id);

    return (
        <div className={s.affair}>
            <div className={s.name}>
                {props.affair.name}
            </div>
            <div className={props.affair.priority === 'high' ? s.highPriority : props.affair.priority === 'middle' ? s.middlePriority : s.lowPriority}>
                [{props.affair.priority}]
            </div>
            <div className={s.button}>
                <button onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
