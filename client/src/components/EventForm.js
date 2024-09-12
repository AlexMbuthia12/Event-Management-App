import React, { useState } from 'react';

const EventForm = () => {
  const [name, setName] = useState('');
  const [poster, setPoster] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add event to database or API
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Event Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Poster:
        <input type="file" value={poster} onChange={(e) => setPoster(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;