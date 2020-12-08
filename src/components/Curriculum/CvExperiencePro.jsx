import CvContenuExperiencePro from "./CvContenuExperiencePro";

function CvExperiencePro({ experiencePro }) {
    return (
        <div className="col-12">
            <h5 className="font-weight-bold my-3">
                {experiencePro.date} - {experiencePro.nom}
            </h5>
            <ul className="mb-0">
                {experiencePro.contenu.map((elmt, i) => {
                    return (
                        <CvContenuExperiencePro
                            key={elmt.projet.concat(i)}
                            elmt={elmt}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default CvExperiencePro;
