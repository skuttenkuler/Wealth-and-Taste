import React from "react"
import data from '../../utils/data/data.json'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { Link} from "react-router-dom";


const ArtistsPage: React.FunctionComponent = () => {

    var settings = {
        dots: false,
        centerMode:false,
        infinite: false,
        // lazyLoad: true,
        // speed: 1000,
        // slidesToShow: 1,
        // autoplaySpeed: 10000,
        // slidesToScroll: 1,
        // autoplay: true,
        variableWidth: true,
        adaptiveHeight: true,
        nextArrow: <button className="slide-arrow prev-arrow"><svg className="slideshow-arrow" width="23" height="39" viewBox="0 0 23 39" style={{transform: "scaleX(-1) scale(1)"}}><path d="M857.005,231.479L858.5,230l18.124,18-18.127,18-1.49-1.48L873.638,248Z" fill="var(--primary)" transform="translate(-855 -230)"></path></svg></button>,
        prevArrow: <button className="slide-arrow next-arrow"><svg style={{transform: "scaleX(1) scale(1)"}}width="23" height="39" viewBox="0 0 23 39"><path d="M857.005,231.479L858.5,230l18.124,18-18.127,18-1.49-1.48L873.638,248Z" fill="var(--primary)" transform="translate(-855 -230)"></path></svg></button>,
        responsive: [
            {
            breakpoint: 768,
            settings: {
            arrows: true,
            centerMode: false,
            slidesToShow: 1,
            variableWidth: true,
            adaptiveHeight: true,
            }
            },
            {
            breakpoint: 480,
            settings: {
            slidesToShow: .5,
            variableWidth: true,
            adaptiveHeight: true,
            }
            }
        ]
    };
    return (
        <div style={{background: "black"}}>
        <img style={{width: "100vw", height:"auto"}} src="https://wat-asset-bucket.s3.us-east-2.amazonaws.com/assets/assets/shop/crew.jpg" alt="photo of wealth and taste crew"/>
        <div className="artists-page">
        {data.map(artist => {
                            return (
                                <div key={artist.name}>
                                        <Link to={`/artists/${artist.name}`} state={artist}>
                                            <div className="artist-row-header">
                                             <h4 className="artist-name">{artist.name}</h4>
                                            </div>
                                        </Link>
                                    <Slider {...settings} className="artist-row">
                                       <div>
                                       <Link to={`/artists/${artist.name}`} state={artist}>
                                            <img className="tile" src={artist.headshot} alt=""/>
                                        </Link>
                                        </div>
                                        <div><img id="artist-img" src={artist.images.image1} alt=""/></div>
                                        <div><img id="artist-img" src={artist.images.image2} alt=""/></div>
                                        <div><img id="artist-img" src={artist.images.image3} alt=""/></div>
                                        <div><img id="artist-img" src={artist.images.image4} alt=""/></div>
                                        <div><img id="artist-img" src={artist.images.image5} alt=""/></div>
                                        <div><img id="artist-img" src={artist.images.image6} alt=""/></div>
                                </Slider>
                                </div>
                                
                        )
                    })}
                       
        </div></div>
    )
};

export default ArtistsPage;
