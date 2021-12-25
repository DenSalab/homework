import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = ({
                                                   name,
                                                   setNameCallback,
                                                   addUser, error,
                                                   totalUsers
                                               }
) => {
    const inputClass = error ? s.error : s.normal;

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span><br/>
            <span style={{color: 'red'}}>{error}</span>
        </div>
    )
}

export default Greeting
