import { BrowserRouter, Route } from "react-router-dom";
import AnimationContext from "./context/animationContext";
import Layout from "./layout/Layout";
import Curriculum from "./pages/Curriculum";
import Experiences from "./pages/Experiences";
import Formations from "./pages/Formations";
import Intro from "./pages/Intro";
import Projets from "./pages/Projets";

const Router = () => {
    return (
        <BrowserRouter>
            <AnimationContext.Provider value={{}}>
                <Layout>
                    <Route path="/" component={Intro} />
                    <Route path="/" component={Projets} />
                    <Route path="/" component={Experiences} />
                    <Route path="/" component={Formations} />
                    <Route path="/" component={Curriculum} />
                </Layout>
            </AnimationContext.Provider>
        </BrowserRouter>
    );
};

export default Router;
