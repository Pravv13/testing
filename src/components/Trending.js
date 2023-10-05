import Card from "react-bootstrap/Card";
import avatarImage from "../assets/images/trending/avatar.jpg";
import barbieImage from "../assets/images/trending/barbie.jpeg";
import jalanImage from "../assets/images/trending/jalanjauh.jpg";
import maghribImage from "../assets/images/trending/waktumaghrib.jpg";
import wanpisImage from "../assets/images/trending/wanpis.jpg";
import wednesdayImage from "../assets/images/trending/wednesday.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";
const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white" id="trending">TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-center movieImage">
              <Image src={avatarImage} alt="Avatar Movies" className="images" />
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
              <Image src={barbieImage} alt="Avatar Movies" className="images"/>
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
              <Image src={jalanImage} alt="Avatar Movies" className="images"/>
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
              <Image src={maghribImage} alt="Avatar Movies" className="images"/>
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
              <Image src={wanpisImage} alt="Avatar Movies" className="images"/>
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
              <Image src={wednesdayImage} alt="Avatar Movies" className="images"/>
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

export default Trending;
