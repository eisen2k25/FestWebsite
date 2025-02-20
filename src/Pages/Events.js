import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Events.css";

function Events() {
  const events = [
    {
      title: "Cloud Computing with AWS",
      description: "Explore AWS services like EC2, S3, and Lambda. Gain hands-on experience in cloud computing.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQcwKitRgXfqdi34DYlocPSEXD2G2zZipg&s",
    },
    {
      title: "Web Development with React JS",
      description: "Master React components, hooks, and state management to build modern UIs.",
      image: "https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png",
    },
    {
      title: "Paper Presentation",
      description: "Summarize and present your research findings in a professional setting.",
      image: "/PaperPresentation.png",
    },
    {
      title: "Powder Metallurgy Techniques",
      description: "Learn about powder production, compaction, and sintering for manufacturing.",
      image: "https://www.pm-review.com/wp-content/uploads/2017/05/carbonyl.png",
    },
  ];

  return (
    <div className="events-container">
      <h1 className="main-heading">Explore Top Events</h1>
      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-info">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-description">{event.description}</p>
              <Link to="https://docs.google.com/forms/..." target="_blank">
                <button className="register-button">Register</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
