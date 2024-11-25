import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux';
import { Badge } from 'react-bootstrap';

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    console.log('cartItems: ', cartItems);

    return (
        <Navbar expand="md" className="bg-body-tertiary mb-3">
            <Container>
                <Navbar.Brand href="/">Proshop</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-md`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                            Navigation
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            {/* Cart NavLink */}
                            <Nav.Link as={NavLink} to="/cart">
                                <FaShoppingCart /> Cart
                                {
                                    cartItems.length > 0 && (
                                        <Badge pill bg='success' style={{ marginLeft: "5px" }}>
                                            {cartItems.reduce((a, c) => a + (c.qty || 0), 0)}
                                        </Badge>
                                    )
                                }
                            </Nav.Link>

                            {/* Sign In NavLink */}
                            <Nav.Link as={NavLink} to="/login">
                                <FaUser /> Sign In
                            </Nav.Link>
                        </Nav>
                        {/* Search Form */}
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Header;
