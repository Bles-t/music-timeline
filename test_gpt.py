from dotenv import load_dotenv
load_dotenv()  # Loads environment variables from .env

import os, openai, json

openai.api_key = os.getenv("OPENAI_API_KEY")

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": "Generate a simple JSON timeline for hip-hop artist J. Cole"}],
    max_tokens=4000,
)

# Print the raw response before parsing
raw_response = response.choices[0].message.content.strip()
print("Raw response:")
print(raw_response)

# Now try to parse the JSON
try:
    data = json.loads(raw_response)
    print("Parsed JSON:")
    print(data)
except Exception as e:
    print("Error parsing JSON:", e)