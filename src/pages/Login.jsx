import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { userData } from '../store/UserContext';


const Login = () => {
    const navigate = useNavigate()
    const { users, setUsers } = userData()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(users);
        const userExists = users.some((user) => user.email === formData.email && user.password === formData.password);

        if (userExists) {
            const loggedInUser = users.find((user) => user.email === formData.email && user.password === formData.password);
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
            navigate('/home')
            alert("Login success!");
        } else {
            alert("User not registered.");
        }
    };

    return (
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-4">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-center">Login</h2>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Enter password"
                                required
                            />
                        </div>
                        <div className="text">
                            <button type="submit" className="btn btn-primary btn-block mt-2">
                                Login
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Don't have an account? <NavLink to="/register">Register</NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;