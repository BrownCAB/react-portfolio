import "./App.css";
// import react
import React, { useState } from "react";
// import all components
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

// currentPage hook
function App() {
	const [currentPage, setCurrentPage] = useState("About");
    // return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return null;
        
    };
    
      const handlePageChange = (page) => setCurrentPage(page);
    
      return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} 
            ></Header>
            <div>
                <main>{renderPage()}</main>
            </div>
            <div>
				<Footer></Footer>
			</div>
        </div>
      );
    }


// export app
export default App;