import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import MyCv from "./pages/MyCv";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Route path="/" component={MyCv} />
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
