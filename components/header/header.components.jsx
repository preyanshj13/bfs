import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// importing mandatory styles
import "./header.styles.scss"

//This is code for top header or navbar using react-bootstrap
function Header() {
  
  return (
    <div>
    <Navbar variant="dark" className='header'>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcfbh8qB7dxDj8YxcpL1xFmdiOyUUFcUKl2w&usqp=CAU"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
         &nbsp;  Loan Process
        </Navbar.Brand>
      </Container>
    </Navbar>
    <p></p>
    <h4 style={{marginLeft:"25px"}}>All Loans</h4>
  </div>
  )
}

export default Header