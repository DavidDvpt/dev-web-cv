import { Col, Row } from "reactstrap";
import style from "./curriculum.module.scss";

function LeftColumn({ children, className }) {
    return (
        <div className={`${className} ${style.leftColumn}`}>
            <Row>
                <div className={`${style.width10} ${style.bgdSecondary}`} />
                <div className={`${style.width10} ${style.bgdPrimary}`} />
                <div className={`${style.width10} ${style.bgdSecondary}`} />
                <Col className={style.leftColumnContent}>{children}</Col>
            </Row>
        </div>
    );
}

export default LeftColumn;
