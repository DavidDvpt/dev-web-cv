import CvContenuExperiencePro from "./CvContenuExperiencePro";
import style from "./curriculum.module.scss";
import { Row } from "reactstrap";

function CvExperiencePro({ experiencePro }) {
    return (
        <div className="col-12">
            <h5 className="font-weight-bold my-3">
                {experiencePro.date} - {experiencePro.nom}
            </h5>
            <Row className="ml-0">
                <div className={`${style.width10} ${style.bgdTernary}`}></div>
                <ul className="mb-0 pl-4 flex-grow-1 col">
                    {experiencePro.contenu.map((elmt, i) => {
                        return (
                            <CvContenuExperiencePro
                                key={elmt.projet.concat(i)}
                                elmt={elmt}
                            />
                        );
                    })}
                </ul>
            </Row>
        </div>
    );
}

export default CvExperiencePro;
