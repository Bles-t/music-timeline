import React from 'react';

const Timeline = ({ events }) => {
    return (
        <div className="bg-black min-h-screen py-10 px-5">
            <h1 className="text-center text-4xl font-bold text-white mb-12">
                {events.length > 0 ? `${events[0].artist}'s Hip-Hop Timeline` : 'Interactive Hip-Hop Timeline'}
            </h1>


            <div className="relative w-full flex justify-center">
                {/* Horizontal Line */}
                <div className="absolute top-1/2 left-5 right-5 h-1 bg-gold"></div>

                <div className="flex overflow-x-auto space-x-16 py-8">
                    {events.map((event, index) => (
                        <div key={event.id} className="relative">
                            {/* Alternating Layout */}
                            {index % 2 === 0 ? (
                                <div className="flex flex-col items-center mb-16">
                                    {/* Bullet Point (Year) */}
                                    <div className="bg-gold text-black font-bold w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-10">
                                        {new Date(event.date).getFullYear()}
                                    </div>
                                    {/* Event Content (Above Line) */}
                                    <div
                                        className="bg-white border-2 border-gold text-black rounded-lg p-4 shadow-xl w-64 mt-4"
                                        style={{ animation: `fadeIn 0.7s ease-in-out ${index * 0.3}s` }}
                                    >
                                        <h2 className="text-lg font-semibold">{event.title}</h2>
                                        <p className="text-sm">{event.description}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center mt-16">
                                    {/* Event Content (Below Line) */}
                                    <div
                                        className="bg-white border-2 border-gold text-black rounded-lg p-4 shadow-xl w-64 mb-4"
                                        style={{ animation: `fadeIn 0.7s ease-in-out ${index * 0.3}s` }}
                                    >
                                        <h2 className="text-lg font-semibold">{event.title}</h2>
                                        <p className="text-sm">{event.description}</p>
                                    </div>
                                    {/* Bullet Point (Year) */}
                                    <div className="bg-gold text-black font-bold w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-10">
                                        {new Date(event.date).getFullYear()}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
