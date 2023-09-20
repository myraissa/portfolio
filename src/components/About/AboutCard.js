import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mariem Aissa </span>
            from <span className="purple"> Tunisia</span>
            <br />I am a final year student in computer science engineering specialized in Software Engineering at the National School of Computer Science-ENSI.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Participation in voluntary work
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "To get something you never had you have to do something you never did"{" "}
          </p>
          <footer className="blockquote-footer">The best inspirational quote for me.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
