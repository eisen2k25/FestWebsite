import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Events.css";

function Events() {
  const events = [
    {
      title: "Smart Materials and their Applications",
      description: "Smart materials respond to external stimuli, adapting their properties for applications in aerospace, healthcare, robotics, construction, and energy-efficient technologies.",
      image: "https://img.freepik.com/free-vector/metallurgy-production-flat-composition-with-industrial-scenery-jars-with-liquid-metal-doodle-characters-workers-vector-illustration_1284-83192.jpg?semt=ais_hybrid",
      formUrl: "https://docs.google.com/forms/d/1PBFeMbbi0TfZ3sqVLjLCtqzRg6nqO3XFdNF-ty3xBUw/edit", // Unique form URL for AWS event
    },
    {
      title: "CyberSecurity and DataSecurity",
      description: "Cybersecurity protects networks and systems from cyber threats, while data security safeguards information from unauthorized access, ensuring privacy, integrity, and confidentiality.",
      image: "https://img.freepik.com/premium-vector/vector-hacker-accessing-file-computer-illustration_1272652-99.jpg?ga=GA1.1.1238280283.1678209367&semt=ais_hybrid",
      formUrl: "https://docs.google.com/forms/d/1uPcDZ33amjib6tQ0n8mmVnZl9SScblY6yZ53Zh9aLvE/edit", // Unique form URL for React event
    },
    {
      title: "Paper Presentation",
      description: "A metallurgy event showcases innovations in metal processing, alloy development, heat treatment, and material properties, fostering industry-academic collaboration and technological advancements.",
      image: "https://img.freepik.com/free-psd/friendship-day-vertical-poster-template-with-cartoon-people-jumping-air_23-2149430424.jpg?ga=GA1.1.1238280283.1678209367&semt=ais_hybrid",
      formUrl: "https://docs.google.com/forms/d/1yr9FZhbwH4ELTZXdBPG8MTDInSGvGUN6sY5iFiLHTYU/edit", // Unique form URL for Paper Presentation event
    },
    {
      title: "Failure Analysis of Industrial Components",
      description: "The event explores failure analysis techniques, root cause identification, material defects, and prevention strategies to enhance industrial component reliability and performance.",
      image: "https://img.freepik.com/free-vector/people-working-factory-landing-pages_74855-2533.jpg?ga=GA1.1.1238280283.1678209367&semt=ais_hybrid",
      formUrl: "https://docs.google.com/forms/d/1FjH-m_yEdJ6gDHVstnUa7pAL5s9FYhkR0Ay7bsPwy84/edit", // Unique form URL for Powder Metallurgy event
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
              <Link to={event.formUrl} target="_blank" rel="noopener noreferrer">
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