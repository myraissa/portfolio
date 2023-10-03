import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMail,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               LET ME PAINT YOU A PICTURE OF<span className="purple"> ME </span> 
            </h1>
            <p className="home-about-body">
            I fell in love with programming. 
                    In fact,I believe that software engineering and development are the heart of our technological landscape.
                    They drive innovation, solve complex problems,
                     and enhance user experiences across industries.<br />
              <br />I used to be really into creating   <b className="purple"> websites and phone apps.</b>
              But what really excited me was diving into the world of  <b className="purple">artificial intelligence (AI) and data science. </b>
              I wanted to learn more about machine learning and using data to uncover insights. My goal was to keep that excitement alive and be part of cool things happening in this space. I dreamed of using AI and data science to create positive changes, and I was eager to keep learning more and more.
            </p>
          </Col>
          <Col md={4} className="myAvtar" >
            <Tilt>
              <img src={myImg} className="img-fluid" alt="me" />
              
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">contact </span>me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/myraissa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mariem-aissa-b16244222/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto: mariem.aissa@ensi-uma.tn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
