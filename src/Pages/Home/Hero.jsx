import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
    return (
        <div className="w-full h-[720px] pt-16">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            // src="/public/cover_image/cover_slider_1.jpg"
                            src="https://i.ibb.co.com/CjgMjWY/cover-1.jpg"
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
                            src="/public/cover_image/cover_slider_2.jpg"
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

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src="/public/cover_image/cover_slider_3.jpg"
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

                {/* Slide 4 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src="/public/cover_image/cover_slider_4.jpg"
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

                {/* Slide 5 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src="/public/cover_image/cover_slider_5.jpg"
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

                {/* Slide 6 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src="/public/cover_image/cover_slider_6.jpg"
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

                {/* Slide 7 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src="/public/cover_image/cover_slider_7.jpg"
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

                {/* Slide 8 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src="/public/cover_image/cover_slider_8.jpg"
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

                {/* Slide 9 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src="/public/cover_image/cover_slider_9.jpg"
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

                {/* Slide 10 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src="/public/cover_image/cover_slider_10.jpg"
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


            </Swiper>
        </div>
    );
};

export default Hero;
