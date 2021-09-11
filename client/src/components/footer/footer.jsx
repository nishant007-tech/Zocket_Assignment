import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="footerSection firstFooterSection">
                <img src="/images/Zocket-logo.png" alt="NavLogo" />
                <p>Copyright © 2021 Zocket.</p>
                <p>All rights reserved</p>
                <div className="socialLinks">
                    <Link to="/">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="/">
                        <i className="fab fa-skype"></i>
                    </Link>
                    <Link to="/">
                        <i className="fab fa-youtube"></i>
                    </Link>
                </div>
            </div>
            <div className="footerSection Links">
                <strong>Company</strong>
                <Link to="/">
                    About us
                </Link>
                <Link to="/">
                    Blog
                </Link>
                <Link to="/">
                    Contact us
                </Link>
                <Link to="/">
                    Pricing
                </Link>
                <Link to="/">
                    Testimonials
                </Link>
            </div>
            <div className="footerSection Links">
                <strong>Support</strong>
                <Link to="/">
                    Help center
                </Link>
                <Link to="/">
                    Terms of Service
                </Link>
                <Link to="/">
                    Legal
                </Link>
                <Link to="/">
                    Privacy policy
                </Link>
                <Link to="/">
                    Status
                </Link>
            </div>
            <div className="footerSection">
                <h3>Get Early Access</h3>
                <input type="text" placeholder="Your email address" />
            </div>
        </div>
    )
}

export default Footer
