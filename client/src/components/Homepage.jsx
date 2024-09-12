import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendar } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <nav>
          <ul>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/create-event">Create Event</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <h1>Create an Event Today!</h1>
        <button className="cta">Create Event</button>
      </section>
      <section className="featured-events">
        <h2>Upcoming Events</h2>
        <ul>
          {featuredEvents.map((event) => (
            <li key={event.id}>
              <img src={event.image} alt={event.name} />
              <h3>{event.name}</h3>
              <p>{event.date} | {event.location}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="search-bar">
        <input type="search" placeholder="Search events by name, location, or date" />
        <FontAwesomeIcon icon={faSearch} />
      </section>
    </div>
  );
};

export default HomePage;