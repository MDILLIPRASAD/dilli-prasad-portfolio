// About.js
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  const aboutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const aboutElement = aboutRef.current;
    aboutElement.classList.add("fade-in-up");
  }, [location]);

  return (
    <section id="about" ref={aboutRef} className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-4">About Me</h2>
        <Row className="about-content">
          <Col md={6} className="mb-4">
            <div className="personal-info p-4 bg-white rounded shadow fade-in-up">
              <h3 className="text-primary">Mogarala Dilli Prasad</h3>
              <p>dilliprasadreddy0000@gmail.com</p>
              <p>
                Know more about me in {" "}
                <a
                  href="https://www.linkedin.com/in/dilli-prasad-m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-without-underline"
                >
                  LinkedIn
                </a>{" "}
                | {" "}
                <a
                  href="https://github.com/MDILLIPRASAD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-without-underline"
                >
                  GitHub
                </a>
              </p>

              <p>Chittoor, Andhra Pradesh, India</p>
            </div>
          </Col>

          <Col md={6} className="mb-4">
            <div className="objective p-4 bg-white rounded shadow fade-in-up">
              <h3 className="text-primary">Professional Profile</h3>
              <p>
                As a results-driven web developer with a background in
                Mechanical Engineering, I am passionate about leveraging
                technology to create innovative and user-centric solutions. My
                goal is to apply my skills in a dynamic work environment,
                contributing to organizational success while embracing
                continuous learning and growth.
              </p>
            </div>
          </Col>

          <Col md={6} className="mb-4">
            <div className="education p-4 bg-white rounded shadow fade-in-up">
              <h3 className="text-primary">Education</h3>
              <p>
                <strong>B.Tech in Mechanical Engineering</strong>
                <br />
                Vemu Institute of Technology, Tirupathi, (JNTUA Ananthapuramu),
                A.P
                <br />
                CGPA: 8.0/10.0
              </p>
              <p>
                <strong>Intermediate Board Exams</strong>
                <br />
                Rukmini Krishnaswamy Vidyalaya & Junior College, Chittoor, A.P
                <br />
                CGPA: 9.3/10.0
              </p>
            </div>
          </Col>

          <Col md={6} className="mb-4">
            <div className="technical-skills p-4 bg-white rounded shadow fade-in-up">
              <h3 className="text-primary">Technical Skills</h3>
              <p>
                Proficient in programming languages like Python and Javascript,
                I specialize in web development using HTML, CSS, Bootstrap, and
                Javascript. With experience in version control using Git and
                GitHub, I work seamlessly in Visual Studio Code (VS Code). My
                proficiency extends to documentation tools such as MS Word and
                Ms PowerPoint, along with issue tracking and project management
                using Jira.
              </p>
            </div>
          </Col>

          <Col md={6} className="mb-4">
            <div className="interests p-4 bg-white rounded shadow fade-in-up">
              <h3 className="text-primary">Interests</h3>
              <p>
                Beyond coding, I have a keen interest in technology's role in
                shaping the future, and I am enthusiastic about staying updated
                with the latest advancements in the field. I thrive on
                challenging projects that allow me to combine creativity with
                technical expertise to deliver impactful solutions.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
