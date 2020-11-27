import { Container } from "reactstrap";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <Container className="h-100 p-0 w-100 m-auto">{children}</Container>
        </>
    );
};

export default Layout;
