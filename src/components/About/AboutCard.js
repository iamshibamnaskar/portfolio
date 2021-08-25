import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi I am <span className="purple">Shibam Naskar </span>
            from <span className="purple"> kakdwip Westbengal, India.</span>
            <br />I am a pursuing B.TECH in CSE in JALPAIGURI GORVNMENT ENGINEERING COLLAGE
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Lets build something that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shibam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
