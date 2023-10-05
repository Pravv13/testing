import Card from "react-bootstrap/Card";
import antmanImage from "../assets/images/superhero/antman.jpg";
import blackpantherImage from "../assets/images/superhero/blackpanther.jpg";
import darkknightImage from "../assets/images/superhero/darkknight.png";
import eternalsImage from "../assets/images/superhero/eternals.jpg";
import gotsImage from "../assets/images/superhero/gots.jpg";
import spidermanImage from "../assets/images/superhero/spiderman.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";
const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white" id="superhero">SUPERHERO MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-center movieImage">
              <Image src={antmanImage} alt="Avatar Movies" className="images" />
              <div className="p-2 m-2 text-white">
                <Card.Title className="text-center">
                  Avatar: The Way of Water
                </Card.Title>
                <Card.Text className="text-left">
                  {" "}
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content
                </Card.Text>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-center movieImage">
              <Image src={blackpantherImage} alt="Avatar Movies" className="images"/>
              <div className="p-2 m-2 text-white">
                <Card.Title className="text-center">
                  Avatar: The Way of Water
                </Card.Title>
                <Card.Text className="text-left">
                  {" "}
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content
                </Card.Text>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-center movieImage">
              <Image src={darkknightImage} alt="Avatar Movies" className="images"/>
              <div className="p-2 m-2 text-white">
                <Card.Title className="text-center">
                  Avatar: The Way of Water
                </Card.Title>
                <Card.Text className="text-left">
                  {" "}
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content
                </Card.Text>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-center movieImage">
              <Image src={eternalsImage} alt="Avatar Movies" className="images"/>
              <div className="p-2 m-2 text-white">
                <Card.Title className="text-center">
                  Avatar: The Way of Water
                </Card.Title>
                <Card.Text className="text-left">
                  {" "}
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content
                </Card.Text>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-center movieImage">
              <Image src={gotsImage} alt="Avatar Movies" className="images"/>
              <div className="p-2 m-2 text-white">
                <Card.Title className="text-center">
                  Avatar: The Way of Water
                </Card.Title>
                <Card.Text className="text-left">
                  {" "}
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content
                </Card.Text>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-center movieImage">
              <Image src={spidermanImage} alt="Avatar Movies" className="images"/>
              <div className="p-2 m-2 text-white">
                <Card.Title className="text-center">
                  Avatar: The Way of Water
                </Card.Title>
                <Card.Text className="text-left">
                  {" "}
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content
                </Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
