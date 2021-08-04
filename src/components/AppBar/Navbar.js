import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Homeicon from './HomeIcon.js';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Nav } from 'react-bootstrap';
import Cart from '../Cart.js'

function NavBar() {

    return(
        <div>
            <Navbar  bg="dark" variant="dark">
                <h1 style={{color:'white', marginLeft:'2%'}}>MUSE away</h1>
                <Navbar.Brand href="/">
                <Homeicon />
                </Navbar.Brand>
                <Nav.Link style={{marginLeft: '65%'}}>
                    <ShoppingCartIcon />
                </Nav.Link>
                <Nav.Link>
                    <Cart />
                </Nav.Link>
            </Navbar>
        </div>

    )
}
export default NavBar; 