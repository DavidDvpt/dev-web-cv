import { Col, Row } from "reactstrap";
import {
    faReact,
    faNodeJs,
    faGitAlt,
    faJs,
    faUbuntu,
    faBootstrap,
    faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vsCode from "../../images/Visual_Studio.png";
import code from "../../images/code.png";
import windows from "../../images/windows.png";
import style from "./curriculum.module.scss";

function CompetencesInfo() {
    return (
        <>
            <Row>
                <Col>
                    <h4
                        className={`${style.title} ${style.titleColLeft} col-12`}
                    >
                        <img
                            src={code}
                            alt="profil"
                            className={style.profilIcon}
                        />{" "}
                        Compétences informatiques
                    </h4>
                </Col>
            </Row>
            <Row className="mb-3">
                <h6 className="col-3 pl-0 my-auto">Hard skill</h6>
                <Row className="col-9 pl-0">
                    <FontAwesomeIcon
                        icon={faNodeJs}
                        size="2x"
                        className="m-2"
                        color="#88c043"
                    />
                    <FontAwesomeIcon
                        icon={faJs}
                        size="2x"
                        className="m-2"
                        color="#f7df1e"
                    />
                    <FontAwesomeIcon
                        icon={faReact}
                        size="2x"
                        className="m-2"
                        color="	#61dafb"
                    />
                    <FontAwesomeIcon
                        icon={faPhp}
                        size="2x"
                        className="m-2"
                        color="#8993c1"
                    />
                    <FontAwesomeIcon
                        icon={faDatabase}
                        size="2x"
                        className="m-2"
                        color="#ffa500"
                    />
                    <FontAwesomeIcon
                        icon={faBootstrap}
                        size="2x"
                        className="m-2"
                        color="#563d7c"
                    />
                </Row>
            </Row>
            <Row className="mb-3">
                <h6 className="col-3 my-auto pl-0">Soft skill</h6>
                <p className="row col-9 p-0 my-auto flex-grow-1">
                    <span className={`${style.badgePill} badge-pill`}>
                        Curieux
                    </span>
                    <span className={`${style.badgePill} badge-pill`}>
                        Autonome
                    </span>
                    <span className={`${style.badgePill} badge-pill`}>
                        Rigoureux
                    </span>
                    <span className={`${style.badgePill} badge-pill`}>
                        Pertinent
                    </span>
                </p>
            </Row>
            <Row className="mb-3">
                <h6 className="col-4 my-auto pl-0">Environnement</h6>
                <p className="col-8 pl-0 my-auto row flex-grow-1 align-items-center">
                    <FontAwesomeIcon
                        icon={faGitAlt}
                        size="2x"
                        className="m-2"
                        color="#f05033"
                    />
                    <FontAwesomeIcon
                        icon={faUbuntu}
                        size="2x"
                        className="mx-2"
                        color="#ff5e09"
                    />
                    <img
                        src={windows}
                        alt="windows logo"
                        className={`${style.compInfoIcon} mx-2`}
                    />
                    <img
                        src={vsCode}
                        alt="visual studio code"
                        className={`${style.compInfoIcon} mx-2`}
                    />
                    <span
                        className={`${style.badgePill} badge-pill my-auto justify-content-center`}
                    >
                        WSL 2
                    </span>
                </p>
            </Row>
        </>
    );
}

export default CompetencesInfo;
