import { Container } from "reactstrap";

function Profil({ className }) {
    return (
        <Container>
            <h4>Profil</h4>
            <p className={className}>
                Passionné par l’univers informatique et en particulier le web,
                mes compétences ont étés acquises principalement par
                l’autoformation, que j’ai ensuite validé par une formation
                diplômante. Fort de mon expérience concluante en stage, associée
                à une veille technologique régulière orientée full stack web, je
                suis actuellement une formation axée web et mobile et prêt à
                saisir toute opportunité dans les Pyrénées atlantiques
            </p>
        </Container>
    );
}

export default Profil;
