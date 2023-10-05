import {Navbar, Container, Nav, NavLink} from "react-bootstrap";
const NavigationBar = () => {
    return(
        <Navbar expand="lg" variant="black" fixed="top" className="bg-black">
            <Container>
                <Navbar.Brand href="/" className="text-white p-2 m-2">PRAVIE</Navbar.Brand>
                <Nav>
                    <NavLink href="#trending" className="text-white">Trending</NavLink>
                    <NavLink href="#superhero" className="text-white">Superhero</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;