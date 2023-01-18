// import react
import React from 'react';

function About() {
  return (
    <section>
        <div className="about">
            <h1>About</h1>
            </div>

        <div className='profile'>
          <img 
            src={require('../assets/images/profile_image.jpg')}
            style={{width: 250, height: 250}}
             />
          
        </div>

      <div className='summary'>
      <p>
        My name is Calah, most people call me by my middle name Ashley. As a Graphic Designer and Full Stacked Developer, it is an ongoing process to create and connect with clientele and my online audience. I am an efficient, well-rounded, and dependable Graphic Designer who is capable of supporting staff members within a medium to a large business organization. Thriving within the high-pressure, deadline-driven environments, love for variety and challenges that a person like myself can bring to the table. I am always looking to go above and beyond what is expected in providing first-class administrative, project planning and office support to the team.
      </p>
    </div>
    </section >

    );
}

// export about
export default About;