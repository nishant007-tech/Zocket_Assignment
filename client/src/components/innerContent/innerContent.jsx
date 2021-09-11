import React from 'react'
import './innerContent.css';
import ScrollAnimation from 'react-animate-on-scroll';


function InnerContent() {
    return (
        <div className="innerContainer">
            <h2 id="firstH2">Why Us</h2>
            <div className="cardContent">
                <ScrollAnimation
                    animateIn="animate__fadeInLeft"
                    animateOnce={true}
                    duration={1.5}
                >
                    <div className="cardSectionOnePart1 svgImg">
                        <img src="/images/IllustrationOne.svg" alt="IllustrationOne" />
                    </div>
                </ScrollAnimation>
                <div className="cardSectionPart">
                    <ScrollAnimation
                        animateIn="animate__fadeInRight"
                        animateOnce={true}
                        duration={1.5}
                    >
                        <h2>Localised Ad Campaigns</h2>
                        <p>With Zocket’s localised ad campaigns, you’re sure to drive customers to your physical store. Online business listings, geo-tagging, and ads are some of the many things we help businesses get started with. You can rest assured that you’ll leave a positive brand image on your customers as your business flourishes, making it easier for you to build long-lasting customer relationships locally.</p>
                    </ScrollAnimation>
                </div>
            </div>
            <div className="cardContent">
                <div className="cardSectionPart">
                    <ScrollAnimation
                        animateIn="animate__fadeInLeft"
                        animateOnce={true}
                        duration={1.5}
                    >
                        <h2>Get More Calls and Enquiries</h2>
                        <p>When you use Zocket, you can expect calls pouring in with enquiries about your business. Our exceptional outreach strategies and business profile optimization techniques will catch the eye of prospects. With organic leads taken care of by Zoket, all you’d have to worry about is converting your leads to customers.</p>
                    </ScrollAnimation>
                </div>
                <ScrollAnimation
                    animateIn="animate__fadeInRight"
                    animateOnce={true}
                    duration={1.5}
                >
                    <div className="cardSectionTwoPart1 svgImg">
                        <img src="/images/IllustrationTwo.svg" alt="IllustrationTwo" />
                    </div>
                </ScrollAnimation>
            </div>
            <div className="cardContent">
                <ScrollAnimation
                    animateIn="animate__fadeInLeft"
                    animateOnce={true}
                    duration={1.5}
                >
                    <div className="cardSectionThreePart1 svgImg">
                        <img src="/images/IllustrationThree.svg" alt="IllustrationThree" />
                    </div>
                </ScrollAnimation>
                <div className="cardSectionPart">
                    <ScrollAnimation
                        animateIn="animate__fadeInRight"
                        animateOnce={true}
                        duration={1.5}
                    >
                        <h2>No Expertise Required</h2>
                        <p>Zocket is completely beginner friendly and doesn’t require any previous marketing expertise to use. Built with an aim to make marketing easier for small businesses, Zocket is powered by AI and will provide done-for-you content while you can take care of other important things in your business. With easy-to-follow guides, it doesn’t get better than this.</p>
                    </ScrollAnimation>
                </div>
            </div>


        </div>
    )
}

export default InnerContent
