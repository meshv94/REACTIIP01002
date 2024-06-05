import React, { useState, useEffect } from 'react';
import { userData } from '../store/UserContext';

const Home = () => {
    const { users, setUsers } = userData();
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        setFormData(loggedInUser);
    }, []);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        setEditing(false);
        const updatedUsers = users.map((user) => {
            if (user.id === formData.id) {
                return formData;
            }
            return user;
        });
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        localStorage.setItem('loggedInUser', JSON.stringify(formData));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    return (
        <div className="container">
            {editing ? (
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-2 control-label">First Name:</label>
                        <div className="col-sm-10">
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Last Name:</label>
                        <div className="col-sm-10">
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Email:</label>
                        <div className="col-sm-10">
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Phone:</label>
                        <div className="col-sm-10">
                            <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} className="form-control" />
                        </div>
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
                        <label className="col-sm-2 control-label">Birth Date:</label>
                        <div className="col-sm-10">
                            <input type="date" name="birthDate" value={formData.birthDate} onChange={handleInputChange} className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Password:</label>
                        <div className="col-sm-10">
                            <input type="password" name="password" value={formData.password} onChange={handleInputChange} className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" onClick={handleSave} className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>
            ) : (
                <div className="well panel panel-default">
    <div className="panel-heading">
        <h2>{`${formData.firstName} ${formData.lastName}`}</h2>
    </div>
    <div className="panel-body">
        <dl className="dl-horizontal">
            <dt>Email:</dt>
            <dd>{formData.email}</dd>
            <dt>Phone:</dt>
            <dd>{formData.phone}</dd>
            <dt>Gender:</dt>
            <dd>{formData.gender}</dd>
            <dt>Birth Date:</dt>
            <dd>{formData.birthDate}</dd>
        </dl>
        <button onClick={handleEdit} className="btn btn-default btn-sm pull-right btn-primary">Edit</button>
    </div>
</div>
            )}
        </div>
    );
};

export default Home;