import React from 'react';
import ResearchHero from './ResearchHero';
import ResearchArea from './ResearchArea';
import ResearchProjects from './ResearchProjects';
import ResearchPublications from './ResearchPublications';
import ResearchTeam from './ResearchTeam';
import ResearchPartners from './ResearchPartners';
import ResearchImpact from './ResearchImpact';
import ResearchTestimonials from './ResearchTestimonials';
import ResearchCTA from './ResearchCTA';

const Research = () => {
    return (
        <>
            <div className='border-2 border-blue-500 p-2'>
                {/* Research page header or title */}
                <h1 className='text-4xl font-bold text-center mb-6'>Research</h1>

                {/* Research page components */}
                <div>
                    <ResearchHero></ResearchHero>
                    <ResearchArea></ResearchArea>
                    <ResearchProjects></ResearchProjects>
                    <ResearchPublications></ResearchPublications>
                    <ResearchTeam></ResearchTeam>
                    <ResearchPartners></ResearchPartners>
                    <ResearchImpact></ResearchImpact>
                    <ResearchTestimonials></ResearchTestimonials>
                    <ResearchCTA></ResearchCTA>
                </div>
            </div></>
    );
};

export default Research;