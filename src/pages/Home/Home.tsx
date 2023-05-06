import React from "react"
import { Image } from "react-bootstrap";
import {Parallax} from "react-parallax"
import Footer from "../../components/Footer/Footer";
import data from '../../utils/data/data.json'


const HomePage: React.FunctionComponent = () => {
        return (
        <div className="home" >
            <Parallax className="title-sec parallax">
                
                    <Image className="home-logo" src="https://wat-asset-bucket.s3.us-east-2.amazonaws.com/assets/assets/logos/Lips_Creme.png" alt="Wealth and Taste Logo" />
                    <button className="home-btn"><a href="/artists">View Artists</a></button>
            </Parallax>
       
    
            <section className="video-section">
                <video controls autoPlay muted loop playsInline>
            <source src="https://wat-asset-bucket.s3.us-east-2.amazonaws.com/assets/assets/video/Wealth%26Taste_Colored_V6_No_Hire_Sign.mp4"/>
            </video>
            </section> 
           
            <section className="location-hp-sec">
        <div className="location-hp-container">
            <section className="loc-left">
                <Image src="https://wat-asset-bucket.s3.us-east-2.amazonaws.com/assets/assets/shop/shop3.jpg" alt="Shop Image"/>
            </section>
            <section className="loc-right">
                    <p>Home to award winning tattoo artists. Located in East Nashville!</p>
            </section>
        </div>
    </section>
            <Parallax className="booking-hp-sec parallax2">
        <div className="booking-content">
            <div className="booking-hp-text">
                <h2>Book your appointment.</h2>
                <button className="home-btn"><a href="/artists">View Artists</a></button>
                <br/>
                <br/>
                <h2>New Client? Not sure which artist?</h2>
                <button className="home-btn"><a href="/booking">Inquiry Form</a></button>
            </div>
        </div>
        </Parallax>
        <div className="artist-header">
            <h4>Meet the Family</h4>
        </div>
        <section className="artist-sec">
                <ul className="artist-hp-list">
                    {
                        data.map(artist => {
                            return (
                            <li className="tile artist-tile col-lg-3" key={artist.name}>
                         <a href={`artists/${artist.name}`}>
                             <Image id="artist-tile-img" src={artist.headshot} width={500} height={500}/>
                                 <p className="artist-tile-name">{artist.name}</p>
                                 {artist.apprentice ? <p className="apprentice">(apprentice)</p> :''}
                         </a>
                     </li>
                           
                        )
                    })
                }         
                </ul>
        </section>
        <Footer/>
        </div>)

};

export default HomePage;
