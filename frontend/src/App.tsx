import { useContext, useEffect, useState } from 'react'
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Store } from './Store'



function App() {
  const {
    state: { mode, cart, userInfo },
    dispatch,
  } = useContext(Store)

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode)
  }, [mode])

  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' })
  }
  const signoutHandler = () => {
    dispatch({ type: 'USER_SIGNOUT' })
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
    window.location.href = '/signin'
  }




  return (
    <div className="d-flex flex-column vh-100">
      <ToastContainer position="bottom-center" limit={1} />
      <header>
        <Navbar
          className="d-flex flex-column align-items-stretch p-2 pb-0 mb-3"
          bg="dark"
          variant="dark"
          expand="lg"
        >
          <div className="d-flex justify-content-between align-items-center">
            <Navbar.Collapse>
              <Nav className="w-100 justify-content-end">

                {userInfo ? (
                  <NavDropdown
                    className="header-link"
                    title={`Hello, ${userInfo.name}`}
                  >
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/add">
                      <NavDropdown.Item>Add Products</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      {' '}
                      Sign Out{' '}
                    </Link>
                  </NavDropdown>
                ) : (
                  <NavDropdown className="header-link" title={`Hello, sign in`}>
                    <LinkContainer to="/signin">
                      <NavDropdown.Item>Sign In</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>

        </Navbar>
      </header>

      <main>
        <Container className="mt-3" style={{ paddingBottom: '50px' }} >
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className="text-center">© 2002-2024 Tersano Inc.</div>
      </footer>
    </div>
  )
}

export default App

