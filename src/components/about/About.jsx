import React from "react";
import "./about.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay} from "swiper/modules";

import { useTranslation } from "react-i18next";
import Images from "../../assets/bgInter.jpg"

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
            strokeWidth="5"
            stroke-linecap="round"
          />
        </svg>
      </span>
      <p data-aos="fade-up">
        {t("aboutText")}
        {more && <span>{t("aboutText2")}</span>}
      </p>
      <div className="subLink" data-aos="fade-up">
        <h3
          className="link"
          onClick={() => {
            setMore(!more);
          }}
        >
          {" "}
          {!more ? t("more") : t("less")}{" "}
        </h3>
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
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <Swiper
        data-aos="fade-up"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Images} alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default About;
