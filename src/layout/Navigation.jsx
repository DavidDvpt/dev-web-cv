import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";

function Navigation() {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar>
            <NavbarBrand tag={Link} to="/">
                MySite
            </NavbarBrand>
            {/* <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen}> */}
            <Nav>
                <NavItem className="mx-3">
                    <NavLink tag={Link} to={"/Projets"}>
                        Projets
                    </NavLink>
                </NavItem>
                <NavItem className="mx-3">
                    <NavLink tag={Link} to={"/Experience"}>
                        Experiences
                    </NavLink>
                </NavItem>
                <NavItem className="mx-3">
                    <NavLink tag={Link} to={"/Formations"}>
                        Formations
                    </NavLink>
                </NavItem>
                <NavItem className="mx-3">
                    <NavLink tag={Link} to={"/CV"}>
                        CV
                    </NavLink>
                </NavItem>
            </Nav>
            {/* </Collapse> */}
        </Navbar>
    );
}

export default Navigation;
