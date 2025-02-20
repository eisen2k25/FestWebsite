import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Events.css";

function Events() {
  return (
    <div className="events-container">
      {/* Section 1: Workshop Topics */}
      <div className="section">
        {/* <h1>Workshop Topics</h1> */}
        <div className="cards-container">
          <div className="card">
            <img
              src={
                process.env.PUBLIC_URL +
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQcwKitRgXfqdi34DYlocPSEXD2G2zZipg&s"
              }
              alt="Workshop 1"
            />
            <div className="card-info">
              <h2>Cloud computing with AWS</h2>
              <p>
                "Cloud Computing with AWS" is an advanced workshop at Eisen2K25,
                the flagship technical fest. Dive into the world of scalable
                cloud solutions, learn AWS fundamentals, explore services like
                EC2, S3, and Lambda, and gain hands-on experience with
                real-world use cases. Perfect for aspiring cloud architects and
                tech enthusiasts.
              </p>
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSc8MiHUBJOrL-fq_YgpBjn-NnBl2038xQM_MlOqnDocP3_HmQ/viewform?usp=sf_link"
                target="_blank"
              >
                <button className="registration-button">Register btn</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <img
              src={
                process.env.PUBLIC_URL +
                "https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png"
              }
              alt="Workshop 2"
            />
            <div className="card-info">
              <h2>Web development with react JS</h2>
              <p>
                "Web Development with React JS" is an engaging workshop at
                Eisen2K25, designed to empower participants with React
                fundamentals. Learn to build dynamic, interactive web
                applications, explore React components, hooks, and state
                management, and create scalable, modern UIs. Perfect for
                beginners and developers eager to master cutting-edge web
                technologies.
              </p>
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSc8MiHUBJOrL-fq_YgpBjn-NnBl2038xQM_MlOqnDocP3_HmQ/viewform?usp=sf_link"
                target="_blank"
              >
                <button className="registration-button">Register</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Technical Events */}
      <div className="section">
        <h1>Technical Events</h1>
        <div className="cards-container">
          <div className="card">
            <img
              src={process.env.PUBLIC_URL + "/PaperPresentation.png"}
              alt="Technical Event 1"
            />
            <div className="card-info">
              <h2>Paper Presentation</h2>
              <p>
                A paper presentation is a type of academic presentation where
                you orally present the findings of a research paper to an
                audience. It's essentially a way to summarize your research and
                its key takeaways in a concise and engaging way, using visuals
                and spoken language to complement the written paper.
              </p>
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSc8MiHUBJOrL-fq_YgpBjn-NnBl2038xQM_MlOqnDocP3_HmQ/viewform?usp=sf_link"
                target="_blank"
              >
                <button className="registration-button">Register</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <img
              src={
                process.env.PUBLIC_URL +
                "https://www.pm-review.com/wp-content/uploads/2017/05/carbonyl.png"
              }
              alt="Technical Event 2"
            />
            <div className="card-info">
              <h2>Powder Metallurgy Processing Techniques</h2>
              <p>
                "Powder Metallurgy Processing Techniques" is a specialized
                workshop at Eisen2K25, focusing on advanced manufacturing
                processes. Dive into techniques like powder production,
                compaction, sintering, and post-processing. Learn about their
                applications in aerospace, automotive, and medical industries
                while exploring the future of sustainable and precision
                manufacturing with industry experts.
              </p>
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLScaSa9ucytPcoU6srw7fOlCrJ3onHvOExDWqHfnNzilAA7-ww/viewform?usp=sf_link"
                target="_blank"
              >
                <button className="registration-button">Register</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <img
              src={process.env.PUBLIC_URL + "/PosterPresentation.png"}
              alt="New Technical Event"
            />
            <div className="card-info">
              <h2>Poster Presentation</h2>
              <p>
                A poster session or poster presentation is the presentation of
                research by an individual or group for a class or
                academic/professional conference. At a conference, the work is
                usually peer-reviewed. A room is reserved for poster sessions
                where researchers accompany a poster illustrating their methods
                and outcomes.
              </p>
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLScL1UYrq-rGxe5jmifEc0I6dILSFdRqHkTkB9gOO5G28zoeuQ/viewform?usp=sf_link"
                target="_blank"
              >
                <button className="registration-button">Register</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
