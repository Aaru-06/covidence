import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../App.css';

const HelpCarousel = () => {
    return(
        <div className="container cname" style={{width: '100vw'}} >
                    <Carousel autoPlay className="cname">
                        <div className="row">
                            <div className="col-sm-3 text-center">
                                <img className="img-circles" src="https://image.freepik.com/free-vector/box-with-money-charity-donation_24877-54456.jpg"  ></img>
                            </div>
                            <div class="col-sm-9">
                            <blockquote class="blockquote  ctext">
                                <p class="mb-0">Helping a person does not change the whole world, but it could change the world for one person</p>
                                <footer class="blockquote-footer">Jeffrey Ross</footer>
                            </blockquote>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 text-center">
                                <img className="img-circles" src="https://www.pngitem.com/pimgs/m/82-825882_balanced-and-nutritional-project-food-donation-clip-art.png" width='450px' height='343px' ></img>
                            </div>
                            <div class="col-sm-9">
                                <blockquote class="blockquote  ctext">
                                    <p class="mb-0">A Man's true wealth is the good he does in this world</p>
                                    <footer class="blockquote-footer">Kahlil Gibran</footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 text-center">
                                <img className="img-circles" src="https://www.pngitem.com/pimgs/m/404-4044646_donation-box-with-clothes-vector-hd-png-download.png" width="450px" height="343px" ></img>
                            </div>
                            <div class="col-sm-9">
                                <blockquote class="blockquote  ctext">
                                    <p class="mb-0">We cant help everyone, but everyone can help someone</p>
                                    <footer class="blockquote-footer">Ronald Reagan</footer>
                                </blockquote>
                            </div>
                        </div>
                    </Carousel>
                </div>

    )
}

export default HelpCarousel;