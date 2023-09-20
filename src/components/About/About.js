import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import in1 from "../../Assets/Projects/Indaba/6.jpeg";
import in2 from "../../Assets/Projects/Indaba/9.jpg";
import in3 from "../../Assets/Projects/Indaba/8.jpg";
import in0 from "../../Assets/Projects/Indaba/10.png";
import in4 from "../../Assets/Projects/Indaba/5.jpeg";
import in5 from "../../Assets/Projects/Indaba/1.jpeg";
import in6 from "../../Assets/Projects/Indaba/4.jpeg";
import in7 from "../../Assets/Projects/Indaba/7.jpeg";
import t1 from "../../Assets/Projects/Talan/1.jpeg"
import t3 from "../../Assets/Projects/Talan/3.jpeg"
import t4 from "../../Assets/Projects/Talan/4.png"
import p1 from "../../Assets/Projects/PCD/1.jpeg"
import p2 from "../../Assets/Projects/PCD/2.jpeg"
import p3 from "../../Assets/Projects/PCD/3.jpeg"
import a1 from "../../Assets/Projects/ARE/1jpg.jpg"
import a2 from "../../Assets/Projects/ARE/2.jpg"
import a3 from "../../Assets/Projects/ARE/3.jpg"
import a4 from "../../Assets/Projects/ARE/4.jpg"
import Toolstack from "./Toolstack";
import Projects from "./Projects";

import Carousel from 'react-bootstrap/Carousel';

 
function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I Am</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>


        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

      

        
      </Container>
    </Container>
  );
}

export default About;
