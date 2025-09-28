import React from 'react';
import EventsHero from './EventsHero';
import EventsUpcoming from './EventsUpcoming';
import EventsPast from './EventsPast';
import EventsSpotLight from './EventsSpotLight';
import EventsCalender from './EventsCalender';
import EventsCallToAction from './EventsCallToAction';
import EventsTestimonials from './EventsTestimonials';

const Events = () => {
    return (
        <>
            <div className='border-2 border-blue-500 p-2'>
                {/* Event page header or totle */}
                <h1 className='text-4xl font-bold text-center mb-6'>Events</h1>

                {/* Event components */}
                <div>
                    <EventsHero></EventsHero>
                    <EventsUpcoming></EventsUpcoming>
                    <EventsPast></EventsPast>
                    <EventsSpotLight></EventsSpotLight>
                    <EventsCalender></EventsCalender>
                    <EventsCallToAction></EventsCallToAction>
                    <EventsTestimonials></EventsTestimonials>
                </div>
            </div>
        </>
    );
};

export default Events;