import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import ChatRoom from '../View/ChatRoom';
import JoinRoom from '../View/JoinRoom';

const Index = () => {

    const PrivateRoute = (props) => {
        const id = localStorage.getItem('userId')
        if (id) return <Navigate to="/" replace={true} />
        return <>{props.children}</>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<JoinRoom />} />
                <Route path="/room" element={<PrivateRoute><ChatRoom /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index