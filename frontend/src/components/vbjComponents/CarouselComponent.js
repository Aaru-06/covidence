import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../App.css';

const CarouselComponent = () => {
    return(
        <div className="container cname">
                    <Carousel autoPlay className="cname">
                        <div className="row">
                            <div className="col-sm-3 text-center">
                                <img className="img-circle" src="https://wallpaperaccess.com/full/2007234.jpg"  ></img>
                            </div>
                            <div class="col-sm-9">
                            <blockquote class="blockquote  ctext">
                                <p class="mb-0">The best way to find yourself is to lose yourself in the service of others.</p>
                                <footer class="blockquote-footer">Mahatma Gandhi </footer>
                            </blockquote>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 text-center">
                                <img className="img-circle" src="https://upload.wikimedia.org/wikipedia/commons/9/92/Oscar_Wilde_3g07095u-adjust.jpg" width="450px" height="343px" ></img>
                            </div>
                            <div class="col-sm-9">
                                <blockquote class="blockquote  ctext">
                                    <p class="mb-0">The smallest act of kindness is worth more than the grandest intention.</p>
                                    <footer class="blockquote-footer">Oscar Wilde </footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 text-center">
                                <img className="img-circle" src="https://www.biography.com/.image/t_share/MTE5NTU2MzE2MjgwNDg5NDgz/martin-luther-king-jr-9365086-2-402.jpg" width="450px" height="343px" ></img>
                            </div>
                            <div class="col-sm-9">
                                <blockquote class="blockquote  ctext">
                                    <p class="mb-0">Life's most persistent and urgent question is , What are you doing for others?</p>
                                    <footer class="blockquote-footer">Martin Luther King,Jr.</footer>
                                </blockquote>
                            </div>
                        </div>
                    </Carousel>
                </div>

    )
}

export default CarouselComponent;