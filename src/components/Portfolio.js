// import react
import React from 'react';
import Project from './Project';


function Portfolio() {
    const projects = [
        {
            id: 0,
            title: "Code Quiz",
            technologies: "HTML, CSS, JS",
            description: "I want to take a timed quiz on JavaScript fundamentals that stores high scores so that I can guage my knowledge against my peers.",
            github: "https://github.com/BrownCAB/Code_Quiz",
            deployed: "https://browncab.github.io/Code_Quiz/",
            image: "/images/code_quiz.png",
        },
        {
            id: 1,
            title: "Random Password Generator",
            technologies: "HTML, CSS, JS",
            description: "As an employee with access to sensitive data I want to randomly generate a strong password that meets the acceptance critieria to secure the data.",
            github: "https://github.com/BrownCAB/Random_Password_Generator",
            deployed: "https://browncab.github.io/Random_Password_Generator/",
            image: "/images/random_password_generator.png",
        },
        {
            id: 2,
            title: "Team Profile Generator",
            technologies: "HTML, JS",
            description: "As a manager I want to generate a webpage that displays my team's basic information so that I have quick access to the email and Github profiles.",
            github: "https://github.com/BrownCAB/Team_Profile_Generator",
            deployed: "",
            image: "/images/team_profile_generator.png",
        },
        {
            id: 3,
            title: "Text Editor",
            technologies: "HTML, CSS, JS, API",
            description: "As a developer I want to create notes or code snippets with or without an internet connection so that I can reliably retrieve them for later use.",
            github: "https://github.com/BrownCAB/Text-Editor",
            deployed: "",
            image: "/images/text-editor.png",
        },
        {
            id: 4,
            title: "Weather Dashboard",
            technologies: "HTML, CSS, JS, API",
            description: "I'm a traveler who I wants to see the weather outlook for multiple cities so that I can plan a trip accordingly.",
            github: "https://github.com/BrownCAB/Weather_Dashboard",
            deployed: "https://browncab.github.io/Weather_Dashboard/",
            image: "/images/weather_dashboard.png",
        },
        {
            id: 5,
            title: "Work Scheduler",
            technologies: "HTML, CSS, Jquery",
            description: "I'm an employee who wants to add important events to a daily planner so I can manage my time effectively.",
            github: "https://github.com/BrownCAB/Work_Scheduler",
            deployed: "https://browncab.github.io/Work_Scheduler/",
            image: "/images/work_scheduler.png",
        },
    ] 
    return (
        <section>
            <h1>Portfolio</h1>
                <div>
                    <Project projects={projects} />
                </div>
        </section>

    );
}

// export Portfolio
export default Portfolio;