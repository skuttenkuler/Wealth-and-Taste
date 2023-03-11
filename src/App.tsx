import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteNav from "./components/Navbar/Navbar";
import ArtistsPage from "./pages/Artists/Artists";
import BookingPage from "./pages/Booking/Booking";
import HomePage from "./pages/Home/Home";
import LocationPage from "./pages/Location/Location";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import SArtist from "./pages/Artists/SingleArtist";

export interface IAppProps {};

const App: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <BrowserRouter>
          <SiteNav/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/artists" element={<ArtistsPage/>} />
            <Route path="/location" element={<LocationPage/>} />
            <Route path="/booking" element={<BookingPage/>} />
            <Route path="/artists/:name" element={<SArtist/>} />
          </Routes>
        </BrowserRouter>
    )
};

export default App;