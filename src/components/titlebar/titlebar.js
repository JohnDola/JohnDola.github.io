import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import classes from './titlebar.module.css';
import logo from '../../asset/img/d-icon32.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TitleBar = (props) => {
	const iconSize = '2x';
	return (
		<Navbar className={classes.TitleBar}>
			<Navbar.Brand href="#home">
				<img alt="" src={logo} width="30" height="30" className="d-inline-block align-top TitleBar" />{' '}
			</Navbar.Brand>
			<Nav>
				<Nav.Link href="#aboutme">About me</Nav.Link>
				<Nav.Link href="#refrences">References</Nav.Link>
				<Nav.Link href="#contact">Contact Me</Nav.Link>
			</Nav>

			<Nav className="ml-auto">
				<Nav.Item>
					<Nav.Link href="https://linkedin.com/in/john-dola">
						<FontAwesomeIcon size={iconSize} icon={[ 'fab', 'linkedin' ]} />
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="https://https://www.xing.com/profile/JohnMarco_Dola/cv">
						<FontAwesomeIcon size={iconSize} icon={[ 'fab', 'xing' ]} />
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</Navbar>
	);
};

export default TitleBar;
