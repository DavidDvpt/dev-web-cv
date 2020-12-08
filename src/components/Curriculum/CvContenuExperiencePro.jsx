import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconTechnique from "./IconTechnique";

function CvContenuExperiencePro({ elmt }) {
    console.log(elmt.technique);
    return (
        <li className="mb-3">
            <h5 className="m-0 d-flex">
                <span>
                    {elmt.lien === "" ? (
                        elmt.projet
                    ) : (
                        <a href={elmt.lien}>{elmt.projet}</a>
                    )}
                </span>{" "}
                <span>
                    {elmt.github === "" ? (
                        ""
                    ) : (
                        <a href={elmt.github}>
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="1x"
                                className="ml-2 "
                                color="black"
                            />
                        </a>
                    )}
                </span>
                <p className="my-auto ml-2 flex-grow-1 d-flex justify-content-end">
                    {elmt.technique.map((t, i) => (
                        <IconTechnique
                            key={elmt.projet.concat(i)}
                            technique={t}
                        />
                    ))}
                </p>
            </h5>
            <p className="m-0">{elmt.description}</p>
        </li>
    );
}

export default CvContenuExperiencePro;
