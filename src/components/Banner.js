import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/githubprofile-removebg.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import CV from "../assets/RMCV.pdf"
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [text, setText] = useState("");
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hey! I'm Roy Mekonen,`}{" Full-Stack Developer."}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='Full-Stack Developer'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Excellent human relations skills.<br/> Excellent communicator.<br/> 
                    Loyal to the workplace.<br/>  Functions well under pressure.<br/> 
                    Strong team player.<br/>  Excellent at multitasking.<br/>  experience
                    working a global environment
                  </p>
                 <a href={CV} style={{textDecoration: 'none'}}><button>
                  Download CV file <ArrowRightCircle size={25} />
                  </button> </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
