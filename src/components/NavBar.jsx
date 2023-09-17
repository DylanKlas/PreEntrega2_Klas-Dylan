import React from "react";
import Brand from "./Brand";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const itemsCarrito = 4;

  return (
    <>
      <Navbar
        expand="lg"
        className=" d-flex justify-content-around bg-secondary"
      >
        {/* text-white bg-black*/}
        <Container className="me-auto">
          <div>
            <img
              src={Logo}
              alt="Imagen del Logo"
              width="30"
              onClick={() => <Link to={"/"} />} // No me funciona.
            />
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to={`/category/${"Business"}`}>Business</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to={`/category/${"Classic"}`}>Classic</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to={`/category/${"Platinum"}`}>Platinum</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to={`/category/${"Serious"}`}>Serious</Link>
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link href="#">About Us</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </div>
          <div>
            <CartWidget itemsCarrito={itemsCarrito}>
              <Link to={`/cart`} />
            </CartWidget>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
