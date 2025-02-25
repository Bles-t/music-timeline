const express = require('express');
const router = express.Router();
const pool = require('../db/db'); // Database connection
const { fetchEventDataFromChatGPT } = require('../../utils/llm'); // Relative path for the LLM utility function
// router.get('/', async (req, res) => {
//     const { artist } = req.query;
//     console.log(`Received request for artist: ${artist}`);

//     try {
//         // Step 1: Query the database
//         const query = artist
//             ? 'SELECT * FROM events WHERE LOWER(artist) LIKE LOWER($1)'
//             : 'SELECT * FROM events';
//         const values = artist ? [`%${artist}%`] : [];
//         const result = await pool.query(query, values);

//         if (result.rows.length > 0) {
//             // If data exists in the database, return it
//             console.log('Data found in database:', result.rows);
//             return res.json(result.rows);
//         }

//         // Step 2: If no data found, fetch from ChatGPT API
//         console.log(`No data found for artist: ${artist}. Fetching from ChatGPT...`);
//         if (artist) {
//             const apiData = await fetchEventDataFromChatGPT(artist);
//             console.log('Data fetched from ChatGPT API:', apiData);

//             // Optionally, save the fetched data to the database
//             for (const event of apiData) {
//                 const { title, date, description, related_track } = event;
//                 await pool.query(
//                     'INSERT INTO events (title, date, description, artist, related_track) VALUES ($1, $2, $3, $4, $5)',
//                     [title, date, description, artist, related_track]
//                 );
//             }

//             // Return the fetched data to the client
//             return res.json(apiData);
//         }

//         // If no artist is provided and the database is empty
//         return res.status(404).json({ error: 'No data found' });
//     } catch (err) {
//         console.error('Error fetching events:', err.message);
//         res.status(500).json({ error: 'Server Error', details: err.message });
//     }
// });

// Fetch events for an artist (directly from ChatGPT)
router.get('/', async (req, res) => {
    const { artist } = req.query;

    if (!artist) {
        return res.status(400).json({ error: 'Artist query parameter is required' });
    }

    console.log(`Received request for artist: ${artist}`);

    try {
        // Fetch data directly from ChatGPT
        const events = await fetchEventDataFromChatGPT(artist);
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error.message);
        res.status(500).json({ error: 'Failed to fetch events from ChatGPT' });
    }
});

module.exports = router;

module.exports = router;
