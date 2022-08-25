import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, useNavigate } from 'react-router-dom';
import { NavBtnLink } from 'react';


const Navigate = useNavigate
const Header = () => {
  const [user,setUser]=useState('')
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo')
    if(userInfo){
      setUser(JSON.parse(userInfo))
      console.log(userInfo);
      
    }
  },[])
  const logout=()=>{
    localStorage.removeItem("userInfo")
    Navigate('/')
  }


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Login</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav> 
            
              {user ? <NavLink onClick={logout} to='/'>
                Logout
              </NavLink> : <NavLink to="/login">
                Login
              </NavLink>
              }
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header