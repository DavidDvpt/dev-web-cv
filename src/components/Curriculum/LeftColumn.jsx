import { Col, Row } from "reactstrap";

function LeftColumn({ children, className }) {
    return (
        <div className={`leftColumn ${className}`}>
            <Row>
                <div className="width-10 bgd-secondary" />
                <div className="width-10 bgd-primary" />
                <div className="width-10 bgd-secondary" />
                <Col className="leftColumnContent">{children}</Col>
            </Row>
        </div>
    );
}

export default LeftColumn;
