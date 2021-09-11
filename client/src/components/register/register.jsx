import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import './register.css'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/actions';
import { NotificationManager } from 'react-notifications';


function Register(props) {
    const dispatch = useDispatch();
    const [error, setError] = useState();
    const [state, setState] = useState({
        name: "",
        email: "",
        password: ""
    });
    let history = useHistory();

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await dispatch(registerUser(state));
            if (response) {
                NotificationManager.success("Registration Successful & Notification email has also been sent!  ", "Success", 6000)
                history.push("/login")
            }
        } catch (err) {
            NotificationManager.error(err.response?.data?.message, "Error!", 3000)
        }
    }

    return (
        <div className="registerContainer">
            <h3><i className="fas fa-user-circle"></i> Register Form</h3>
            <div className="registerContent">
                <div className="sectionOne">
                    <label>Full Name</label>
                    <input onChange={handleChange} name="name" type="text" placeholder="Enter your full name" />
                    <label>Email</label>
                    <input onChange={handleChange} name="email" type="email" placeholder="Enter your email" />
                    <label>Password</label>
                    <input onChange={handleChange} name="password" type="password" placeholder="Enter your password" />
                </div>
            </div>
            <div className="RegisterBtn">
                <Button onClick={handleSubmit} startIcon={<i className="fas fa-user"></i>} variant="contained" style={{ color: "#fff", backgroundColor: "#0F6EFF", height: "39px" }}>Register</Button>
                <div className="ForLogin">
                    Already Registered ?
                    <Link to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Register
