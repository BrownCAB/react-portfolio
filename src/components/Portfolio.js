// import react
import React from 'react';
import Project from './Project';


function Portfolio() {
    const projects = [
        {
            id: 0,
            title: "Weather Dashboard",
            tech: "",
            description: "",
            github: "",
            deployed: "",
            image: "",
        },
        {
            id: 1,
            title: "Readme Generator",
            tech: "",
            description: "",
            github: "",
            deployed: "",
            image: "",
        },
        {
            id: 2,
            title: "Code Quiz",
            tech: "",
            description: "",
            github: "",
            deployed: "",
            image: "",
        },
        {
            id: 3,
            title: "Random Password Generator",
            tech: "",
            description: "",
            github: "",
            deployed: "",
            image: "",
        },
        {
            id: 4,
            title: "Text Editor",
            tech: "",
            description: "",
            github: "",
            deployed: "",
            image: "",
        },
        {
            id: 5,
            title: "Team Generator Profile",
            tech: "",
            description: "",
            github: "",
            deployed: "",
            image: "",
        },
        {
            id: 6,
            title: "Social Network API ",
            tech: "",
            description: "",
            github: "",
            deployed: "",
            image: "",
        },
    ] 
    return (
        <section>
            <h1>Portfolio</h1>
                <div>
                    <p className="content is-medium">Portfolio</p>
                    <hr />
                    <Project projects={projects} />
                </div>
        </section>

    );
}

// export Portfolio
export default Portfolio;