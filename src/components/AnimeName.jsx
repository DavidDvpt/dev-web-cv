import { useEffect } from "react";
import { movingLetter } from "../js/movingLetter";

function AnimeName() {
    useEffect(() => {
        movingLetter();
    }, []);

    return (
        <>
            <h1 className="introName">
                <span className="introWord">David</span>
                <span className="introWord"> Mosca</span>
            </h1>
            <h2 className="text-right inline-block introMetier">
                Développeur web junior
            </h2>
        </>
    );
}

export default AnimeName;
