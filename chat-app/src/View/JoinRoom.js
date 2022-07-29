import { useMutation } from '@apollo/client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAuthData } from '../Redux/auth/action'
import { ADD_USER } from '../Service/gql-queries'
import Form from '../Shared/Form'
import { joinRoom } from '../Utils/description'

const JoinRoom = () => {
  const navigation = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const [addUser] = useMutation(ADD_USER)

  const onChange = (e) => {
    dispatch(setAuthData({ [e.target.name]: e.target.value }))
  }

  const onSubmit = async () => {
    try {
      const res = await addUser({
        variables: {
          user: auth.username, id: parseInt(localStorage.getItem('userId')) || 0,
        }
      })
      if (res.data) {
        const { addUser } = res.data
        localStorage.setItem('userName', addUser?.name)
        localStorage.setItem('userId', addUser?.id)
        navigation('/room')
        dispatch(setAuthData({ 'username': '' }))
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className="join-form">
      <center><h3>Join Room</h3></center>
      <Form formItems={joinRoom} formData={auth} {...{ onSubmit, onChange }} />
    </div>
  )
}

export default JoinRoom