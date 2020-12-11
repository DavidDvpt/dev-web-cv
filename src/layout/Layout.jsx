import Navigation from "./Navigation";

const Layout = ({ children }) => {
    console.log("je passe ici");
    return (
        <>
            <Navigation />
            <>{children}</>
        </>
    );
};

export default Layout;
