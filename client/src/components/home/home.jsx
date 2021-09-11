import React from 'react'
import { Link } from 'react-router-dom'
import Service from '../serviceProviderBanner/service'
import Cards from '../small_cards_content/cards'
import './home.css'
import ScrollAnimation from 'react-animate-on-scroll';
import InnerContent from '../innerContent/innerContent'
import Testimonials from '../testimonials/testimonials'
import Footer from '../footer/footer'
function Home(props) {
    return (
        <>
            <div className="HomeContainer" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/hero-bg.png"})` }}>
                <div className="HomeSectionOne">
                    <ScrollAnimation
                        animateIn="animate__fadeInLeft"
                        duration={1}
                        animateOnce={true}
                    >
                        <h2>FACEBOOK ADS IN 30 SECONDS</h2>
                        <p>Create stunning ad copy incredibly fast and skyrocket your digital business.
                        </p>
                        {
                            props.userData?.name ?
                                <>
                                    <h3 style={{ fontSize: "25px" }}>Welcome <b style={{ color: "#0F6EFF" }}>{props.userData?.name}</b> ,</h3>
                                    <p style={{ color: "#0F6EFF" }}>{props.userData?.email}</p>
                                </>
                                :
                                <Link to="/register">
                                    Create a free account
                                    <i className="fas fa-angle-right"></i>
                                </Link>
                        }
                    </ScrollAnimation>
                </div>

                <div className="HomeSectionTwo">
                    <img src="/images/Illustration.svg" alt="mainImg" />
                </div>
            </div>
            <Cards />
            <Service userData={props.userData} />
            <InnerContent />
            <Testimonials />
            <Footer />
        </>

    )
}

export default Home
