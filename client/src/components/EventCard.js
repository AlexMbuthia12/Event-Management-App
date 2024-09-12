import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.poster} alt={event.name} />
      <h2>{event.name}</h2>
      <p>Price: {event.price}</p>
    </div>
  );
};

export default EventCard;