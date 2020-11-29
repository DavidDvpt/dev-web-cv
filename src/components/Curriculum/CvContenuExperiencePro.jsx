import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CvContenuExperiencePro({ elmt }) {
    return (
        <li>
            <h6 className="m-0">
                <span>
                    {elmt.lien === "" ? (
                        elmt.projet
                    ) : (
                        <a href={elmt.lien}>{elmt.projet}</a>
                    )}
                </span>{" "}
                {elmt.github === "" ? (
                    ""
                ) : (
                    <a href={elmt.github} className="">
                        {" "}
                        <FontAwesomeIcon
                            icon={faGithub}
                            size="sm"
                            className="ml-2 "
                        />
                    </a>
                )}
                <span></span>
            </h6>
            <p className="mb-1 ml-4">{elmt.technique}</p>
        </li>
    );
}

export default CvContenuExperiencePro;
