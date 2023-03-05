import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ArtistsPage from "./pages/Artists/Artists";
import BookingPage from "./pages/Booking/Booking";
import HomePage from "./pages/Home/Home";
import LocationPage from "./pages/Location/Location";

export interface IAppProps {};

const App: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/artists" element={<ArtistsPage/>} />
            <Route path="/location" element={<LocationPage/>} />
            <Route path="/booking" element={<BookingPage/>} />
          </Routes>
        </BrowserRouter>
    )
};

export default App;
