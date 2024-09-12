import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faShare, faPlus } from '@fortawesome/free-solid-svg-icons';

const EventPage = () => {
  return (
    <div className="event-page">
      <section className="event-details">
        <h1>{event.name}</h1>
        <p>{event.date} | {event.location}</p>
        <img src={event.image} alt={event.name} />
        <p>{event.description}</p>
      </section>
      <section className="event-actions">
        <button className="rsvp">RSVP</button>
        <button className="share">
          <FontAwesomeIcon icon={faShare} />
          Share
        </button>
        <button className="add-to-calendar">
          <FontAwesomeIcon icon={faPlus} />
          Add to Calendar
        </button>
      </section>
    </div>
  );
};

export default EventPage;