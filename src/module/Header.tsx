import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import mc from '../core/Mc';
import { setState } from '../store/Data';

const Header = () => {
    const currIsLogin = mc.getState('isLogin');
    const [isLogin, setIsLogin] = useState(currIsLogin);

    return(
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="Main">Matching</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {isLogin ? <Nav.Link onClick={() => {
                            mc.store.dispatch(setState({isLogin: false}));
                            setIsLogin(false);
                            document.location.href = '/Main' // 추후 삭제 
                        }}>Logout</Nav.Link> 
                        : <Nav.Link href="Login">Login</Nav.Link>}

                        <Nav.Link href="Register">Register</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                        Link
                        </Nav.Link>
                    </Nav>

                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;