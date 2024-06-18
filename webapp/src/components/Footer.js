import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Footer = () => {
    return (
        <Navbar expand="lg" fixed="bottom" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Footer