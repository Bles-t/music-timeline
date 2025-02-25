from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

# Get the directory of the current file (server.py)
current_dir = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(current_dir, ".env"))

# Create FastAPI app
app = FastAPI()

# Retrieve PORT from environment variables or default to 5000
PORT = int(os.getenv("PORT", 5000))

# Configure CORS middleware to allow your frontend domains
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5002", "https://hiphoptimeline.vercel.app"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)


from src.server.routes import events  
print(f"Starting server on port: {PORT}")

# Include the events router with the prefix /events
app.include_router(events.router, prefix="/events")

# Start the server when this file is run directly
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=PORT)