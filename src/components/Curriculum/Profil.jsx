import { Row } from "reactstrap";

import profil from "../../images/profil.png";

function Profil({ className }) {
    return (
        <Row>
            <h4 className="titleColLeft col-8">
                <img src={profil} alt="profil" className="profilIcon" /> Profil
            </h4>
            <p className={className}>
                Passionné par l’univers informatique et en particulier le web,
                mes compétences ont étés acquises principalement par
                l’autoformation, que j’ai ensuite validé par une formation
                diplômante. Fort de mon expérience concluante en stage, associée
                à une veille technologique régulière orientée full stack web, je
                suis actuellement une formation axée web et mobile et prêt à
                saisir toute opportunité dans les Pyrénées atlantiques
            </p>
        </Row>
    );
}

export default Profil;
