// const OpenAI = require("openai");
// const dotenv = require("dotenv");

// // Load environment variables from .env file
// dotenv.config();

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY, // Use the environment variable
// });

// const completion = openai.chat.completions.create({
//     model: "gpt-4o-mini", // Ensure the model name is correct
//     store: true,
//     messages: [
//         { "role": "user", "content": "write a haiku about AI" },
//     ],
// });

// completion
//     .then((result) => {
//         console.log(result.choices[0].message.content); // Output the AI's response
//     })
//     .catch((error) => {
//         console.error("Error:", error); // Handle errors gracefully
//     });
const pool = require('./db/db'); // Adjust path if needed

(async () => {
    try {
        const res = await pool.query('SELECT NOW()');
        console.log('Database Connected:', res.rows[0]);
    } catch (err) {
        console.error('Database Connection Error:', err.message);
    }
})();
