import React from 'react'

const ChatArea = ({ messages }) => {
    const loggedUser = 125 || localStorage.getItem('userId')
    return (
        <ul className="chat-area">
            {messages.map(data =>
                <li className={data.userId === loggedUser ? 'user' : 'other-user'}>
                    <span>{data.userName}</span>
                    {data.message}
                </li>
            )}
        </ul>
    )
}

export default ChatArea