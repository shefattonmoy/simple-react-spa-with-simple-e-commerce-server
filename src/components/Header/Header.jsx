import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { UserContext } from '../Providers/AuthenticationProviders';

const Header = () => {

    const { user, logOut } = useContext(UserContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => console.log(error));
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventories">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {user && <span className='text-white'>{user.email} <button onClick={handleLogOut}>Log Out</button></span>}
            </div>
        </nav>
    );
};

export default Header;