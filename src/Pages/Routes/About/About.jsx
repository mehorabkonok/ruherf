import React from 'react';
import AboutHero from './AboutHero';
import AboutMissionVision from './AboutMissionVision';
import AboutValues from './AboutValues';
import AboutActivities from './AboutActivities';
import AboutLeadership from './AboutLeadership';
import AboutPartners from './AboutPartners';
import AboutTestimonials from './AboutTestimonials';
import AboutCommunity from './AboutCommunity';
import AboutCallToAction from './AboutCallToAction';
import AboutAdvisorPanel from './AboutAdvisorPanel';

const About = () => {
    return (
        <>
            <div className='border-2 border-blue-500 p-2'>
                {/* About page header or totle */}
                <h1 className='text-4xl font-bold text-center mb-6'>About</h1>

                {/* About components */}
                <div>
                    <AboutHero></AboutHero>
                    <AboutAdvisorPanel></AboutAdvisorPanel>
                    <AboutMissionVision></AboutMissionVision>
                    <AboutHero></AboutHero>
                    <AboutValues></AboutValues>
                    <AboutActivities></AboutActivities>
                    <AboutLeadership></AboutLeadership>
                    <AboutPartners></AboutPartners>
                    <AboutTestimonials></AboutTestimonials>
                    <AboutCommunity></AboutCommunity>
                    <AboutCallToAction></AboutCallToAction>
                </div>
            </div>
        </>
    );
};

export default About;