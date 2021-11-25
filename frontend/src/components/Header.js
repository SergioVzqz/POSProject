import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<Navbar expand="lg" collapseOnSelect>
				<Container>
					<Navbar.Brand as={Link} to="/">
						POS system
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link as={Link} to="/inicio">
								Inicio
							</Nav.Link>
							<Nav.Link as={Link} to="/productos">
								Productos
							</Nav.Link>
							<Nav.Link as={Link} to="/pedidos">
								Pedidos
							</Nav.Link>
							<Nav.Link as={Link} to="/mesas">
								Mesas
							</Nav.Link>
							<Nav.Link as={Link} to="/admin">
								Admin
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
