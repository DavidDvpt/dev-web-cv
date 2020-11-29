import { Col, Row } from "reactstrap";

function LeftColumn({ children, className }) {
    return (
        <Col className={`leftColumn ${className}`}>
            <Row>
                <div className="width-10 grey" />
                <div className="width-10 white" />
                <div className="width-10 grey" />
                <Col className="grey">{children}</Col>
            </Row>
        </Col>
    );
}

export default LeftColumn;
