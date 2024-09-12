import React from 'react';
import EventCard from './EventCard.js';

const Events = ({ events }) => {
  return (
    <div className="events">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Events;