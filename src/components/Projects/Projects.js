import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emgineer from "../../Assets/Projects/emgineer.png";
import ytfy from "../../Assets/Projects/ytfy.jpg";
import crewup from "../../Assets/Projects/crewup.png";
import Diwali from "../../Assets/Projects/Diwali.png";
import Walle from "../../Assets/Projects/Wall-e.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crewup}
              isBlog={false}
              title="crewup"
              description="A chat and videi calling app with group or personal . Made with flutter , agora and node.js"
              link="https://github.com/Last-Bench-Devs/Crew-Up.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Diwali}
              isBlog={false}
              title="Diwali"
              description="Diwali is a web based personal voice assistent . It's front end is made with html,css,js and for api used flask"
              link="https://github.com/shibam-naskar/diwali-sns.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Walle}
              isBlog={false}
              title="Wall-e"
              description="Wall-e is a whatsap bot made with python and selenium module , it is made with web scraping in whatsap web."
              link="https://github.com/shibam-naskar/Whatsap-bot.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ytfy}
              isBlog={false}
              title="YT-FY"
              description="ytfy is a online music player aplication that fetches data from youtube convert that to mp3 and play in app. made with flutter and backend is flask api"
              link="https://github.com/shibam-naskar/YT-FY.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emgineer}
              isBlog={false}
              title="Emgineer"
              description="Emgineer is a Discord bot made with python. Yhat can do many kind of works"
              link="https://github.com/Last-Bench-Devs/Emgineer.git"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
