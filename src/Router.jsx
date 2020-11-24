import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AppContext from "./context/appContext";
import Layout from "./layout/Layout";
import Curriculum from "./pages/Curriculum";
import Experiences from "./pages/Experiences";
import Formations from "./pages/Formations";
import Intro from "./pages/Intro";
import Projets from "./pages/Projets";

const Router = () => {
    const [startNavAnim, setStartNavAnim] = useState(false);
    return (
        <BrowserRouter>
            <AppContext.Provider value={{ startNavAnim, setStartNavAnim }}>
                <Layout>
                    <Route exact path="/" component={Intro} />
                    <Route path="/projets" component={Projets} />
                    <Route path="/experiences" component={Experiences} />
                    <Route path="/formations" component={Formations} />
                    <Route path="/curriculum" component={Curriculum} />
                </Layout>
            </AppContext.Provider>
        </BrowserRouter>
    );
};

export default Router;
