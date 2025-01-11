import React from 'react';

const Timeline = ({ events }) => {
    return (
        <div className="timeline">
            {events.length === 0 ? (
                <p>No events found. Try another search.</p>
            ) : (
                events.map((event) => (
                    <div key={event.id} className="timeline-item mb-4">
                        <h5>{event.date}</h5>
                        <h6>{event.title}</h6>
                        <p>{event.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Timeline;
