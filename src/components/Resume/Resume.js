import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/RESUME_SHIBAM.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="AGORA HACKERTHON FIRST POSITION"
              date="June 2020 - August 2020"
              content={[
                "As i am nowa 1 st year student i have no such experiences but . one time i compited in agora hackerthon and occupied the first position.",
                "The hole jurney frommaking the app to the results it was truely amezing .",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Singing and playing guitar"
              content={[
                "Apart from coding i enjoy to sing and play guitar",
              ]}
            />
            <Resumecontent
              title="playing cricket"
              content={[
                "I also love to play cricket",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.TECH CSE [Jalpaiguri Gorvnment Engineering Collage] "
              date="2020 - Present"
              content={[`1st sem results not came out yet`]}
            />
            <Resumecontent
              title="12TH BOARD [Kakdwip Birendra Vidya Niketan]"
              date="2017 - 2019"
              content={["Precentage: 76%"]}
            />
            <Resumecontent
              title="10TH BOARD [Kakdwip Birendra Vidya Niketan] "
              date="2012 - 2017"
              content={["Precentage: 91%"]}
            />
            {/* <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            /> */}
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
