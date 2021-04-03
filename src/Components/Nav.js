import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../Styles/Nav.css';
function Nav() {
    const [showBar, setShowBar] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShowBar(true);
            } else {
                setShowBar(false);
            }
        });
        return () => {
            window.removeEventListener('scroll', {});
        };
    }, []);
    return (
        <nav className={showBar ? 'navbar show' : 'navbar'}>
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg'
                alt='netflix logo' />
            <span className='search'><FaSearch /></span>
        </nav>
    );
}

export default Nav;

