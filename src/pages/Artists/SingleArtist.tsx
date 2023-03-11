import React, {useState, useEffect} from "react"
import axios from 'axios';


const SArtist: React.FunctionComponent = () => {
    const [artist, setArtist] = useState({});
    useEffect(() => {
        fetchArtist();
    }, []);
    const fetchArtist = () => {
        axios.get('../../utils/data/data.json')
    }
    return (
        <div></div>
    )
};

export default SArtist;
