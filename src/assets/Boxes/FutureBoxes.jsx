import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function FutureBoxes() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@700&family=IBM+Plex+Sans&family=Inter:wght@100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Container className="container mt-8 d-flex flex-column justify-content-center align-items-center">
        <div className="section mb-4 w-100">
          <h2
            className="mb-8"
            style={{
              fontFamily: "Baloo Bhai 2",
              fontWeight: 700,
              fontSize: "2rem",
            }}
          >
            Read Your Future Now
          </h2>
          <Row className="row-cols-1 row-cols-md-3 g-4">
            <Col>
              <div className="box">
                <img src="/ICONS/tarot.png" alt="Tarot Reading" className="img-fluid" />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "bold" }}
                >
                  <Link
                    className="hover:text-black font-bold text-black"
                    to="/tarot_reading"
                  >
                    Tarot Reading
                  </Link>
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img src="ICONS/angel.png" alt="Angel Reader" className="img-fluid" />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "bold" }}
                >
                  Angel Reader
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img
                  src="/ICONS/ketinalove.png"
                  alt="Katina Love Reading"
                  className="img-fluid"
                />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "bold" }}
                >
                  Katina Love Reading
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <Link to={"/Facecard"}>
                  <img src="/ICONS/face.png" className="Icon-img-top" alt="..." />
                </Link>
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "bold" }}
                >
                  Face Reader
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <Link to={"/Palmreader"}>
                  <img src="/ICONS/palm.png" alt="Palm Reader" className="img-fluid" />
                </Link>
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "bold" }}
                >
                  Palm Reader
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <Link to={"/FingerReading"}>
                  <img src="/ICONS/finger.png" alt="Finger Reader" className="img-fluid" />
                </Link>
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "bold" }}
                >
                  Finger Reader
                </h3>
              </div>
            </Col>
          </Row>
        </div>
        <div className="section mb-4 w-100">
          <h2 className="mb-8">Embark on your Journey</h2>
          <Row className="row-cols-1 row-cols-md-3 g-4">
            <Col>
              <div className="box">
                <img src="/ICONS/timetravel.png" alt="Time Travel" className="img-fluid" />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "bold" }}
                >
                  Time Travel
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img src="/ICONS/astrology.png" alt="Astrology" className="img-fluid" />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "bold" }}
                >
                  Astrology
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img src="/ICONS/biorythm.png" alt="Biorythm" className="img-fluid" />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "bold" }}
                >
                  Biorythm
                </h3>
              </div>
            </Col>
          </Row>
        </div>
        <div className="section mb-4 w-100">
          <h2 className="mb-8 mt-2">Let&apos;s take you to another Dimension</h2>
          <Row className="row-cols-1 row-cols-md-3 g-4">
            <Col>
              <div className="box">
                <img
                  src="/ICONS/dreaminterpretation.png"
                  alt="Dream Interpretation"
                  className="img-fluid"
                />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "bold" }}
                >
                  Dream Interpretation
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img
                  src="/ICONS/crystalball.png"
                  alt="Crystal Ball"
                  className="img-fluid"
                />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "bold" }}
                >
                  Crystal Ball
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img src="/ICONS/numerology.png" alt="Numerology" className="img-fluid" />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "bold" }}
                >
                  Numerology
                </h3>
              </div>
            </Col>
          </Row>
        </div>
        <div className="section mb-4 w-100">
          <h2 className="mb-8 mt-2">Nourish Your Soul</h2>
          <Row className="row-cols-1 row-cols-md-3 g-4">
            <Col>
              <div onClick={() => navigate("/Meditation")} className="box">
                <img src="/ICONS/meditation.png" alt="Meditation" className="img-fluid" />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "bold" }}
                >
                  Meditation
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img
                  src="/ICONS/emotionalsupport.png"
                  alt="Emotional Support"
                  className="img-fluid"
                />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "bold" }}
                >
                  Emotional Support
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img
                  src="/ICONS/getyoursolution.png"
                  alt="Get Your Solutions"
                  className="img-fluid"
                />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "bold" }}
                >
                  Get Your Solutions
                </h3>
              </div>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-3 mt-8 g-4 justify-content-center">
            <img src="/ICONS/divinelogohorizontal.png" alt="Divine Logo" />
          </Row>
        </div>
      </Container>
    </>
  );
}

export default FutureBoxes;
