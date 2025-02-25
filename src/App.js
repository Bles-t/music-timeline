import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/Searchbar';
import Timeline from './components/Timeline';
import './index.css'
import { useNavigate } from 'react-router-dom';


import { Button } from 'bootstrap';


const App = () => {
  const [events, setEvents] = useState([]);

  // const fetchEvents = async (artist) => {
  //   try {
  //     const response = await axios.get(`http://localhost:5001/events?artist=${artist}`);
  //     console.log('Response from server:', response.data);
  //     setEvents(response.data);
  //   } catch (error) {
  //     console.error('Error fetching events:', error);
  //     setEvents([]);
  //   }
  // };
  console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);

  const fetchEvents = async (artist) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/events?artist=${artist}`);
      console.log('Response from server:', response.data);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents([]);
    }
  };

  const handleClick = () => {

  }

  return (
    <div className="bg-black text-gold min-h-screen flex flex-col">

      <h1 className="text-center text-4xl font-bold py-6">Interactive Hip-Hop Timeline</h1>

      <button className="bg-yellow-500 px-4 py-1 rounded">About</button>
      <SearchBar onSearch={fetchEvents} />
      <Timeline events={events} />
    </div>
  );
};

export default App;
