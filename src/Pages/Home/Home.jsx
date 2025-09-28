import AboutPreview from "./AboutPreview";
import CTA from "./CTA";
import EventsPreview from "./EventsPreview";
import GalleryPreview from "./GalleryPreview";
import Hero from "./Hero";
import MembersHighlight from "./MembersHighlight";
import ResearchPreview from "./ResearchPreview";

const Home = () => {
    return (
        <div>
            {/* Hero shows the slider or the banner in the homepage */}
            <Hero></Hero>

            {/* This section is for the demonstration of the contents of the website in brief*/}
            <div className="p-2 border-2 border-red-500">
                <AboutPreview></AboutPreview>
                <EventsPreview></EventsPreview>
                <ResearchPreview></ResearchPreview>
                <GalleryPreview></GalleryPreview>
                <MembersHighlight></MembersHighlight>
                <CTA></CTA>
            </div>

        </div>
    );
};

export default Home;