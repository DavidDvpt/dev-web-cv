// import { useContext, useState } from "react";
import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";

import AppContext from "../context/appContext";
import { animationNav } from "../js/animations";

function Navigation() {
    const { startNavAnim } = useContext(AppContext);

    useEffect(() => {
        if (startNavAnim) {
            animationNav();
            console.log("nav is moving");
        }
    }, [startNavAnim]);
    return (
        <Navbar className="navbarOpacity justify-content-end">
            <NavbarBrand tag={Link} to="/">
                MySite
            </NavbarBrand>
            <Nav>
                <NavItem className="mx-3">
                    <NavLink tag={Link} to={"/projets"}>
                        Projets
                    </NavLink>
                </NavItem>
                <NavItem className="mx-3">
                    <NavLink tag={Link} to={"/experiences"}>
                        Experiences
                    </NavLink>
                </NavItem>
                <NavItem className="mx-3">
                    <NavLink tag={Link} to={"/formations"}>
                        Formations
                    </NavLink>
                </NavItem>
                <NavItem className="mx-3">
                    <NavLink tag={Link} to={"/curriculum"}>
                        CV
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Navigation;
