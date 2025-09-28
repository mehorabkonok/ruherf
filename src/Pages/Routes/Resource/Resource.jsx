import React from 'react';
import ResearchHero from '../Research/ResearchHero';
import ResourcesCategory from './ResourcesCategory';
import ResourcesFeatured from './ResourcesFeatured';
import ResourcesDocuments from './ResourcesDocuments';
import ResourcesLinks from './ResourcesLinks';
import ResourcesWorkshop from './ResourcesWorkshop';
import ResourcesCommunity from './ResourcesCommunity';
import ResourcesPartners from './ResourcesPartners';
import ResourcesCallToAction from './ResourcesCallToAction';

const Resource = () => {
    return (
        <>
            <div className='border-2 border-blue-500 p-2'>
                {/* Resource page header or totle */}
                <h1 className='text-4xl font-bold text-center mb-6'>Resources</h1>

                {/* Resources page components */}
                <div>
                    <ResearchHero></ResearchHero>
                    <ResourcesCategory></ResourcesCategory>
                    <ResourcesFeatured></ResourcesFeatured>
                    <ResourcesDocuments></ResourcesDocuments>
                    <ResourcesLinks></ResourcesLinks>
                    <ResourcesWorkshop></ResourcesWorkshop>
                    <ResourcesCommunity></ResourcesCommunity>
                    <ResourcesPartners></ResourcesPartners>
                    <ResourcesCallToAction></ResourcesCallToAction>
                </div>
            </div>
        </>
    );
};

export default Resource;