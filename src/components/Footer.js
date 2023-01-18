// import react
import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a 
                    href="https://github.com/BrownCAB" 
                    target="_blank" 
                    rel="noopener noreferrer"> 
                    <img 
                        src={require("../assets/socials/github-white.png")} 
                        alt="Github" 
                        className="social">
                    </img>
                </a>
            </div>
            <div>
                <a 
                    href="https://www.instagram.com/abcm_designs/" 
                    target="_blank" 
                    rel="noopener noreferrer"> 
                    <img 
                        src={require("../assets/socials/instagram-white.png")}
                        alt="Instagram" 
                        className="social">
                    </img>
                </a>
            </div>
            <div>
                <a 
                    href="https://www.linkedin.com/in/calah-brown-94947213b/" 
                    target="_blank" 
                    rel="noopener noreferrer"> 
                    <img 
                        src={require("../assets/socials/linkedin-white.png")}
                        alt="Linkedin" 
                        className="social">
                    </img>
                </a>
            </div>
        </footer>

    );
}

// export footer
export default Footer;
