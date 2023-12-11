import React from "react";
import "./promotion.scss";
import Image1 from "../../assets/tasdiw.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import Image5 from "../../assets/image5.png";
import drop from "../../assets/drop.png";
import VitalWater from "../../assets/vitalWater.png";

const Promotion = () => {
  return (
    <div className="promotion" id="promotion">
      <div className="container">
        <h2 className="pro_title" data-aos="fade-up">
          Siz va Yaqinlarigiz Uchun{" "}
          <span className="subTitle"> Munosib Suv</span>
        </h2>
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
        <div className="promotion_box">
          <div className="box_item" data-aos="fade-right" data-aos-delay="200">
            <div className="box_item_img">
              <img src={Image1} alt="" />
            </div>
            <h3>Tasdiqlangan</h3>
            <p>
              Suvning hayotimizdagi ahamiyati tufayli biz mijozlarimizga 99,99%
              toza suv beramiz.
            </p>
            <span className="link underline">Ko‘proq o‘qish</span>
          </div>
          <div className="box_item_wave">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="64"
              viewBox="0 0 16 64"
              fill="none"
            >
              <path
                d="M8.27864 1C15.2786 9.5 17.4786 23 8.27864 33C-0.921359 43 0.778641 52.5 8.27864 63"
                stroke="#E3E3E3"
                stroke-width="3"
              />
            </svg>
          </div>
          <div className="box_item" data-aos="fade-right" data-aos-delay="400">
            <div className="box_item_img">
              <img src={Image2} alt="" />
            </div>
            <h3>Tasdiqlangan</h3>
            <p>
              Suv turli xil bakteriyalarga ega. 5 bosqichli filtrlash esa
              suvning barcha bakteriyalardan xalos qiladi.
            </p>
            <span className="link underline">Ko‘proq o‘qish</span>
          </div>
          <div className="box_item_wave">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="64"
              viewBox="0 0 16 64"
              fill="none"
            >
              <path
                d="M8.27864 1C15.2786 9.5 17.4786 23 8.27864 33C-0.921359 43 0.778641 52.5 8.27864 63"
                stroke="#E3E3E3"
                stroke-width="3"
              />
            </svg>
          </div>
          <div className="box_item" data-aos="fade-right" data-aos-delay="600">
            <div className="box_item_img">
              <img src={Image3} alt="" />
            </div>
            <h3>Tasdiqlangan</h3>
            <p>
              Mijozlarning hayoti haqida o'ylaymiz shuning uchun biz suvga past
              miqdorda tuz qo‘shamiz, chunki tuz sog'lig'imizga zarar yetkazadi.
            </p>
            <span className="link underline">Ko‘proq o‘qish</span>
          </div>
          <div className="box_item_wave">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="64"
              viewBox="0 0 16 64"
              fill="none"
            >
              <path
                d="M8.27864 1C15.2786 9.5 17.4786 23 8.27864 33C-0.921359 43 0.778641 52.5 8.27864 63"
                stroke="#E3E3E3"
                stroke-width="3"
              />
            </svg>
          </div>
          <div className="box_item" data-aos="fade-right" data-aos-delay="800">
            <div className="box_item_img">
              <img src={Image4} alt="" />
            </div>
            <h3>Tasdiqlangan</h3>
            <p>
              Ishlab chiqarish va qadoqlash jarayonlari to'la
              avtomatlashtirilgan va har qanday inson aralashuvidan himoyalangan
            </p>
            <span className="link underline">Ko‘proq o‘qish</span>
          </div>
          <div className="box_item_wave">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="64"
              viewBox="0 0 16 64"
              fill="none"
            >
              <path
                d="M8.27864 1C15.2786 9.5 17.4786 23 8.27864 33C-0.921359 43 0.778641 52.5 8.27864 63"
                stroke="#E3E3E3"
                stroke-width="3"
              />
            </svg>
          </div>
          <div className="box_item" data-aos="fade-right" data-aos-delay="1000">
            <div className="box_item_img">
              <img src={Image5} alt="" />
            </div>
            <h3>Tasdiqlangan</h3>
            <p>
              Bizning suv kapsulalarimiz 15 bosqichli tozalash jarayonidan
              o‘tadi va mijozlarga toza holatda yetkazildi.
            </p>
            <span className="link underline">Ko‘proq o‘qish</span>
          </div>
        </div>

        <div className="water">
          <div className="water_title" data-aos="fade-right">
            <h2>Suvning tarkibi</h2>
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
                  stroke-width="5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </div>
          <span className="line_blue" data-aos="fade-right"></span>
          <p data-aos="fade-right">
            Mijozlarning hayoti haqida o'ylaymiz shuning uchun biz suvga xlor
            qo‘shmaymiz, chunki xlor sog'lig'imizga jiddiy zarar yetkazadi.
          </p>
        </div>

        <div className="water_property">
          <div className="property1">
            <div className="proBox" data-aos="fade-left" data-aos-delay="">
              <h3>Sulfat</h3>
              <h4>7-12 mg/L</h4>
              <p>
                {" "}
                <span></span> Sulfat hujayralardagi eng muhim
                makronutrientlardan biridir.
              </p>
              <div className="pro_img">
                <img src={drop} alt="" />
              </div>
            </div>
            <div className="proBox" data-aos="fade-left" data-aos-delay="400">
              <h3>Bikorbanat</h3>
              <h4>25-70 mg/L</h4>
              <p>
                {" "}
                <span></span> Bikarbonat antasid bo'lib, oshqozon ekşimesi va
                kislotali ovqat hazm qilishni bartaraf etish uchun ishlatiladi.
              </p>
              <div className="pro_img">
                <img src={drop} alt="" />
              </div>
            </div>
            <div className="proBox" data-aos="fade-left" data-aos-delay="800">
              <h3>Sulfat</h3>
              <h4>7-12 mg/L</h4>
              <p>
                {" "}
                <span></span> Sulfat hujayralardagi eng muhim
                makronutrientlardan biridir.
              </p>
              <div className="pro_img">
                <img src={drop} alt="" />
              </div>
            </div>
          </div>
          <div className="property2">
            <img src={VitalWater} alt="" />
          </div>
          <div className="property1 property3">
            <div className="proBox" data-aos="fade-right" data-aos-delay="200">
              <h3>Sulfat</h3>
              <h4>7-12 mg/L</h4>
              <p>
                {" "}
                <span></span> Sulfat hujayralardagi eng muhim
                makronutrientlardan biridir.
              </p>
              <div className="pro_img">
                <img src={drop} alt="" />
              </div>
            </div>
            <div className="proBox" data-aos="fade-right" data-aos-delay="600">
              <h3>Bikorbanat</h3>
              <h4>25-70 mg/L</h4>
              <p>
                {" "}
                <span></span> Bikarbonat antasid bo'lib, oshqozon ekşimesi va
                kislotali ovqat hazm qilishni bartaraf etish uchun ishlatiladi.
              </p>
              <div className="pro_img">
                <img src={drop} alt="" />
              </div>
            </div>
            <div className="proBox" data-aos="fade-right" data-aos-delay="1000">
              <h3>Sulfat</h3>
              <h4>7-12 mg/L</h4>
              <p>
                {" "}
                <span></span> Sulfat hujayralardagi eng muhim
                makronutrientlardan biridir.
              </p>
              <div className="pro_img">
                <img src={drop} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
