import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import PageFooter from './PageFooter';
export default function PageHeader()
{
    return(
        <>
          <div style={{backgroundColor:"#b4dbd7"}}>
      <Navbar style={{ background: 'transparent', boxShadow: 'none'}}>
        <Container>
          <Navbar.Brand>Diaz Sifonte's</Navbar.Brand>
          <Nav className="justify-content-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">About</Nav.Link>
            <Nav.Link href="/blogpage">Blog</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/signin">SignIn</Nav.Link>
            <Nav.Link href="/contactuspage">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
      <Outlet />
      </div>
      <PageFooter />
        </>
    )
}