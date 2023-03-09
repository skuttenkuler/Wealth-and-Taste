import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import {Link} from "react-router-dom";

const SiteNav: React.FunctionComponent<any> = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink eventKey="1" as={Link} to="/">WealthandTaste</NavLink>
                    <NavLink eventKey="2" as={Link} to="/artists">Artists</NavLink>
                    <NavLink eventKey="3" as={Link} to="https://wealth-and-taste.myshopify.com/">Store</NavLink>
                    <NavLink eventKey="4" as={Link} to="/location">Location</NavLink>
                    <NavLink eventKey="5" as={Link} to="/booking">Booking</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default SiteNav;
