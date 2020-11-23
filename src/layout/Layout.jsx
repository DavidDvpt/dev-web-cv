import { Container } from "reactstrap";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <Container fluid className="h-100 p-0">
                {children}
            </Container>
        </>
    );
};

export default Layout;
