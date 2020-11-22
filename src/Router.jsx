import { BrowserRouter, Route } from "react-router-dom";
import AnimationContext from "./context/animationContext";
import Layout from "./layout/Layout";
import Intro from "./pages/Intro";

const Router = () => {
    return (
        <BrowserRouter>
            <AnimationContext.Provider value={{}}>
                <Layout>
                    <Route path="/" component={Intro} />
                </Layout>
            </AnimationContext.Provider>
        </BrowserRouter>
    );
};

export default Router;
