import { useContext, createContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

export const userDataContext = createContext();

export const UserContext = ({ children }) => {
    const navigate = useNavigate()
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])


    const handleLogout = ()=> {
        localStorage.removeItem('loggedInUser')
        alert("Logout success!!")
        navigate('/')
    }

    useEffect(()=>{
        setUsers(JSON.parse(localStorage.getItem('users')) || [])
    },[])

    return (<userDataContext.Provider value={{ users, setUsers, handleLogout }}>
        {children}
    </userDataContext.Provider>)
}

export const userData = () => {
    return useContext(userDataContext)
}