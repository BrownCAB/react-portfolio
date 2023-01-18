// import react
import React from "react";
import Navigation from "./Navigation";

function Header(props) {
    // utilize useState to define currentPage and handlePageChange
    // const [currentPage, handlePageChange] = useState('about')
    const { currentPage, handlePageChange } = props;

    return (
        <header>
            <div>
				<h2>Calah's React Portfolio</h2>
			</div>
            <div>
				<Navigation
					currentPage={currentPage} 
                    handlePageChange={handlePageChange}
				></Navigation>
			</div>
        </header>

    );
}

// export Header
export default Header;