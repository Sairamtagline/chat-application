import React, { useEffect } from 'react'
import moment from 'moment';

const ChatArea = ({ messages }: any) => {

    const loggedUser = localStorage.getItem('userId') || 0

    useEffect(() => {
        const timeout = setTimeout(() => {
            const chatContainer = document.getElementsByClassName('chat-area-box');
            chatContainer[0].scrollTo(0, chatContainer[0].scrollHeight);
        }, 100);

        return () => {
            clearTimeout(timeout)
        }
    }, [messages])

    return (
        <ul className="chat-area">
            {messages.map((data: any, index: number) =>
                <li key={index} className={data?.users?.id === loggedUser ? 'user' : 'other-user'}>
                    <div className="chat-box">
                        {data?.users?.id !== loggedUser ? <span>{data.users?.name}</span> : null}
                        <span className="chat-message">{data.message}</span>
                        <span className="chat-time">{moment(data.createdAt).calendar()}</span>
                    </div>
                </li>
            )}
        </ul>
    )
}

export default ChatArea