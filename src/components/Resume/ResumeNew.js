import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/myraissa/portfolio/main/src/Assets/Resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(resumeLink);

  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
       

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
          <div className="resume-container">
          <Page
                pageNumber={1}
                width={width > 786 ? 650: 100} // Adjust the width as needed
                height={width > 786 ?400 : 150} // Adjust the height as needed
              />
            </div>
            <div className="resume-container">
            <Page
                pageNumber={2}
                width={width > 786 ? 650 : 100} // Adjust the width as needed
                height={width > 786 ? 400 : 150} // Adjust the height as needed
              />
            </div>
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
