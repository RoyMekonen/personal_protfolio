import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import githubIcon from '../assets/img/githubwhite.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}></Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/roy-mekonen-8b0620228/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/RoyMekonen"><img src={githubIcon} alt="Icon" /></a>
            </div>
            <p>Roy Mekonen Portfolio.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
