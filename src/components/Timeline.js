import React from 'react';

const Timeline = ({ events }) => {
    return (
        <div className="timeline-container bg-black text-gold min-h-screen flex justify-center items-center p-8">
            {events.length === 0 ? (
                <p className="text-white text-lg">No events found. Try another search.</p>
            ) : (
                <div className="timeline flex items-center overflow-x-scroll space-x-12 py-8">
                    {events.map((event, index) => (
                        <div
                            key={event.id}
                            className="timeline-item flex flex-col items-center"
                            style={{ animation: `fadeIn 0.7s ease-in-out ${index * 0.3}s` }}
                        >
                            {/* Year/Date */}
                            <div className="date-circle bg-gold text-black rounded-full w-10 h-10 flex items-center justify-center font-bold mb-4 shadow-lg">
                                {new Date(event.date).getFullYear()}
                            </div>
                            {/* Event Card */}
                            <div className="event-card bg-black border border-gold text-gold shadow-lg rounded-lg p-4 max-w-xs text-center">
                                <h6 className="text-lg font-semibold mb-2">{event.title}</h6>
                                <p className="text-sm">{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Timeline;
