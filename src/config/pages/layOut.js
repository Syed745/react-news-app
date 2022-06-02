import React, { useEffect, useState } from 'react';
import MiniDashboard from './dashboard/dashboard'
import { useLocation, useNavigate } from 'react-router-dom';
export default function LayOut() {
    const [user, setUSer] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (location.state && location.state.user) {
            navigate("/")
        } else {
            navigate('/login')
        }
    }, [])

    return (
        <>
            <MiniDashboard />
        </>
    )
}
