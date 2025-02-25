# const { OpenAI } = require("openai");
# // require("dotenv").config();

# // Initialize OpenAI client
# const openai = new OpenAI({
#     apiKey: process.env.OPENAI_API_KEY, // Pass your API key from the .env file
# });



# const axios = require('axios');

# const fetchEventDataFromChatGPT = async (artist) => {
#     const prompt = `
#     Generate a complete timeline of notable events for the hip-hop artist "${artist}" from the beginning of their career to the present.
#     For each year, include:
#     - Albums or mixtapes released
#     - Significant songs or diss tracks
#     - Awards won or major nominations
#     - Key collaborations or features
#     - Controversies or cultural impact moments

#     The response must be in valid JSON format with the following structure:
#     [
#         {
#             "title": "Event Title",
#             "date": "YYYY-MM-DD",
#             "description": "Detailed event description",
#             "artist": "${artist}"
#         }
#     ]
#     If multiple events occurred in the same year, list them as separate entries.
#     Focus on accuracy and cultural significance.`;

#     try {
#         const response = await openai.chat.completions.create({
#             model: "gpt-3.5-turbo", // Ensure this matches your API's available models
#             messages: [{ role: "user", content: prompt }],
#             max_tokens: 4000, // Adjust based on your needs
#         });

#         // Parse the JSON response from ChatGPT
#         const data = JSON.parse(response.choices[0].message.content.trim());
#         return data;
#     } catch (error) {
#         console.error("Error fetching data from ChatGPT:", error.message);
#         throw new Error("Failed to fetch data from ChatGPT");
#     }
# };


# module.exports = { fetchEventDataFromChatGPT };



import os
import json
import openai
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Set your OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")

def fetch_event_data_from_chatgpt(artist: str):
    prompt = f"""
Generate a complete timeline of notable events for the hip-hop artist "{artist}" from the beginning of their career to the present.
For each year, include:
- Albums or mixtapes released
- Significant songs or diss tracks
- Awards won or major nominations
- Key collaborations or features
- Controversies or cultural impact moments

The response must be in valid JSON format with the following structure:
[
    {{
        "title": "Event Title",
        "date": "YYYY-MM-DD",
        "description": "Detailed event description",
        "artist": "{artist}"
    }}
]
If multiple events occurred in the same year, list them as separate entries.
Focus on accuracy and cultural significance.
"""

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=4000,
        )
        # Extract and parse the response
        content = response["choices"][0]["message"]["content"].strip()
        data = json.loads(content)
        return data
    except Exception as e:
        print("Error fetching data from ChatGPT:", e)
        raise Exception("Failed to fetch data from ChatGPT")
