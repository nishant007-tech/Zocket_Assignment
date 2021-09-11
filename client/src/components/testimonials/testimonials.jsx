import React from 'react'
import './testimonial.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Testimonials() {
    const responsive = {
        0: { items: 2 },
    };

    return (
        <div className="testimonialContainer">
            <h2 id="h2ForTestimonial">Hear It From Them</h2>
            <div className="mainTestimonialContainer">
                <AliceCarousel
                    responsive={responsive}
                    disableButtonsControls={true}
                >
                    <div className="eachTestimonial">
                        <div className="eachTestimonialInnerContentOne">
                            <h3>Incredibly Amazing!</h3>
                            <p>Zocket made a huge difference in just a few weeks of using it. Their ad copy helped take our business to the next level and the support they offered during our association was top-notch. If you’re looking to elevate your brand or business, Zocket is your go-to site!</p>
                        </div>
                        <div className="eachTestimonialInnerContentTwo">
                            <img src="/images/small_icons_like_pics/img_avatar.png" alt="avatar" />
                            <div className="userContent">
                                <strong>Nishant Rana</strong>
                                <p>Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="eachTestimonial">
                        <div className="eachTestimonialInnerContentOne">
                            <h3>Remarkable Growth</h3>
                            <p>Since the day we started using Zocket, we’ve seen incredible growth in inbound enquiries and leads. Zocket has every feature you can think of when it comes to growing your business. I highly recommend Zocket to anyone who’s wanting to up their game.</p>
                        </div>
                        <div className="eachTestimonialInnerContentTwo">
                            <img src="/images/small_icons_like_pics/img_avatar.png" alt="avatar" />
                            <div className="userContent">
                                <strong>Rana Nishant</strong>
                                <p>Full Stack Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="eachTestimonial">
                        <div className="eachTestimonialInnerContentOne">
                            <h3>Incredibly Amazing!</h3>
                            <p>Zocket made a huge difference in just a few weeks of using it. Their ad copy helped take our business to the next level and the support they offered during our association was top-notch. If you’re looking to elevate your brand or business, Zocket is your go-to site!</p>
                        </div>
                        <div className="eachTestimonialInnerContentTwo">
                            <img src="/images/small_icons_like_pics/img_avatar.png" alt="avatar" />
                            <div className="userContent">
                                <strong>Nishant Rana</strong>
                                <p>Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="eachTestimonial">
                        <div className="eachTestimonialInnerContentOne">
                            <h3>Remarkable Growth</h3>
                            <p>Since the day we started using Zocket, we’ve seen incredible growth in inbound enquiries and leads. Zocket has every feature you can think of when it comes to growing your business. I highly recommend Zocket to anyone who’s wanting to up their game.</p>
                        </div>
                        <div className="eachTestimonialInnerContentTwo">
                            <img src="/images/small_icons_like_pics/img_avatar.png" alt="avatar" />
                            <div className="userContent">
                                <strong>Rana Nishant</strong>
                                <p>Full Stack Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="eachTestimonial">
                        <div className="eachTestimonialInnerContentOne">
                            <h3>Incredibly Amazing!</h3>
                            <p>Zocket made a huge difference in just a few weeks of using it. Their ad copy helped take our business to the next level and the support they offered during our association was top-notch. If you’re looking to elevate your brand or business, Zocket is your go-to site!</p>
                        </div>
                        <div className="eachTestimonialInnerContentTwo">
                            <img src="/images/small_icons_like_pics/img_avatar.png" alt="avatar" />
                            <div className="userContent">
                                <strong>Nishant Rana</strong>
                                <p>Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="eachTestimonial">
                        <div className="eachTestimonialInnerContentOne">
                            <h3>Remarkable Growth</h3>
                            <p>Since the day we started using Zocket, we’ve seen incredible growth in inbound enquiries and leads. Zocket has every feature you can think of when it comes to growing your business. I highly recommend Zocket to anyone who’s wanting to up their game.</p>
                        </div>
                        <div className="eachTestimonialInnerContentTwo">
                            <img src="/images/small_icons_like_pics/img_avatar.png" alt="avatar" />
                            <div className="userContent">
                                <strong>Rana Nishant</strong>
                                <p>Full Stack Developer</p>
                            </div>
                        </div>
                    </div>
                </AliceCarousel>
            </div>
        </div >
    )
}

export default Testimonials
