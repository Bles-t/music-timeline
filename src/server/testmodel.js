const { generateEventDescription } = require('../utils/llm');
require("dotenv").config();

(async () => {
    const testEvent = {
        title: "The Rise of Hip-Hop",
        date: "1973-08-11",
        artist: "DJ Kool Herc",
        description: "A groundbreaking party in the Bronx.",
    };

    try {
        const description = await generateEventDescription(testEvent);
        console.log("Generated Description:", description);
    } catch (error) {
        console.error("Error:", error.message);
    }
})();
