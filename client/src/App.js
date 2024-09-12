import React, { useState, useEffect } from 'react';
import Events from './components/Events.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import EventForm from './components/EventForm.js';
import EventCard from './components/EventCard.js'; // Import the EventCard component

const App = () => {
  const [events, setEvents] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch events from database or API
    const fetchEvents = async () => {
      const response = await fetch('/api/events');
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  const handleAddEvent = (event) => {
    // Add event to database or API
    setEvents([...events, event]);
  };

  return (
    <div className="app">
      <h1>Event Management App</h1>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <Events events={events}>
            {events.map((event) => (
              <EventCard key={event.id} event={event} /> // Render the EventCard component
            ))}
          </Events>
          <EventForm onAddEvent={handleAddEvent} />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Login onLogin={handleLogin} />
          <Register />
        </div>
      )}
    </div>
  );
};

export default App;