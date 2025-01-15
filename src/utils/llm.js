const { OpenAI } = require("openai");
// require("dotenv").config();

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Pass your API key from the .env file
});

// // Function to generate event descriptions
// const generateEventDescription = async (event) => {
//     const prompt = `
//     Generate a detailed and engaging description for the following hip-hop event:
//     Title: ${event.title}
//     Date: ${event.date}
//     Artist(s): ${event.artist}
//     Description: ${event.description || 'No description provided.'}
//     Make it informative and culturally significant.`;

//     try {
//         const response = await openai.chat.completions.create({
//             model: "gpt-3.5-turbo", // Use a model available to your API key
//             messages: [{ role: "user", content: prompt }],
//             max_tokens: 150,
//         });
//         return response.choices[0].message.content.trim();
//     } catch (error) {
//         console.error("Error generating description:", error);
//         throw new Error("Failed to generate event description.");
//     }
// };

// module.exports = { generateEventDescription };

const axios = require('axios');

// const fetchEventDataFromChatGPT = async (artist) => {
//     try {
//         const apiResponse = await axios.post(
//             'https://api.openai.com/v1/chat/completions',
//             {
//                 model: 'gpt-3.5-turbo',
//                 messages: [
//                     { role: 'system', content: 'You are an assistant generating event data for artists.' },
//                     { role: 'user', content: `Generate event data for the artist: ${artist}` },
//                 ],
//             },
//             {
//                 headers: {
//                     Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//                     'Content-Type': 'application/json',
//                 },
//             }
//         );

//         // Process and return the API response data
//         const content = apiResponse.data.choices[0].message.content;
//         return JSON.parse(content); // Ensure the API returns valid JSON
//     } catch (err) {
//         console.error('Error fetching data from ChatGPT:', err.message);
//         throw new Error('Failed to fetch data from ChatGPT');
//     }
// };

const fetchEventDataFromChatGPT = async (artist) => {
    const prompt = `
    Generate a complete timeline of notable events for the hip-hop artist "${artist}" from the beginning of their career to the present.
    For each year, include:
    - Albums or mixtapes released
    - Significant songs or diss tracks
    - Awards won or major nominations
    - Key collaborations or features
    - Controversies or cultural impact moments

    The response must be in valid JSON format with the following structure:
    [
        {
            "title": "Event Title",
            "date": "YYYY-MM-DD",
            "description": "Detailed event description",
            "artist": "${artist}"
        }
    ]
    If multiple events occurred in the same year, list them as separate entries.
    Focus on accuracy and cultural significance.`;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // Ensure this matches your API's available models
            messages: [{ role: "user", content: prompt }],
            max_tokens: 4000, // Adjust based on your needs
        });

        // Parse the JSON response from ChatGPT
        const data = JSON.parse(response.choices[0].message.content.trim());
        return data;
    } catch (error) {
        console.error("Error fetching data from ChatGPT:", error.message);
        throw new Error("Failed to fetch data from ChatGPT");
    }
};


module.exports = { fetchEventDataFromChatGPT };
