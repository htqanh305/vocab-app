import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'


function NavBar() {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }

    const onSettings = () => {
        navigate('/dashboard')
    }

    const onHome = () => {
        navigate('/')
    }


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href='/'>Voc-App</Navbar.Brand>

        { user ? (
            <>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav>
                <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
                <Nav.Link onClick={onLogout}>
                Logout
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </>) : (
            <>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav>
                <Nav.Link href='/login'>Login</Nav.Link>
                <Nav.Link href='/register'>Register</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </>   
            )
        }
        
      </Container>
    </Navbar>
  );
}

export default NavBar;
