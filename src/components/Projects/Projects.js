import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import agg from "../../Assets/Projects/agg.png";
import tun from "../../Assets/Tennis.png";
import ToDo from "../../Assets/Projects/ToDo.jpg"
import editor from "../../Assets/Projects/taquin.png";
import chatify from "../../Assets/Projects/RL.jpeg";
import F2G from "../../Assets/Projects/F2G.png"
import rub from "../../Assets/rubiks.png";
import bitsOfCode from "../../Assets/Projects/seg.png";
import connect from "../../Assets/Projects/connect.jpg"
import Poster from "./Posterresearch" // change
import site from "../../Assets/Projects/site.jpg"
import web from "../../Assets/Projects/web.jpg"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={site}
              isBlog={false}
              title="Creation of a linking platform between artificial intelligence platforms"
              description="Provides an intuitive interface for managing shortcuts and exploring APIs, accessible even to all users
              with th integration of diverse AI APIs for unified access to AI capabilities through custom shortcuts."
              ghLink="https://github.com/ichrakhamdi/Taquin_game"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web}
              isBlog={false}
              title="Web Application for Streamlining hospital Processes"
              description="a web application to streamline hospital management processes.
              It enables the patients to schedule appointments conveniently
              and doctors can efficiently manage their schedules."
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connect}
              isBlog={false}
              title="Connect 4 Game"
              description="Created an educational project focused on building a Connect4 game as a learning resource to impart programming concepts and game development skills."
            
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={F2G}
              isBlog={false}
              title="Fourniture To Give"
              description="A school supplies mobile app to simplify the process of collecting and distributing school materials by enabling users to request or donate them.
              It contains the implemention of recommendation features within the app  based on the user's location or his interests."
          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo}
              isBlog={false}
              title="ToDo application"          
              description="Developed a custom ToDo application, allowing users
              to efficiently manage their tasks and stay organized."
          
            />
          </Col>

         
        </Row>
      </Container>
    
    </Container>
  );
  
}

export default Projects;

