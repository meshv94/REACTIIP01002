import React, { useEffect, useState } from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import { userData } from '../store/UserContext';

const Signup = () => {
    // const navigate = useNavigate()   
    const {users , setUsers} = userData()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        birthDate: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleRegister = (event) => {
        event.preventDefault();
        // console.log(formData);
        // Add your register logic here
        setUsers([...users , formData])
        // navigate('/login')
        
    };

    useEffect(()=>{
        localStorage.setItem('users' , JSON.stringify(users))
    },[users])

    return (
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-4">
                    <form onSubmit={handleRegister}>
                        <h2 className="text-center">Sign up</h2>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="Enter first name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Enter last name"
                                required
                            />
                        </div>
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
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Enter phone number"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <select
                                className="form-control"
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                            >
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="birthDate">Birth Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="birthDate"
                                name="birthDate"
                                value={formData.birthDate}
                                onChange={handleInputChange}
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
                        <div className="text mt-2">
                            <button type="submit" className="btn btn-primary btn-block">
                                Register
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Already have an account? <NavLink to="/">Login</NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;