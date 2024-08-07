import {Container, Navbar, Nav} from "react-bootstrap";
import {Outlet} from "react-router-dom";
import "./../../Styling/Header.css";
import {RiAddLargeFill} from "react-icons/ri";

const HomeHeader = ()  => {
    return(
        <div className={"header"}>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/home/shop">Shopping App</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    </Navbar.Collapse>
                    <Nav.Item id={"add-product"}>
                        <Nav.Link href={"/home/add"} id={"add-icon"} eventKey="first"><RiAddLargeFill /></Nav.Link>
                    </Nav.Item>
                </Container>
            </Navbar>
            <Outlet />
        </div>
        );
    }
export default HomeHeader;