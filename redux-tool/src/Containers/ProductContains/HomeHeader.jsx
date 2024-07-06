import {Container, Navbar, Nav} from "react-bootstrap";
import {Outlet} from "react-router-dom";
import "./../../Styling/Header.css";
import {RiAddLargeFill} from "react-icons/ri";

const HomeHeader = ()  => {
    return(
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/home">Shopping App</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    </Navbar.Collapse>
                    <Nav.Item id={"add-product"}>
                        <Nav.Link href={"add"} id={"add-icon"} eventKey="first"><RiAddLargeFill /></Nav.Link>
                    </Nav.Item>
                </Container>
            </Navbar>
            <Outlet />
        </>
        );
    }
export default HomeHeader;