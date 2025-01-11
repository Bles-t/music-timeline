// const express = require('express');
// const router = express.Router();
// const pool = require('../db/db'); // Ensure this is your database connection file
// const { generateEventDescription } = require('/Users/blest/hiphop-timeline/src/utils/llm'); // Relative path for the LLM utility function

// router.get('/', async (req, res) => {
//     const { artist } = req.query;
//     console.log(`Received request for artist: ${artist}`);

//     try {
//         const query = artist
//             ? 'SELECT * FROM events WHERE LOWER(artist) LIKE LOWER($1)'
//             : 'SELECT * FROM events';
//         const values = artist ? [`%${artist}%`] : [];
//         const result = await pool.query(query, values);

//         console.log('Query result:', result.rows); // Log query results
//         res.json(result.rows);
//     } catch (err) {
//         console.error('Error fetching events:', err.message);
//         res.status(500).json({ error: 'Database query failed', details: err.message });
//     }
// });


// // Fetch specific event by ID with LLM-generated details
// router.get('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const result = await pool.query('SELECT * FROM events WHERE id = $1', [id]);

//         if (result.rows.length === 0) {
//             return res.status(404).send('Event not found');
//         }

//         const event = result.rows[0];
//         const detailedDescription = await generateEventDescription(event);

//         res.json({
//             ...event,
//             detailedDescription,
//         });
//     } catch (err) {
//         console.error('Error fetching event by ID:', err.message);
//         res.status(500).send('Server Error');
//     }
// });

// // Add a new event
// router.post('/', async (req, res) => {
//     const { title, date, description, artist } = req.body;

//     if (!title || !date || !description || !artist) {
//         return res.status(400).send('All fields (title, date, description, artist) are required');
//     }

//     try {
//         const result = await pool.query(
//             'INSERT INTO events (title, date, description, artist) VALUES ($1, $2, $3, $4) RETURNING *',
//             [title, date, description, artist]
//         );
//         res.json(result.rows[0]); // Send the newly created event as the response
//     } catch (err) {
//         console.error('Error adding event:', err.message);
//         res.status(500).send('Server Error');
//     }
// });

// router.post('/test', async (req, res) => {
//     try {
//         const insertResult = await pool.query(
//             'INSERT INTO events (title, date, description, artist, related_track) VALUES ($1, $2, $3, $4, $5) RETURNING *',
//             ['Test Event', '2025-01-03', 'Test Description', 'Test Artist', 'Test Track']
//         );
//         console.log('Inserted event:', insertResult.rows[0]);

//         const fetchResult = await pool.query('SELECT * FROM events');
//         console.log('Fetched events:', fetchResult.rows);

//         res.json(fetchResult.rows);
//     } catch (err) {
//         console.error('Error in test route:', err.message);
//         res.status(500).send('Server Error');
//     }
// });


// module.exports = router;

const express = require('express');
const router = express.Router();
const pool = require('../db/db'); // Database connection
const { fetchEventDataFromChatGPT } = require('/Users/blest/hiphop-timeline/src/utils/llm'); // Relative path for the LLM utility function
router.get('/', async (req, res) => {
    const { artist } = req.query;
    console.log(`Received request for artist: ${artist}`);

    try {
        // Step 1: Query the database
        const query = artist
            ? 'SELECT * FROM events WHERE LOWER(artist) LIKE LOWER($1)'
            : 'SELECT * FROM events';
        const values = artist ? [`%${artist}%`] : [];
        const result = await pool.query(query, values);

        if (result.rows.length > 0) {
            // If data exists in the database, return it
            console.log('Data found in database:', result.rows);
            return res.json(result.rows);
        }

        // Step 2: If no data found, fetch from ChatGPT API
        console.log(`No data found for artist: ${artist}. Fetching from ChatGPT...`);
        if (artist) {
            const apiData = await fetchEventDataFromChatGPT(artist);
            console.log('Data fetched from ChatGPT API:', apiData);

            // Optionally, save the fetched data to the database
            for (const event of apiData) {
                const { title, date, description, related_track } = event;
                await pool.query(
                    'INSERT INTO events (title, date, description, artist, related_track) VALUES ($1, $2, $3, $4, $5)',
                    [title, date, description, artist, related_track]
                );
            }

            // Return the fetched data to the client
            return res.json(apiData);
        }

        // If no artist is provided and the database is empty
        return res.status(404).json({ error: 'No data found' });
    } catch (err) {
        console.error('Error fetching events:', err.message);
        res.status(500).json({ error: 'Server Error', details: err.message });
    }
});

module.exports = router;
