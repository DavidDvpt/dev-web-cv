import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconTechnique from "./IconTechnique";

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
                            size="1x"
                            className="ml-2 "
                            color="black"
                        />
                    </a>
                )}
            </h6>
            <p className="m-0">{elmt.description}</p>
            <p className="my-auto ml-2">
                {elmt.technique.map((t, i) => (
                    <IconTechnique key={elmt.projet.concat(i)} technique={t} />
                ))}
            </p>
        </li>
    );
}

export default CvContenuExperiencePro;
