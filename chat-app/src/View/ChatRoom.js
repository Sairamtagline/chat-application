import { useLazyQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMessage } from '../Redux/chat/action'
import { GET_PROJECT_INVITESHOME } from '../Service/gql-queries'
import ChatArea from '../Shared/ChatArea'
import Form from '../Shared/Form'
import { chatRoom } from '../Utils/description'

const ChatRoom = () => {

    const dispatch = useDispatch()
    const chat = useSelector(state => state.chat)

    // const [fetchCollaboratorProjects, { data: messages, loading, error }] = useLazyQuery(GET_PROJECT_INVITESHOME, { fetchPolicy: "network-only" })

    useEffect(() => {
        fetchMessages()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const fetchMessages = () => {
        const urlParams = new URLSearchParams(window.location.search)
        const documentId = urlParams.get("docRef")
        const projectId = urlParams.get("projectRef")
        // fetchCollaboratorProjects({
        //     variables: {
        //         query: {
        //             project_id: projectId,
        //         },
        //         query1: {
        //             document_id: documentId,
        //         },
        //     },
        // })
    }

    const onChange = (e) => {
        console.log('called :>> ');
        dispatch(setMessage({ [e.target.name]: e.target.value }))
    }

    const onSubmit = async () => {
        console.log('called :>> sss ',);
        try {
            // localStorage.setItem('id', 'dbvahsvjhab')
            // await updateUser({
            //   variables: {
            //     user: {
            //     },
            //   },
            // })
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <div>
            <ChatArea messages={chat.messages} />
            <Form formItems={chatRoom} formData={chat} {...{ onSubmit, onChange }} />
        </div>
    )
}

export default ChatRoom