import {
    faHtml5,
    faCss3Alt,
    faReact,
    faNodeJs,
    faGitAlt,
    faJs,
    faPhp,
    faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import axios from "../../images/axios.png";
import prisma from "../../images/prisma.svg";
import sqlServer from "../../images/sqlserver.png";
import msNet from "../../images/Microsoft_.NET_logo.png";
import aspNet from "../../images/aspnet-featured.png";
import cSharp from "../../images/csharp.png";
import mySql from "../../images/mysql.png";
import materialUi from "../../images/material-ui.png";
import expressJs from "../../images/express-logo.png";
import tortoiseCVS from "../../images/TortoiseCVS_Logo.png";
import reactStrap from "../../images/reactstrap.png";
import redux from "../../images/redux.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./curriculum.module.scss";

function IconTechnique({ technique }) {
    switch (technique) {
        case "html":
            return (
                <FontAwesomeIcon
                    icon={faHtml5}
                    size="lg"
                    className="mx-2"
                    color="#e44d26"
                />
            );
        case "css":
            return (
                <FontAwesomeIcon
                    icon={faCss3Alt}
                    size="lg"
                    className="mx-2"
                    color="#0070ba"
                />
            );
        case "javascript":
            return (
                <span title="JavaScript">
                    <FontAwesomeIcon
                        icon={faJs}
                        size="lg"
                        className="mx-2"
                        color="#f7df1e"
                        title="Javascript"
                    />
                </span>
            );
        case "react":
            return (
                <span title="React">
                    <FontAwesomeIcon
                        icon={faReact}
                        size="lg"
                        className="mx-2"
                        color="#61dafb"
                        title="React"
                    />
                </span>
            );
        case "redux":
            return (
                <img
                    src={redux}
                    className={`mx-2 ${style.expInfoIcon}`}
                    title="Prisma"
                    alt="Prisma"
                />
            );
        case "git":
            return (
                <span title="Git">
                    <FontAwesomeIcon
                        icon={faGitAlt}
                        size="lg"
                        className="mx-2"
                        color="#f05033"
                        title="Git"
                    />
                </span>
            );
        case "bootstrap":
            return (
                <span title="Bootstrap" className="bgd-primary">
                    <FontAwesomeIcon
                        icon={faBootstrap}
                        size="lg"
                        className="mx-2"
                        color="#563d7c"
                        title="Bootstrap"
                    />
                </span>
            );
        case "nodejs":
            return (
                <span title="NodeJS">
                    <FontAwesomeIcon
                        icon={faNodeJs}
                        size="lg"
                        className="mx-2"
                        color="#88c043"
                        title="NodeJs"
                    />
                </span>
            );
        case "database":
            return (
                <span title="Databases">
                    <FontAwesomeIcon
                        icon={faDatabase}
                        size="lg"
                        className="mx-2"
                        color="#88c043"
                        title="SQL"
                    />
                </span>
            );
        case "axios":
            return (
                <img
                    src={axios}
                    className={`mx-2 ${style.expInfoIcon}`}
                    title="Axios"
                    alt="Axios"
                />
            );
        case "prisma":
            return (
                <img
                    src={prisma}
                    className={`mx-2 ${style.expInfoIcon}`}
                    title="Prisma"
                    alt="Prisma"
                />
            );
        case "sqlserver":
            return (
                <img
                    src={sqlServer}
                    className={`mx-2 ${style.expInfoIcon}`}
                    title="SQL Server"
                    alt="SQL Server"
                />
            );
        case "net":
            return (
                <img
                    src={msNet}
                    className={`mx-2 ${style.expressJs}`}
                    title=".NET"
                    alt=".NET"
                />
            );
        case "aspnet":
            return (
                <img
                    src={aspNet}
                    className={`mx-2 ${style.expressJs}`}
                    title="ASP.NET"
                    alt="ASP.NET"
                />
            );
        case "c#":
            return (
                <img
                    src={cSharp}
                    className={`mx-2 ${style.expInfoIcon}`}
                    title="C#"
                    alt="C#"
                />
            );
        case "mysql":
            return (
                <img
                    src={mySql}
                    className={`mx-2 ${style.expInfoIcon}`}
                    title="MySQL"
                    alt="MySQL"
                />
            );
        case "materialui":
            return (
                <img
                    src={materialUi}
                    className={`mx-2 ${style.expInfoIcon}`}
                    title="Material UI"
                    alt="Material UI"
                />
            );
        case "expressjs":
            return (
                <img
                    src={expressJs}
                    className={`mx-2 ${style.expressJs}`}
                    title="Express JS"
                    alt="Express JS"
                />
            );
        case "tortoise":
            return (
                <img
                    src={tortoiseCVS}
                    className={`mx-2 ${style.expressJs}`}
                    title="TortoiseCVS"
                    alt="TortoiseCVS"
                />
            );
        case "reactstrap":
            return (
                <img
                    src={reactStrap}
                    className={`mx-2 ${style.expInfoIcon}`}
                    title="Reactstrap"
                    alt="Reactstrap"
                />
            );
        case "php":
            return (
                <span title="PHP">
                    <FontAwesomeIcon
                        icon={faPhp}
                        size="lg"
                        className={`mx-2 ${style.expInfoIcon}`}
                        color="#8993c1"
                    />
                </span>
            );
        default:
            return (
                <span
                    className={`${style.badgePill} ${style.badgePillExpProf} mx-2 badge-pill`}
                >
                    {technique}
                </span>
            );
    }
}

export default IconTechnique;
