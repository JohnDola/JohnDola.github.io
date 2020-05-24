import React from 'react';
import { Navbar } from 'react-bootstrap';
const TitleBar = props => (
    <>
 <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="../../../public/images/d-icon32.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
    </Navbar.Brand></Navbar>    </>
)

export default TitleBar;