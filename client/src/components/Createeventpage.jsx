import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faImage } from '@fortawesome/free-solid-svg-icons';

const CreateEventPage = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventImage, setEventImage] = useState(null);

  const handleImageUpload = (e) => {
    setEventImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create event logic here
  };

  return (
    <div className="create-event-page">
      <header className="header">
        <nav className="navbar">
          <Link to="/events" className="navbar-item">Events</Link>
          <Link to="/create-event" className="navbar-item">Create Event</Link>
          <Link to="/profile" className="navbar-item">Profile</Link>
        </nav>
      </header>
      <section className="hero">
        <h1>Create Your Event</h1>
        <p>Get started by filling out the form below.</p>
      </section>
      <section className="featured-events">
        <h2>Featured Events</h2>
        {/* Display featured events here */}
      </section>
      <section className="search-bar">
        <input type="text" placeholder="Search events by name, location, or date" />
      </section>
      <section className="event-details-form">
        <h1>Create an Event</h1>
        <form onSubmit={handleSubmit}>
          <label>Event Name:</label>
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
          <label>Event Date:</label>
          <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
          <label>Event Location:</label>
          <input type="text" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />
          <label>Event Description:</label>
          <textarea value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
          <label>Event Image:</label>
          <input type="file" onChange={handleImageUpload} />
          <button className="save-event">Save Event</button>
        </form>
      </section>
      <section className="event-settings">
        <h2>Event Settings</h2>
        <label>Public or Private Event:</label>
        <select>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
        <label>RSVP Deadline:</label>
        <input type="date" />
      </section>
    </div>
  );
};

export default CreateEventPage;