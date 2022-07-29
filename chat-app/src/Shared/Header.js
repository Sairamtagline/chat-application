import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const Header = ({ userName }) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('userName')
        navigate('/')
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header-inner">
                    <h2>Chat-app</h2>
                    {
                        userName ?
                            <div className="header-right">
                                <span>{userName}</span>
                                <Button onClick={handleLogout}>Logout</Button>
                            </div>
                            : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Header