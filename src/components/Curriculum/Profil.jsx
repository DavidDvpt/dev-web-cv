import { Col, Row } from "reactstrap";
import style from "./curriculum.module.scss";

import profil from "../../images/profil.png";

function Profil({ className }) {
    return (
        <Row className="mb-2">
            <Col>
                <h4 className={`${style.title} ${style.titleColLeft} col-10`}>
                    <img
                        src={profil}
                        alt="profil"
                        className={style.profilIcon}
                    />
                    Profil
                </h4>
            </Col>
            <Col className={`col-12 ${className}`}>
                Passionné par l’univers informatique et en particulier
                <br />
                le web, mes compétences ont étés acquises
                <br />
                principalement par l’autoformation, que j’ai ensuite validé par
                une formation diplômante. Fort de mon expérience concluante en
                stage, associée à une veille technologique régulière orientée
                full stack web, je suis actuellement une formation axée web et
                mobile et prêt à saisir toute opportunité dans les Pyrénées
                atlantiques
            </Col>
        </Row>
    );
}

export default Profil;
