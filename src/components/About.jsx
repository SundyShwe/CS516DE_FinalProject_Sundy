import React, { useContext } from "react";
import { AppContext } from "../App";
function About() {
  const { about } = useContext(AppContext);

  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>
              {about.firstname.toUpperCase()} {about.lastname.toUpperCase()}
            </h2>
            <p className="fst-italic">Foodie • Explorer • Coffee Lover • Web Dev • Tech Geek • Coding Enthusiast</p>
            <p className="fst-italic">Intrigued by technology, research, books, travels and even better conversions.</p>
            <p className="fst-italic">Seeking to be inspired, to work hard for things that are meaningful, and to be surrounded by those who bring out the best in me.</p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src={"img/" + about.profileImg} className="img-fluid" alt="profile image" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>About Me</h3>
              <p className="text-justify">
                Passionate Software Engineer with over 10 years of developing web applications using a wide range of technologies. Deep foundation in JavaScript, TypeScript and
                proficiency in modern JavaScript frameworks, particularly Angular, React and NodeJS.
                <br />A resourceful and self-driven team player who is a lifelong learner and loves to embrace new challenges as opportunities to grow
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Phone:</strong> <span>{about.phone}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>City:</strong> <span>{about.city}</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Email:</strong>
                      <span>{about.city}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Available:</strong>
                      <span>{about.available}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
