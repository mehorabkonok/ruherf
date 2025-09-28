import React from 'react';
import GalleryHero from './GalleryHero';
import GalleryCategory from './GalleryCategory';
import GalleryImages from './GalleryImages';
import GalleryVideo from './GalleryVideo';
import GallerySlider from './GallerySlider';
import GalleryCTA from './GalleryCTA';

const Gallery = () => {
    return (
        <>
            <div className='border-2 border-blue-500 p-2'>
                {/* Gallery page header or totle */}
                <h1 className='text-4xl font-bold text-center mb-6'>Gallery</h1>

                {/* Gallery page components */}
                <div>
                    <GalleryHero></GalleryHero>
                    <GalleryCategory></GalleryCategory>
                    <GalleryImages></GalleryImages>
                    <GalleryVideo></GalleryVideo>
                    <GallerySlider></GallerySlider>
                    <GalleryCTA></GalleryCTA>
                </div>
            </div>
        </>
    );
};

export default Gallery;