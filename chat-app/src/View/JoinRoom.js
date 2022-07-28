import { useMutation } from '@apollo/client'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAuthData } from '../Redux/auth/action'
import { ADD_USER, USER_UPDATE } from '../Service/gql-queries'
import Form from '../Shared/Form'
import { joinRoom } from '../Utils/description'

const JoinRoom = () => {
  const navigation = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const [addUser, { data, loading }] = useMutation(ADD_USER)
  console.log('auth', auth)
  const onChange = (e) => {
    console.log('called :>> ');
    dispatch(setAuthData({ [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    console.log('data', data)
  }, [data])


  const onSubmit = async () => {
    navigation('/room')
    console.log('called :>> ',);
    try {
      const res = await addUser({
        variables: {
          user: auth.username, id: 1
        }
      })
      localStorage.setItem('userId', 1)
      navigation('/room')
      console.log('res :>> ', res);
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div>
      <Form formItems={joinRoom} formData={auth} {...{ onSubmit, onChange }} />
    </div>
  )
}

export default JoinRoom