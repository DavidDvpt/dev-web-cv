import { Container } from "reactstrap";
import { formationsAndDiplomes } from "../data/staticData";

function Formation({ formation }) {
    return (
        <div className="formation d-flex flex-column">
            <h4>{formation.nom}</h4>
            <p>{formation.date}</p>
            <p>{formation.ecole}</p>
            <p>{formation.lieu}</p>
        </div>
    );
}

export default Formation;
