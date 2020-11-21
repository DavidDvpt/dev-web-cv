import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Intro from "./pages/Intro";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Route path="/" component={Intro} />
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
