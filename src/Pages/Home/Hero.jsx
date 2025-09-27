import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
    return (
        <div className="w-full h-[500px]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src="/images/slide1.jpg"
                            className="w-full h-full object-cover"
                            alt="Slide 1"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">
                                Welcome to RUHERF
                            </h1>
                            <p className="max-w-xl text-lg mb-6">
                                Empowering Rajshahi University students for higher education opportunities.
                            </p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src="/images/slide2.jpg"
                            className="w-full h-full object-cover"
                            alt="Slide 2"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">
                                Research & Collaboration
                            </h1>
                            <p className="max-w-xl text-lg mb-6">
                                Connect with peers and faculty to explore impactful research areas.
                            </p>
                            <button className="btn btn-secondary">Explore Research</button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src="/images/slide3.jpg"
                            className="w-full h-full object-cover"
                            alt="Slide 3"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">
                                Events & Opportunities
                            </h1>
                            <p className="max-w-xl text-lg mb-6">
                                Participate in seminars, workshops, and academic networking events.
                            </p>
                            <button className="btn btn-accent">Join Events</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;
