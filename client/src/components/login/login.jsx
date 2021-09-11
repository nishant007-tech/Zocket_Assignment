import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import '../register/register.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { loginUser } from '../actions/actions';
import { NotificationManager } from 'react-notifications';


function Login() {

    const dispatch = useDispatch();
    const [error, setError] = useState();
    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const loginSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(loginUser(state));
            if (response) {
                window.location = "/"
            }
        } catch (err) {
            NotificationManager.error(err.response?.data?.message, "Error!", 3000)
        }
    }

    return (
        <div className="registerContainer">
            <h3><i className="fas fa-user-circle"></i> Login Form</h3>
            <div className="registerContent">
                <div className="sectionOne">
                    <label>Email</label>
                    <input onChange={handleChange} name="email" type="email" placeholder="Enter your email" />
                    <label>Password</label>
                    <input onChange={handleChange} name="password" type="password" placeholder="Enter your password" />
                </div>
            </div>
            <div className="RegisterBtn">
                <Button onClick={loginSubmitHandler} startIcon={<i className="fas fa-user"></i>} variant="contained" style={{ color: "#fff", backgroundColor: "#0F6EFF", height: "39px" }}>Login</Button>
                <div className="ForLogin">
                    Did Not Signed Up Yet ?
                    <Link to="/register">
                        Register
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Login
