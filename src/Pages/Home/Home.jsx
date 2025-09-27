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
            <Hero></Hero>
            <AboutPreview></AboutPreview>
            <EventsPreview></EventsPreview>
            <ResearchPreview></ResearchPreview>
            <GalleryPreview></GalleryPreview>
            <MembersHighlight></MembersHighlight>
            <CTA></CTA>
        </div>
    );
};

export default Home;