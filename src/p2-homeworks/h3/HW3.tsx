import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: number
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        setUsers([...users, {_id: users.length + 1, name}]) // users.length + 1 вместо uuid
    }

    return (
        <div>
            <hr/>
            <span>homeworks 3</span>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <hr/>
        </div>
    )
}

export default HW3
