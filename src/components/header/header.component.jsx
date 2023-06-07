import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary py-3 bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
            <div class="container-fluid">
                
                <a class="navbar-brand" >
                    <Link className='header-link' to={'/'}><h3>MegaLinks</h3></Link>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link " aria-current="page">
                        <h4>
                            <Link className="header-link" to={'/'}>Home</Link>
                        </h4>
                    </a>
                    <a class="nav-link" >
                        <h4>
                            <Link className='header-link' to={'/explore'}>Explore</Link>
                        </h4>
                    </a>
                </div>
                </div>
            </div>
        </nav>
    );    
};

export default Header;