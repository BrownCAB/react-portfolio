// import react
import React from 'react';

function Navigation(props) {
    const { currentPage, handlePageChange } = props;
    
        return (
            <nav>
                <ul className="navbar">
                    <li className="nav-item">
                        <a className="nav-link" href="#about" 
                        onClick={() => handlePageChange('About')}
                        id={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        > About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio" 
                        onClick={() => handlePageChange('Portfolio')}
                        id={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        > Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact" 
                        onClick={() => handlePageChange('Contact')}
                        id={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        > Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#resume" 
                        onClick={() => handlePageChange('Resume')}
                        id={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        > Resume
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }

// export Nav
export default Navigation;