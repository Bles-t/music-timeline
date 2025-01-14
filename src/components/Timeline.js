import React from 'react';

const Timeline = ({ events }) => {
    return (
        <div className="bg-black min-h-screen py-10 px-5">
            <h1 className="text-center text-4xl font-bold text-white mb-12">Interactive Hip-Hop Timeline</h1>
            <div className="relative w-full flex justify-center items-center">
                {/* Horizontal Line */}
                <div className="absolute top-1/2 w-full h-1 bg-gold"></div>

                <div className="flex space-x-12 overflow-x-auto py-6">
                    {events.map((event, index) => (
                        <div
                            key={event.id}
                            className={`timeline-item flex flex-col items-center ${index % 2 === 0 ? 'mb-16' : 'mt-16'}`}
                        >
                            {/* Bullet Year */}
                            <div className="bg-gold text-black font-bold w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                                {new Date(event.date).getFullYear()}
                            </div>
                            {/* Event Content */}
                            <div
                                className={`bg-white border-2 border-gold text-black rounded-lg p-4 shadow-xl w-64 mt-4 ${index % 2 === 0 ? 'text-center' : 'text-center'
                                    }`}
                                style={{ animation: `fadeIn 0.7s ease-in-out ${index * 0.3}s` }}
                            >
                                <h2 className="text-lg font-semibold">{event.title}</h2>
                                <p className="text-sm text-gray-700">{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
