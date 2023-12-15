import React from "react";
import "./about.scss";

import { useTranslation } from "react-i18next";
import Images from "../../assets/bgInter.jpg";
import ReadMoreButton from "../../constants/readMore/ReadMore";

const About = () => {
  const [more, setMore] = React.useState(false);
  const { t } = useTranslation();
  const paragraphs = [
    `${t("aboutText")}`,
    `${t("aboutText2")}`,
    "And this is the third paragraph.dfasdfasdfasdfasdfasdf",
    
    
   ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto dignissimos distinctio necessitatibus adipisci recusandae ad iste ullam officiis natus est nemo enim inventore voluptatem nobis dicta iure, eos praesentium dolorem itaque nisi temporibus eum eaque ab fugit? Vero quasi distinctio laboriosam nobis dolores quia. Repudiandae, omnis! Pariatur dolorum itaque suscipit?`
  ];
  return (
    <div className="about" id="about">
      <h2>{t("about")}</h2>
      <span>
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
        <ReadMoreButton paragraphs={paragraphs} />
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
    </div>
  );
};

export default About;
