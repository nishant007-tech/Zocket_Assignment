import React from 'react'
import './cards.css'
import ScrollAnimation from 'react-animate-on-scroll';


function Cards() {
    return (
        <div className="cardsContainer">
            <div className="cardOne">
                <ScrollAnimation
                    animateIn="animate__fadeInLeft"
                    animateOnce={true}
                    duration={1.5}
                >
                    <img className="svgIcon" src="/images/small_icons_like_pics/connected.svg" alt="icon1" />
                    <h3 >Stay connected.</h3>
                    <p>We will keep trying to help you search all types of service providers in your vicinities.</p>
                </ScrollAnimation>
            </div>

            <div className="cardTwo ">
                <ScrollAnimation
                    animateIn="animate__fadeInUp"
                    animateOnce={true}
                    duration={1.5}
                >
                    <img className="svgIcon" src="/images/small_icons_like_pics/free.svg" alt="icon2" />
                    <h3>Free access for all.</h3>
                    <p>Our aim is to provide free access of the information to each and every person. </p>
                </ScrollAnimation>
            </div>
            <div className="cardThree ">
                <ScrollAnimation
                    animateIn="animate__fadeInRight"
                    animateOnce={true}
                    duration={1.5}
                >
                    <img className="svgIcon" src="/images/small_icons_like_pics/searchBlue.svg" alt="icon3" />
                    <h3>Smart search.</h3>
                    <p>We automatically suggest you results based on your current location. We use advanced algorithms to provide better search results.</p>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default Cards
