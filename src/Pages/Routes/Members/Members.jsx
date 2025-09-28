import React from 'react';
import MembersHero from './MembersHero';
import MembersAvdisorPanel from './MembersAvdisorPanel';
import MembersHighlight from './MembersHighlight';
import MembersLeadership from './MembersLeadership';
import MembersTestimonials from './MembersTestimonials';
import MembersCommunity from './MembersCommunity';
import MembersGallery from './MembersGallery';
import MembersPartners from './MembersPartners';
import MembersCallToAction from './MembersCallToAction';

const Members = () => {
    return (
        <>
            <div className='border-2 border-blue-500 p-2'>
                {/* Member page header or totle */}
                <h1 className='text-4xl font-bold text-center mb-6'>Members</h1>

                {/* Member page components */}
                <div>
                    <MembersHero></MembersHero>
                    <MembersAvdisorPanel></MembersAvdisorPanel>
                    <MembersHighlight></MembersHighlight>
                    <MembersLeadership></MembersLeadership>
                    <MembersTestimonials></MembersTestimonials>
                    <MembersCommunity></MembersCommunity>
                    <MembersGallery></MembersGallery>
                    <MembersPartners></MembersPartners>
                    <MembersCallToAction></MembersCallToAction>
                </div>
            </div>
        </>
    );
};

export default Members;