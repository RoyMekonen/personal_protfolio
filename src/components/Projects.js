import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import moviesProj from "../assets/img/moviesProj.webp";
import gymProj from "../assets/img/gymProj.webp";
import cryptoProj from "../assets/img/cryptoProj.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Movies App",
      description: "Design & Development",
      imgUrl: moviesProj,
      githubLink: "https://github.com/RoyMekonen/TROYA-PROJECT",
    },
    {
      title: "GYM App",
      description: "Design & Development",
      imgUrl: gymProj,
      githubLink: "https://github.com/RoyMekonen/TROYA-PROJECT",
    },
    {
      title: "Crypto App",
      description: "Design & Development",
      imgUrl: cryptoProj,
      githubLink: "https://github.com/RoyMekonen/TROYA-PROJECT",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
