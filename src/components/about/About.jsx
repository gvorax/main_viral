import React from "react";
import "./about.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

const About = () => {
  const [more, setMore] = React.useState(false);
  const { t } = useTranslation();
  return (
    <div className="about" id="about">
      <h2 data-aos="fade-up">{t("about")}</h2>
      <span data-aos="fade-up">
        <svg
          width="46"
          height="12"
          viewBox="0 0 46 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6.91579C5.5 3.18778 9.5 0.743381 13.5 6.12117C17.2352 11.1429 22.3333 8.56566 23.5 6.12114C25.3607 2.22236 31.5 2.22236 34 5.64481C37.6316 10.6164 41.5 9.55628 43 5.64481"
            stroke="#F5A93F"
            stroke-width="5"
            stroke-linecap="round"
          />
        </svg>
      </span>
      <p data-aos="fade-up">
       {t("aboutText")}
        {more && (
          <span>
            {t("aboutText2")}
          </span>
        )}
      </p>
      <div className="subLink" data-aos="fade-up">
        <h3 className="link" onClick={()=>{setMore(!more)}} > {!more ? t("more"):t("less")} </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="10"
          viewBox="0 0 22 10"
          fill="none"
        >
          <path d="M17 1L21 5L17 9M1 5H21H1Z" fill="#F5A93F" />
          <path
            d="M17 1L21 5M21 5L17 9M21 5H1"
            stroke="#F5A93F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <Swiper
        data-aos="fade-up"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{ delay: 2500 }}
        loop={true}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default About;
