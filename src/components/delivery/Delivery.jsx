import React from "react";
import DeliveryImg from "../../assets/people.png";
import Bot1 from "../../assets/bot1.png";
import Bot2 from "../../assets/bot2.png";
import Bot3 from "../../assets/bot3.png";
import Bot4 from "../../assets/bot4.png";
import Bot5 from "../../assets/bot5.png";
import Del1 from "../../assets/del1.png";
import Del2 from "../../assets/del2.png";
import Del3 from "../../assets/del3.png";
import Damas from "../../assets/damas.png";
import "./Delivery.scss";

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="del_box">
        <div className="del_img">
          <div className="bot_box">
            <div className="box_img1">
              <img src={Bot1} alt="" />
              <img src={Bot2} alt="" />
            </div>
            <div className="box_img1">
              <img src={Bot3} alt="" />
              <img src={Bot3} alt="" />
            </div>
            <div className="box_img1">
              <img src={Bot4} alt="" />
              <img src={Bot5} alt="" />
            </div>
            <div className="del_people">
              <img src={DeliveryImg} alt="" />
            </div>
          </div>
        </div>
        <div className="del_text">
          <h3>
            Yetkazib berish <span> xizmati</span>
          </h3>
          <p>
            Suv yetkazib berish xizmatimiz bilan to'g'ridan-to'g'ri
            eshigingizgacha yetkazib beramiz.
          </p>
          <div className="del_items">
            <div className="del_item">
              <div className="item_img">
                <img src={Del3} alt="" />
              </div>
              <span></span>
              <p>Bepul yetkazib berish</p>
            </div>
            <div className="del_item">
              <div className="item_img">
                <img src={Del2} alt="" />
              </div>
              <span></span>
              <p>24/7 Istalgan vaqtda</p>
            </div>
            <div className="del_item">
              <div className="item_img">
                <img src={Del1} alt="" />
              </div>
              <span></span>
              <p>Ostonagacha yetkazish</p>
            </div>
          </div>
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
            Buyurtma berish
          </button>
        </div>
      </div>
      <div className="damas">
        <img src={Damas} alt="" />
      </div>
    </div>
  );
};

export default Delivery;