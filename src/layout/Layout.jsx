import { Container } from "reactstrap";

const Layout = ({ children }) => {
    return (
        <>
            <Container>{children}</Container>
        </>
    );
};

export default Layout;
