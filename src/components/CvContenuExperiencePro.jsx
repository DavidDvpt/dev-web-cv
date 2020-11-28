import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CvContenuExperiencePro({ elmt }) {
    return (
        <li>
            <h6>
                {elmt.lien === "" ? (
                    elmt.projet
                ) : (
                    <>
                        <a href={elmt.lien}>{elmt.projet}</a>{" "}
                        {elmt.github === "" ? (
                            ""
                        ) : (
                            <a
                                href={elmt.github}
                                className=""
                            >
                                {" "}
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    size="sm"
                                    className="ml-2 "
                                />
                            </a>
                        )}
                    </>
                )}
            </h6>
            <p>{elmt.technique}</p>
        </li>
    );
}

export default CvContenuExperiencePro;
