import React from 'react'
import { Link } from 'react-router-dom';

import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/navigation';

const VideoSlider = ({ id, title, videos }) => {
    return (
        <section id={id}>
            <h2>{title}</h2>
            <div className="video__slider">
                <Swiper
                    spaceBetween={15}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    breakpoints={{
                        600: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1600: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        }
                    }}
                    className={`mySwiper-${id}`}
                >
                    {videos.map((video, key) => (
                        <SwiperSlide key={key}>
                            <div className='video'>
                                <div className="video__thumb play__icon">
                                    <Link to={`/video/${video.videoId}`}>
                                        <img src={video.img} alt={video.title} />
                                    </Link>
                                </div>
                                <div className="video__text">
                                    <Link to={`/video/${video.channerid}`}>{video.title}</Link>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default VideoSlider