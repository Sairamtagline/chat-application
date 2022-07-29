import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Header from '../Shared/Header';
import ChatRoom from '../View/ChatRoom';
import JoinRoom from '../View/JoinRoom';

const PrivateRoute = (props) => {
    const id = localStorage.getItem('userName')

    if (props?.isAuth && id) return <Navigate to="/room" />
    if (!props?.isAuth && !id) return <Navigate to="/" />
    return <>
        <Header userName={id} />
        {props.children}
    </>
}

const Index = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoute isAuth><JoinRoom /></PrivateRoute>} />
                <Route path="/room" element={<PrivateRoute><ChatRoom /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index