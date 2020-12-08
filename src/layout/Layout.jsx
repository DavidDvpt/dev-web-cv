import { Container } from "reactstrap";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <>{children}</>
        </>
    );
};

export default Layout;
