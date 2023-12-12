import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import Item from "../../assets/item.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./shop.scss";

const Shop = () => {
  return (
    <div className="shop" id="shop">
      <h2 data-aos="fade-up">Bizning Maxsulotlarimiz</h2>
      <span data-aos="fade-up" data-aos-delay="300">
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

      <div className="mtSwiper">
        <Swiper
          cssMode={true}
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          // mousewheel={true}
          // keyboard={true}
          modules={[Navigation,  ]}
          className="mySwiper"
        >
            <SwiperSlide >
              <div className="item_img" >
                <img src={Item} alt="" />
              </div>
              <h5>VT-7SX</h5>
              <p>
                VT-7SX modeli bu sensorli boshqaruv tizimli, suvdagi
                bakteriyalarni bartaraf etish funksiyasiga ega va mutlaqo
                shovqinsiz ishlaydigan kulerdir
              </p>
              <span>4 635 000 So‘m</span>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <path
                    d="M1 4.077e-05C0.45 4.077e-05 0 0.450041 0 1.00004C0 1.55004 0.45 2.00004 1 2.00004H3.219L5.844 12.5C6.066 13.39 6.864 14 7.781 14H19.25C20.152 14 20.918 13.402 21.156 12.531L23.75 3.00004H7L7.5 5.00004H21.156L19.25 12H7.781L5.156 1.50004C5.04785 1.06935 4.79827 0.687425 4.44724 0.41545C4.09621 0.143476 3.66405 -0.00280573 3.22 4.077e-05H1ZM18 14C16.355 14 15 15.355 15 17C15 18.645 16.355 20 18 20C19.645 20 21 18.645 21 17C21 15.355 19.645 14 18 14ZM9 14C7.355 14 6 15.355 6 17C6 18.645 7.355 20 9 20C10.645 20 12 18.645 12 17C12 15.355 10.645 14 9 14ZM9 16C9.563 16 10 16.438 10 17C10 17.563 9.562 18 9 18C8.437 18 8 17.562 8 17C8 16.437 8.438 16 9 16ZM18 16C18.563 16 19 16.438 19 17C19 17.563 18.562 18 18 18C17.437 18 17 17.562 17 17C17 16.437 17.438 16 18 16Z"
                    fill="#222222"
                  />
                </svg>
                Sotib olish
              </button>
            </SwiperSlide>
            <SwiperSlide >
              <div className="item_img">
                <img src={Item} alt="" />
              </div>
              <h5>VT-7SX</h5>
              <p>
                VT-7SX modeli bu sensorli boshqaruv tizimli, suvdagi
                bakteriyalarni bartaraf etish funksiyasiga ega va mutlaqo
                shovqinsiz ishlaydigan kulerdir
              </p>
              <span>4 635 000 So‘m</span>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <path
                    d="M1 4.077e-05C0.45 4.077e-05 0 0.450041 0 1.00004C0 1.55004 0.45 2.00004 1 2.00004H3.219L5.844 12.5C6.066 13.39 6.864 14 7.781 14H19.25C20.152 14 20.918 13.402 21.156 12.531L23.75 3.00004H7L7.5 5.00004H21.156L19.25 12H7.781L5.156 1.50004C5.04785 1.06935 4.79827 0.687425 4.44724 0.41545C4.09621 0.143476 3.66405 -0.00280573 3.22 4.077e-05H1ZM18 14C16.355 14 15 15.355 15 17C15 18.645 16.355 20 18 20C19.645 20 21 18.645 21 17C21 15.355 19.645 14 18 14ZM9 14C7.355 14 6 15.355 6 17C6 18.645 7.355 20 9 20C10.645 20 12 18.645 12 17C12 15.355 10.645 14 9 14ZM9 16C9.563 16 10 16.438 10 17C10 17.563 9.562 18 9 18C8.437 18 8 17.562 8 17C8 16.437 8.438 16 9 16ZM18 16C18.563 16 19 16.438 19 17C19 17.563 18.562 18 18 18C17.437 18 17 17.562 17 17C17 16.437 17.438 16 18 16Z"
                    fill="#222222"
                  />
                </svg>
                Sotib olish
              </button>
            </SwiperSlide>
            <SwiperSlide >
              <div className="item_img">
                <img src={Item} alt="" />
              </div>
              <h5>VT-7SX</h5>
              <p>
                VT-7SX modeli bu sensorli boshqaruv tizimli, suvdagi
                bakteriyalarni bartaraf etish funksiyasiga ega va mutlaqo
                shovqinsiz ishlaydigan kulerdir
              </p>
              <span>4 635 000 So‘m</span>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <path
                    d="M1 4.077e-05C0.45 4.077e-05 0 0.450041 0 1.00004C0 1.55004 0.45 2.00004 1 2.00004H3.219L5.844 12.5C6.066 13.39 6.864 14 7.781 14H19.25C20.152 14 20.918 13.402 21.156 12.531L23.75 3.00004H7L7.5 5.00004H21.156L19.25 12H7.781L5.156 1.50004C5.04785 1.06935 4.79827 0.687425 4.44724 0.41545C4.09621 0.143476 3.66405 -0.00280573 3.22 4.077e-05H1ZM18 14C16.355 14 15 15.355 15 17C15 18.645 16.355 20 18 20C19.645 20 21 18.645 21 17C21 15.355 19.645 14 18 14ZM9 14C7.355 14 6 15.355 6 17C6 18.645 7.355 20 9 20C10.645 20 12 18.645 12 17C12 15.355 10.645 14 9 14ZM9 16C9.563 16 10 16.438 10 17C10 17.563 9.562 18 9 18C8.437 18 8 17.562 8 17C8 16.437 8.438 16 9 16ZM18 16C18.563 16 19 16.438 19 17C19 17.563 18.562 18 18 18C17.437 18 17 17.562 17 17C17 16.437 17.438 16 18 16Z"
                    fill="#222222"
                  />
                </svg>
                Sotib olish
              </button>
            </SwiperSlide>
            <SwiperSlide >
              <div className="item_img">
                <img src={Item} alt="" />
              </div>
              <h5>VT-7SX</h5>
              <p>
                VT-7SX modeli bu sensorli boshqaruv tizimli, suvdagi
                bakteriyalarni bartaraf etish funksiyasiga ega va mutlaqo
                shovqinsiz ishlaydigan kulerdir
              </p>
              <span>4 635 000 So‘m</span>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <path
                    d="M1 4.077e-05C0.45 4.077e-05 0 0.450041 0 1.00004C0 1.55004 0.45 2.00004 1 2.00004H3.219L5.844 12.5C6.066 13.39 6.864 14 7.781 14H19.25C20.152 14 20.918 13.402 21.156 12.531L23.75 3.00004H7L7.5 5.00004H21.156L19.25 12H7.781L5.156 1.50004C5.04785 1.06935 4.79827 0.687425 4.44724 0.41545C4.09621 0.143476 3.66405 -0.00280573 3.22 4.077e-05H1ZM18 14C16.355 14 15 15.355 15 17C15 18.645 16.355 20 18 20C19.645 20 21 18.645 21 17C21 15.355 19.645 14 18 14ZM9 14C7.355 14 6 15.355 6 17C6 18.645 7.355 20 9 20C10.645 20 12 18.645 12 17C12 15.355 10.645 14 9 14ZM9 16C9.563 16 10 16.438 10 17C10 17.563 9.562 18 9 18C8.437 18 8 17.562 8 17C8 16.437 8.438 16 9 16ZM18 16C18.563 16 19 16.438 19 17C19 17.563 18.562 18 18 18C17.437 18 17 17.562 17 17C17 16.437 17.438 16 18 16Z"
                    fill="#222222"
                  />
                </svg>
                Sotib olish
              </button>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Shop;
