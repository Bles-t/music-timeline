import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/Searchbar';
import Timeline from './components/Timeline';

const App = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async (artist) => {
    try {
      const response = await axios.get(`http://localhost:5001/events?artist=${artist}`);
      console.log('Response from server:', response.data); // Debugging
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents([]);
    }
  };

  return (
    <div className="bg-black text-gold min-h-screen p-4">
      <h1 className="text-center text-4xl font-bold mb-8">Interactive Hip-Hop Timeline</h1>
      <SearchBar onSearch={fetchEvents} />
      <Timeline events={events} />
    </div>
  );
};

export default App;
