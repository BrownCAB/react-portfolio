// import react
import React from 'react';

function Navigation(props) {
    const { currentPage, handlePageChange } = props;
    
        return (
            <nav>
                <ul className="navbar">
                    <li className="nav-item">
                        <a class="nav-link" href="#about" 
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        > About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#portfolio" 
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        > Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#contact" 
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        > Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#resume" 
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        > Resume
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }

// export Nav
export default Navigation;