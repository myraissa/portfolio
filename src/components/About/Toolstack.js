import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAndroidstudio,
  SiLinux,
  SiPycharm,
  SiVisualstudiocode,
  SiWindows

} from "react-icons/si";
import{SiAdobephotoshop, SiAdobeillustrator} from "react-icons/si"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator/>
      </Col>
    </Row>
  );
}

export default Toolstack;
