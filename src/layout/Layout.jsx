import { Container } from "reactstrap";

const Layout = ({ children }) => {
    return (
        <>
            <Container fluid className="h-100 p-0">
                {children}
            </Container>
        </>
    );
};

export default Layout;
