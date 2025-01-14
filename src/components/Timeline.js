import React from 'react';

const Timeline = ({ events }) => {
    return (
        <div className="timeline-container bg-black text-gold min-h-screen flex flex-col items-center py-10">
            {events.length === 0 ? (
                <p className="text-white text-lg">No events found. Try another search.</p>
            ) : (
                <div className="relative w-2/3">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gold h-full"></div>
                    {events.map((event, index) => (
                        <div
                            key={event.id}
                            className={`timeline-item flex items-center justify-start w-full mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                                }`}
                        >
                            <div className="bg-gold rounded-full w-6 h-6 flex items-center justify-center text-black font-bold shadow-lg">
                                {new Date(event.date).getFullYear()}
                            </div>
                            <div
                                className="timeline-card bg-black border border-gold text-gold shadow-lg rounded-lg p-4 ml-4"
                                style={{ animation: `fadeIn 0.7s ease-in-out` }}
                            >
                                <h6 className="text-xl font-semibold">{event.title}</h6>
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
