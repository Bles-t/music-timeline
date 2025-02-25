from fastapi import APIRouter, HTTPException, Query
import logging
from ..utils.llm import fetch_event_data_from_chatgpt


router = APIRouter()

@router.get("/")
async def get_events(artist: str = Query(..., description="Name of the hip-hop artist")):
    # FastAPI automatically validates that the "artist" parameter is provided,
    # but we include an extra check for clarity.
    if not artist:
        raise HTTPException(status_code=400, detail="Artist query parameter is required")
    
    logging.info(f"Received request for artist: {artist}")
    
    try:
        # Fetch data directly from ChatGPT via our utility function.
        events =  fetch_event_data_from_chatgpt(artist)
        return events
    except Exception as e:
        logging.error(f"Error fetching events: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch events from ChatGPT")