import React from "react"
import { useLocation} from "react-router-dom";



const SArtist: React.FunctionComponent = () => {
    const location = useLocation();
    const artist = location.state;
    console.log(artist)
    return (
        <>
        <div className="single-artist">
            <img src={artist.profile_pic} alt=""/>
            <h2 className="s-artist-headline">{artist.name}</h2>
                {artist.email ? 
                    <a className="s-artist-contact-btn" href={`mailto:${artist.email}`}>Contact</a> : 
                    <a className="s-artist-contact-btn" href={`artist.${artist.instagram_link}`}>Contact</a>
                    }
            <p>{artist.bio}</p>  
            <section className="s-artist-instagram">
                <h4>Check me out on Instagram</h4>
                <div className="instagram-block">
                <div className="insta-left">
                    <p>Best way to stay up to date on all my work is to follow me here.</p>
                    <a href={artist.instagram_link}><button>Go to Instagram</button></a>
                </div>
                <div className="insta-right">
                    <img src={artist.phone_pic} alt="iphone image of instagram page"/>
                </div>
            </div>
            </section>
        </div>
        <div className="s-artist-gallery">
        <div>
            <img className="s-artist-gallery-image" src={artist.images.image1} alt=""/>
        </div>
        <div>
            <img className="s-artist-gallery-image" src={artist.images.image2} alt=""/>
        </div>
        <div>
            <img className="s-artist-gallery-image" src={artist.images.image3} alt=""/>
        </div>
        <div>
            <img className="s-artist-gallery-image" src={artist.images.image4} alt=""/>
        </div>
        <div>
            <img className="s-artist-gallery-image" src={artist.images.image5} alt=""/>
        </div>
        <div>
            <img className="s-artist-gallery-image" src={artist.images.image6} alt=""/>
        </div>
        <div>
            <img className="s-artist-gallery-image" src={artist.images.image7} alt=""/>
        </div>
        {artist.images.image8 ?
        <div>
            <img className="s-artist-gallery-image" src={artist.images.image8} alt=""/>
        </div> : null
        }
        {artist.images.image9 ?
        <div>
            <img className="s-artist-gallery-image" src={artist.images.image9} alt=""/>
        </div> : null
        }
        {artist.images.image10 ?
        <div>
            <img className="s-artist-gallery-image" src={artist.images.image10} alt=""/>
        </div> : null
        }
    </div>
    </>
    )
};

export default SArtist;
