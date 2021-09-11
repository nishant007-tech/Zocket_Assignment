import React from 'react'
import { Link } from 'react-router-dom'
import "./topbar.css"
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/actions';

function Topbar(props) {

    let dispatch = useDispatch();

    let scrollRef = useRef();
    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 90) {
            scrollRef?.current?.classList.add("scrolling");
        } else {
            scrollRef?.current?.classList.remove("scrolling");
        }
        if (document.documentElement.scrollTop >= 600) {
            scrollRef?.current?.classList.add("revealTopbar");
        } else {
            scrollRef?.current?.classList.remove("revealTopbar");
        }
    })

    const LogoutHandler = async () => {
        await dispatch(logoutUser());
        window.location = '/';
    }


    return (
        <div ref={scrollRef} className="TopBarContainer">
            <span>
                <Link to="/">
                    <img src="/images/Zocket-logo.png" alt="NavLogo" />
                </Link>
            </span>
            <ul>
                <li>
                    <Link to="/">
                        Services
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Why Us
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Pricing
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Contact
                    </Link>
                </li>
                {
                    props.userData?.name ?
                        <li onClick={LogoutHandler} id="SpecialBtn">
                            <Link to="/register">
                                Logout
                            </Link>
                        </li>
                        :
                        <li id="SpecialBtn">
                            <Link to="/register">
                                Get Early Access
                            </Link>
                        </li>
                }
            </ul>
        </div>
    )
}

export default Topbar
