import { useSubscription } from '@apollo/client'
import { useMutation } from '@apollo/client'
import { useLazyQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { messageReceived, setMessage, setMessageDataList } from '../Redux/chat/action'
import { AppDispatch } from '../Redux/store'
import { ADD_MESSAGE, GET_ALL_MESSAGES, MESSAGE_ADDED_SUBSCRIPTION } from '../Service/gql-queries'
import ChatArea from '../Shared/ChatArea'
import Form from '../Shared/Form'
import { chatRoom } from '../Utils/description'

const ChatRoom = () => {

    const dispatch:AppDispatch = useDispatch()
    const chat = useSelector((state:any) => state.chat)
    const { data: messageSubscriptionData } = useSubscription(MESSAGE_ADDED_SUBSCRIPTION)
    const [fetchAllMessages, { data: messages }] = useLazyQuery(GET_ALL_MESSAGES, { fetchPolicy: "network-only" })
    const [addUser] = useMutation(ADD_MESSAGE)

    useEffect(() => {
        fetchAllMessages()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (messages) {
            const { getAllMessages } = messages
            if (getAllMessages.length) {
                dispatch(setMessageDataList(getAllMessages))
            }
            console.log('messages', messages)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages])

    useEffect(() => {
        if (messageSubscriptionData) {
            const { messageAdded } = messageSubscriptionData
            if (messageAdded) {
                dispatch(messageReceived(messageAdded))
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messageSubscriptionData])

    const onChange = (e: any) => {
        dispatch(setMessage({ [e.target.name]: e.target.value }))
    }

    const onSubmit = async () => {
        try {
            const userId = localStorage.getItem('userId');
            if (userId && chat?.userMessage) {
                const res = await addUser({
                    variables: {
                        message: chat?.userMessage,
                        userId: parseInt(userId),
                    }
                })
                if (res) {
                    dispatch(setMessage({ "userMessage": "" }))
                }
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <div>
            <div className="chat-area-box">
                <ChatArea messages={chat.messages} />
                <Form formItems={chatRoom} formData={chat} {...{ onSubmit, onChange }} />
            </div>
        </div>
    )
}

export default ChatRoom