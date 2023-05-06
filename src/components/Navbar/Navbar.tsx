import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import {Link} from "react-router-dom";

const SiteNav: React.FunctionComponent<any> = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav><NavLink eventKey="1" as={Link} to="/"><img className="nav-logo" src="https://wat-asset-bucket.s3.us-east-2.amazonaws.com/assets/assets/logos/WT.png" alt="nav logo"/></NavLink></Nav>
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <NavLink className="nav-item"eventKey="2" as={Link} to="/artists">Artists</NavLink>
                    <NavLink className="nav-item"eventKey="3" as={Link} to="https://wealth-and-taste.myshopify.com/">Store</NavLink>
                    <NavLink className="nav-item"eventKey="4" as={Link} to="/location">Location</NavLink>
                    <NavLink className="nav-item"eventKey="5" as={Link} to="/booking">Booking</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default SiteNav;
