import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="/">Techtrinity</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Nav>
            <NavItem eventKey={1} href="/">Home</NavItem>
            <NavItem eventKey={2} href="/about">About</NavItem>
        </Nav>
    </Navbar>
)

export default Header;