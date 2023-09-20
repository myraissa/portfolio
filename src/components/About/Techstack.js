import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJava,
  DiJavascript1,
  DiPython,
  DiGit,
  DiDjango,
  DiMysql,
  DiBootstrap,
  DiJavascript
} from "react-icons/di";
import {
  SiTensorflow,
  SiMysql
} from "react-icons/si";
import {BiLogoMongodb, BiLogoCss3, BiLogoReact} from "react-icons/bi"
import {AiFillHtml5, AiFillGithub} from "react-icons/ai"
import {BsGit} from "react-icons/bs"
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><AiFillHtml5/></Col>
      <Col xs={4} md={2} className="tech-icons"><BiLogoCss3/></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript/></Col>
      <Col xs={4} md={2} className="tech-icons"><BiLogoReact/></Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsGit />
      </Col>
    </Row>
  );
}

export default Techstack;
