import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {

    

    return (
        <header>
            <Navbar bg="info" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    
                        <Navbar.Brand>UTIVA</Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                            
                           
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>
        </header>
    )
}

export default Header
