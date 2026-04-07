import React from 'react'
import './About.less'

const About = () => {
  
  return (
    <div>
      <section id="about" className="about">
        <div className="container">

          <h2 className="section-title">About Me</h2>

          <div className="about-content">
            <div className="about-text">
              

              {/* About Intro */}
              <p>
                I am Kiruthika A, a motivated Java Full Stack Developer with a strong foundation in both front-end and back-end development. I specialize in designing and developing scalable web applications using Java, Spring Boot, React, and modern web technologies.
              </p>

              {/* Internships */}
              <h3 className="he">Internships</h3>

              <div className="internship">
                <h4>Web Development Intern – CodeXodus</h4>
                <p>
                  Completed a 2-month internship where I worked with HTML, CSS, JavaScript, and Java to develop and enhance web applications, gaining hands-on experience in building responsive and user-friendly interfaces.
                </p>
              </div>

              <div className="internship">
                <h4>Full Stack Web Development Intern – ETS Academy</h4>
                <p>
                  Completed a 15-day internship focused on full stack development, working with HTML, CSS, JavaScript, Java, and database integration to build dynamic web applications.
                </p>
              </div>

              {/* Certifications */}
              <h3>Certifications</h3>

              <ul className="certifications">
                <li>Full Stack Web Developer – CodeXodus</li>
                <li>Java Programming – CodeXodus</li>
                <li>Introduction to Cloud Computing – Infosys</li>
                <li>Basics of Python – Infosys</li>
                <li>SQL and Relational Database – IBM</li>
              </ul>

              {/* Skills */}
              <div className="skills">
                <h3>Technical Skills</h3>
                <ul>
                  <li>Java</li>
                  <li>Spring Boot</li>
                  <li>Servlets</li>
                  <li>Hibernate</li>
                  <li>JDBC</li>
                  <li>React.js</li>
                  <li>HTML5</li>
                  <li>CSS3, Sass, Less</li>
                  <li>JavaScript (ES6+)</li>
                  <li>Bootstrap</li>
                  <li>REST APIs</li>
                  <li>MySQL</li>
                  <li>Git & GitHub</li>
                </ul>

                <h3>DSA & Problem Solving</h3>
                <ul>
                  <li>Data Structures & Algorithms</li>
                  <li>Arrays</li>
                  <li>Strings</li>
                  <li>Linked List</li>
                  <li>Stack & Queue</li>
                  <li>Searching & Sorting</li>
                  <li>Recursion</li>
                  <li>Time & Space Complexity (Big-O)</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default About