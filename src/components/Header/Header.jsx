import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () =>{
        logOut()
        .then(result => {})
        .catch(error => console.error(error))
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                {
                user && <span>{user.email}</span>
                }
                <Link to="/">shop</Link>
                <Link to="/order">order</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/login">login</Link>
                <Link to="/signup">Sign Up</Link>
                {
                user && <button onClick={handleLogout}>logOut</button>
                }
            </div>
        </nav>
    );
};

export default Header;