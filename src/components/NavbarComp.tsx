import {useState,useContext} from 'react'
import { Button, Container, Form, FormControl, Navbar } from "react-bootstrap"
import { Context } from './StateContext'


export const NavbarComp = () => {

  const {searchItem,setSearchItem}=useContext(Context)

    return (
        <Navbar bg="light" expand="lg">
    <Container fluid style={{display:'flex',justifyContent:'flex-end'}}>
       <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          aria-label="Search"
          className="me-2"
          onChange={e=>setSearchItem(e.target.value)}
        />
      </Form>
  </Container>
</Navbar>
    )
}
