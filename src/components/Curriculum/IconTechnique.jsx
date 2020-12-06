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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                <span title="Bootstrap">
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
                    src={prisma}
                    className="mx-2 exp-info-icon"
                    title="Prisma"
                />
            );
        case "prisma":
            return (
                <img src={axios} className="mx-2 exp-info-icon" title="Axios" />
            );
        case "sqlserver":
            return (
                <img
                    src={sqlServer}
                    className="mx-2 exp-info-icon"
                    title="SQL Server"
                />
            );
        case "net":
            return <img src={msNet} className="mx-2 express-js" title=".NET" />;
        case "aspnet":
            return (
                <img src={aspNet} className="mx-2 express-js" title="ASP.NET" />
            );
        case "c#":
            return (
                <img src={cSharp} className="mx-2 exp-info-icon" title="C#" />
            );
        case "mysql":
            return (
                <img src={mySql} className="mx-2 exp-info-icon" title="MySQL" />
            );
        case "materialui":
            return (
                <img
                    src={materialUi}
                    className="mx-2 exp-info-icon"
                    title="Material UI"
                />
            );
        case "expressjs":
            return (
                <img
                    src={expressJs}
                    className="mx-2 express-js"
                    title="Express JS"
                />
            );
        case "tortoise":
            return (
                <img
                    src={tortoiseCVS}
                    className="mx-2 express-js"
                    title="TortoiseCVS"
                />
            );
        case "reactstrap":
            return (
                <img
                    src={reactStrap}
                    className="mx-2 exp-info-icon"
                    title="Reactstrap"
                />
            );
        case "php":
            return (
                <span title="PHP">
                    <FontAwesomeIcon
                        icon={faPhp}
                        size="lg"
                        className="mx-2"
                        color="#8993c1"
                    />
                </span>
            );
        default:
            return (
                <span className="badge-pill badge-pill-exp-prof mx-2">
                    {technique}
                </span>
            );
    }
}

export default IconTechnique;
