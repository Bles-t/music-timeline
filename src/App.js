import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/Searchbar';
import Timeline from './components/Timeline';
import './index.css'

const App = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async (artist) => {
    try {
      const response = await axios.get(`http://localhost:5001/events?artist=${artist}`);
      console.log('Response from server:', response.data);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents([]);
    }
  };

  return (
    <div className="bg-black text-gold min-h-screen flex flex-col">
      <h1 className="text-center text-4xl font-bold py-6">Interactive Hip-Hop Timeline</h1>
      <SearchBar onSearch={fetchEvents} />
      <Timeline events={events} />
    </div>
  );
};

export default App;
