import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Amelia Brown',
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: '17:43',
}

function HW1() {
    return (
        <div>
            <hr/>
            <span>homeworks 1</span>

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>
        </div>
    )
}

export default HW1
