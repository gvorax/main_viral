import React from "react";
import Change from "../../assets/change.png";
import "./video.scss";

const Video = () => {
  return (
    <div className="video">
      <div className="video_box">
        <div className="video_title">
          <h2>
            Vital Suvlariga <span> Zam Zam </span> Qo'shilishini Bilarmidingiz?
          </h2>
          <div className="video_text">
            <p>
              Vital qadoqlangan tabiiy suvi muqaddas Zam Zam bulog‘idan suv
              qo‘shilishi bilan tayyorlanadi.{" "}
            </p>
            <div className="subLink">
              <h3 className="link">Ko'proq o'qish</h3>
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
          </div>
        </div>
        <div className="video_water">
          <div className="water_item">
            <div className="item_box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="83"
                height="74"
                viewBox="0 0 83 74"
                fill="none"
              >
                <path
                  d="M0 0.143834C0 0.209016 0.0654339 0.23509 0.130868 0.19598C0.196302 0.15687 0.261735 0.0916874 0.261735 0.0525777C0.261735 0.0265045 0.209388 0.000431404 0.130868 0.000431404C0.0654339 0.000431404 0 0.0656142 0 0.143834Z"
                  fill="#13BBEA"
                />
                <path
                  d="M35.9515 8.22814C35.3864 8.36829 34.354 8.60545 33.6693 8.75639C31.1807 9.31697 28.9963 9.80209 26.3881 10.395C24.921 10.7292 22.9648 11.1712 22.0411 11.376C21.1173 11.5809 19.8458 11.872 19.2155 12.0121C18.5852 12.163 17.1941 12.4757 16.1182 12.7128C15.0424 12.95 13.597 13.2734 12.9123 13.4351C9.91287 14.1035 9.61945 14.1898 9.29342 14.5455L9 14.8689V41.583C9 67.8443 9 68.2971 9.21735 68.6313C9.35863 68.8577 9.55424 69.0086 9.8368 69.0841C10.1194 69.1703 15.9226 69.2027 28.1377 69.2027H46.0366L46.0801 70.367C46.1127 71.3049 46.167 71.6067 46.3735 71.984C46.743 72.6956 47.3842 73.3316 48.0906 73.6874L48.7209 74H64.5332H80.3454L80.9105 73.7089C81.7365 73.2777 82.1603 72.8573 82.5841 72.0919L82.9536 71.4127L82.9862 69.3644C83.0188 67.4778 83.008 67.2622 82.7906 66.6908C82.5081 65.947 81.6604 64.9767 81.041 64.718L80.6171 64.5239V63.0578V61.5809L81.0627 61.3868C81.6821 61.1065 82.5081 60.1686 82.7906 59.4248C83.008 58.8426 83.0188 58.6701 82.9862 54.9293L82.9536 51.0375L82.6493 50.423C82.3342 49.7762 81.5843 49.0324 80.9757 48.7413L80.6171 48.5688V47.2428V45.9168H81.3561C82.1494 45.9168 82.6711 45.7012 82.8993 45.27C82.9862 45.1082 83.0188 44.4183 82.9862 43.1354C82.9536 41.2488 82.9536 41.2165 82.6059 40.4942C81.6387 38.4675 79.4978 36.6348 76.2701 35.0932C74.803 34.3924 72.5208 33.5623 71.3471 33.3036L70.7277 33.1634V30.2419V27.3204L71.2276 27.0617C71.9013 26.7059 72.6295 25.8758 72.9012 25.132C73.1185 24.5714 73.1294 24.345 73.0968 22.4692C73.0642 20.6365 73.0424 20.367 72.8251 19.9142C72.4991 19.2027 71.7818 18.4804 71.0645 18.1354C70.4668 17.8443 70.4016 17.8336 68.1194 17.7797L65.7829 17.7258L65.7286 16.2381L65.6742 14.7396L65.3482 14.4593C65.0113 14.1574 64.8374 14.1143 58.6103 12.7128C57.5345 12.4757 56.1434 12.163 55.5131 12.0121C54.8828 11.872 53.6113 11.5917 52.6875 11.376C49.3403 10.6214 46.0909 9.88834 44.9716 9.64039C44.3413 9.50024 43.048 9.19839 42.0917 8.99355C41.1353 8.77795 39.7334 8.45453 38.9836 8.28204C37.3643 7.9155 37.2882 7.9155 35.9515 8.22814ZM36.1471 13.1656L36.1145 15.5589L34.0497 16.0224C32.9195 16.2704 31.3219 16.6369 30.5177 16.8094C29.7135 16.9927 27.7791 17.4347 26.2251 17.7797C24.671 18.1246 22.6388 18.5882 21.715 18.8038C20.7913 19.0086 19.498 19.3105 18.8351 19.4506C18.1831 19.5908 16.879 19.8819 15.9552 20.0975C15.0315 20.3023 13.7056 20.6042 13.021 20.7551C12.3363 20.906 11.6843 21.0462 11.5865 21.0785C11.4017 21.1324 11.3909 20.9707 11.3909 18.7068V16.2704L11.6408 16.2165C11.7712 16.1842 13.1514 15.8823 14.7055 15.5265C16.2595 15.1816 18.7591 14.621 20.2479 14.276C21.7476 13.9418 23.8233 13.4782 24.8666 13.2411C25.9099 13.0039 27.2792 12.702 27.9095 12.5511C28.5398 12.411 30.246 12.0229 31.7132 11.6995C33.1803 11.3653 34.6691 11.0311 35.0278 10.9448C35.3864 10.8586 35.7885 10.7831 35.9298 10.7831L36.1689 10.7723L36.1471 13.1656ZM41.5266 11.3653C42.9719 11.6887 44.9172 12.1307 45.841 12.3355C46.7647 12.5511 47.8406 12.7883 48.2318 12.8745C48.6231 12.9608 49.9163 13.2519 51.1117 13.5214C52.3072 13.7909 54.8067 14.3515 56.6542 14.7719C58.5125 15.1816 60.6643 15.6667 61.4359 15.85C62.2184 16.0224 62.9574 16.1949 63.0986 16.2273C63.3269 16.2704 63.3486 16.3243 63.316 17.0035L63.2834 17.7258L60.9469 17.7797C58.6647 17.8336 58.5995 17.8443 57.9909 18.1354C57.6323 18.3079 57.165 18.6637 56.8715 18.9871L56.3716 19.5369L55.5348 19.3644C54.8284 19.2135 51.8073 18.5343 44.1565 16.7986C42.6024 16.4429 39.4509 15.7422 38.9401 15.6343L38.6141 15.5589L38.5815 13.1656C38.5597 11.0634 38.5706 10.7723 38.7227 10.7723C38.8205 10.7723 40.0812 11.0419 41.5266 11.3653ZM36.1471 20.4964L36.1145 22.8896L34.104 23.3532C31.8436 23.8599 30.496 24.1725 27.9639 24.7331C27.0075 24.9487 25.6165 25.2613 24.8666 25.4338C24.1168 25.6063 22.7474 25.9082 21.8237 26.1238C18.3244 26.9108 15.2923 27.6007 13.434 28.0211C12.3798 28.2583 11.4887 28.4524 11.4561 28.4524C11.4235 28.4524 11.3909 27.3635 11.3909 26.0375V23.6227L12.4559 23.3855C14.249 22.9867 20.9217 21.4774 23.2365 20.9491C23.8668 20.809 25.3339 20.4748 26.4967 20.2161C32.3435 18.9008 33.7019 18.599 34.6474 18.3618C35.2125 18.2324 35.7885 18.1139 35.9298 18.1139L36.1689 18.1031L36.1471 20.4964ZM40.3203 18.4265C41.1136 18.6098 42.8198 18.9979 44.1022 19.2889C45.3845 19.58 47.2212 19.9897 48.1775 20.2053C49.1338 20.4209 50.5249 20.7335 51.2747 20.906C52.0246 21.0785 53.3504 21.3804 54.2199 21.5744L55.8065 21.9302L55.8609 23.2777C55.9043 24.4636 55.9478 24.7115 56.2195 25.2937C56.5346 25.9944 57.4149 26.9539 57.8931 27.1048C58.0235 27.1479 58.1104 27.2018 58.0887 27.2234C58.0452 27.2665 55.6109 26.7383 48.8296 25.2074C48.058 25.0242 46.6886 24.7223 45.7866 24.5175C44.1782 24.1617 42.4829 23.7736 39.9182 23.1915L38.6141 22.9004L38.5815 20.4964C38.5597 18.4696 38.5815 18.1031 38.7119 18.1031C38.7988 18.1031 39.5269 18.254 40.3203 18.4265ZM69.9669 20.3454C70.619 20.6688 70.7385 21.0569 70.7059 22.7603C70.6733 24.0539 70.6516 24.2695 70.4451 24.539C70.0104 25.1104 70.0865 25.1104 64.4788 25.0996C58.8386 25.0996 58.9472 25.1104 58.5451 24.5067C58.3713 24.2372 58.3387 23.9892 58.3387 22.6309C58.3387 20.906 58.3821 20.7443 59.0342 20.3562C59.3493 20.1622 59.6428 20.1514 64.4788 20.1514C69.1193 20.1514 69.6192 20.1729 69.9669 20.3454ZM36.1689 27.7948C36.1689 29.0992 36.1363 30.188 36.0928 30.2096C36.0385 30.2419 34.8213 30.533 33.365 30.8672C31.9088 31.2014 30.6264 31.5248 30.5069 31.5787C29.9961 31.859 29.9744 32.0746 29.9744 36.2575C29.9744 38.5537 30.0178 40.3001 30.083 40.4618C30.1374 40.6128 30.3439 40.8392 30.5395 40.9685C30.985 41.238 31.1481 41.2165 33.7345 40.6343C34.8104 40.3972 35.7885 40.1708 35.9298 40.1492L36.1689 40.0953V53.4092V66.7232H31.8218H27.4748L27.4531 49.9487L27.4205 33.1742L27.0619 32.8616C26.638 32.4843 26.2903 32.4627 24.9753 32.7646C24.4645 32.8724 23.193 33.1634 22.1497 33.3898C21.1064 33.627 19.0307 34.1014 17.5419 34.4355C16.053 34.7697 14.6946 35.1147 14.5207 35.201C13.8578 35.5459 13.8904 34.6727 13.8904 51.4148V66.7232H12.6406H11.3909V48.8922C11.3909 37.7128 11.4343 31.0289 11.4995 30.9858C11.5865 30.9319 13.5752 30.4683 18.0201 29.4765C18.6504 29.3364 20.0414 29.0237 21.1173 28.7758C22.1932 28.5386 23.3886 28.2691 23.7799 28.1829C24.1711 28.0966 25.247 27.8594 26.1707 27.6438C27.0945 27.4282 29.0506 26.9862 30.5177 26.6628C31.9849 26.3286 33.7671 25.9297 34.4844 25.7572C35.2017 25.5955 35.8754 25.4554 35.9841 25.4446C36.158 25.4338 36.1689 25.6171 36.1689 27.7948ZM39.929 25.6926C40.5811 25.8435 43.0698 26.4041 45.4606 26.9431C47.8515 27.4821 50.5466 28.0858 51.4378 28.2907C52.3398 28.4955 53.7308 28.8081 54.535 28.9914C55.3392 29.1747 56.3499 29.3903 56.7629 29.4873C57.1867 29.5735 57.7083 29.6921 57.9366 29.7568L58.3387 29.8646V31.514V33.1634L57.7301 33.2928C57.404 33.3683 56.7303 33.5623 56.2412 33.724L55.3501 34.0259L54.3177 33.7887C53.7525 33.6594 52.481 33.3683 51.4921 33.1527C50.5032 32.9263 49.0904 32.6136 48.3405 32.4412C47.5906 32.2687 46.2213 31.9668 45.2976 31.7512C40.5702 30.6839 38.7119 30.2635 38.6467 30.2096C38.5271 30.1449 38.538 25.4338 38.6467 25.4338C38.701 25.4338 39.277 25.5524 39.929 25.6926ZM68.2281 30.9858C68.2281 34.6188 68.2607 34.8668 68.7824 35.1363C68.9019 35.201 69.6735 35.4166 70.4886 35.6214C74.0749 36.4946 77.2916 38.1009 79.1609 39.9336C80.2476 41.0009 80.5302 41.5291 80.5954 42.5856L80.6497 43.4373H64.544H48.4492V42.7042C48.4492 41.68 48.7861 41.0332 49.8402 39.9875C51.7638 38.0901 55.0458 36.4515 58.556 35.6214C59.2407 35.4597 59.9688 35.2656 60.1644 35.1794C60.8056 34.9099 60.8382 34.6835 60.8382 30.9319V27.5899H64.5332H68.2281V30.9858ZM36.1689 35.1902C36.1689 36.527 36.1471 37.6158 36.1145 37.6158C36.0819 37.6158 35.2886 37.7883 34.354 37.9931C33.4194 38.1979 32.6152 38.3704 32.5608 38.3704C32.5174 38.3704 32.4739 37.2816 32.4739 35.9664V33.5515L33.8106 33.2605C34.5387 33.1095 35.2886 32.9371 35.4625 32.8832C36.2123 32.6568 36.1689 32.5058 36.1689 35.1902ZM39.8856 33.0233C40.505 33.1742 41.6678 33.433 42.472 33.6162C43.2762 33.7995 45.2107 34.2307 46.7647 34.5865C48.3188 34.9422 49.9815 35.3088 50.4597 35.4058C50.9379 35.5136 51.3726 35.6214 51.416 35.643C51.4595 35.6753 50.9705 36.0311 50.3293 36.4515C49.5251 36.969 48.7969 37.5727 48.0362 38.3381L46.9169 39.4593L42.7981 38.5429C40.5376 38.0362 38.6575 37.6158 38.6249 37.6158C38.5923 37.6158 38.5597 36.527 38.5597 35.1902C38.5597 33.7887 38.6032 32.7646 38.6575 32.7646C38.7119 32.7646 39.2661 32.8832 39.8856 33.0233ZM24.9753 50.9836V66.7232H20.6826H16.3899V51.9646V37.2061L17.8353 36.8719C21.552 36.0095 24.8231 35.2656 24.8992 35.2549C24.9427 35.2441 24.9753 42.3269 24.9753 50.9836ZM41.0049 40.6343C42.0808 40.8715 43.5262 41.1949 44.2108 41.3459C44.8955 41.4968 45.5802 41.6585 45.7323 41.7016L46.004 41.7879L46.0583 43.5235C46.1127 45.2484 46.1127 45.27 46.417 45.561C46.6778 45.8305 46.8082 45.8629 47.5798 45.8952L48.4492 45.9383V47.2536V48.558L47.9601 48.8167C47.3842 49.1186 46.7212 49.8085 46.3626 50.4662C46.1127 50.9189 46.1127 50.9836 46.0801 54.9616L46.0475 58.9828L46.3626 59.6511C46.7212 60.4058 47.3842 61.1065 48.0254 61.3868L48.4492 61.5809V63.047L48.4383 64.5132L48.0145 64.7072C47.4494 64.9659 46.6995 65.7206 46.4496 66.2812L46.2431 66.7232H42.396H38.5597V53.4092V40.0953L38.8097 40.1492C38.9401 40.1708 39.929 40.3972 41.0049 40.6343ZM78.1176 47.1565V48.3963H64.5332H50.9487V47.1565V45.9168H64.5332H78.1176V47.1565ZM79.8564 50.9621C80.5845 51.3178 80.6171 51.5119 80.6171 55.0587C80.6171 58.4869 80.5845 58.7132 80.0194 59.1552L79.7151 59.3924H64.5223H49.3186L48.9056 59.0259L48.5035 58.6593L48.4709 55.2204C48.4492 51.458 48.4492 51.4472 49.0904 51.016L49.4599 50.768H64.4679C78.5414 50.768 79.4978 50.7788 79.8564 50.9621ZM78.1176 63.0578V64.2436H64.5332H50.9487V63.0578V61.8719H64.5332H78.1176V63.0578ZM80.1607 67.0897L80.5628 67.4562V69.1272C80.5628 70.658 80.541 70.8305 80.3346 71.1108C80.215 71.2725 79.9433 71.4666 79.7368 71.542C79.2043 71.7253 49.862 71.7253 49.3186 71.542C49.1121 71.4666 48.8404 71.251 48.6991 71.0461C48.4709 70.7119 48.4492 70.561 48.4492 69.2566C48.4492 67.6287 48.547 67.2514 49.0252 66.9495C49.3729 66.7232 49.4816 66.7232 64.5658 66.7232H79.7477L80.1607 67.0897Z"
                  fill="#13BBEA"
                />
              </svg>
            </div>
            <p>Qudug‘dan Zam Zam Suvi Olinadi </p>
            <div className="line">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="148"
                height="44"
                viewBox="0 0 148 44"
                fill="none"
              >
                <path
                  d="M1 4.87011C55 -3.9994 100.5 4.8695 147 43.0009"
                  stroke="#D9D9D9"
                  stroke-width="2"
                  stroke-miterlimit="16"
                  stroke-linejoin="round"
                  stroke-dasharray="7 7"
                />
              </svg>
            </div>
          </div>
          <div className="water_item">
            <div className="item_box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="101"
                height="103"
                viewBox="0 0 101 103"
                fill="none"
              >
                <path
                  d="M46.5462 15.9219C46.5462 16.0399 46.507 16.7082 46.4679 17.3765L46.4287 18.6738H50.3434H54.219V17.2979V15.9219L50.4217 15.804C48.3078 15.7647 46.5853 15.804 46.5462 15.9219Z"
                  fill="#37A0D1"
                />
                <path
                  d="M29.243 18.3593C28.7732 18.831 28.969 19.9711 29.5562 20.207C30.3 20.4822 31.357 19.4207 31.0829 18.6738C30.848 18.0841 29.7128 17.8875 29.243 18.3593Z"
                  fill="#37A0D1"
                />
                <path
                  d="M69.5647 19.3815C69.4473 19.7353 69.5647 20.2464 69.7996 20.6395C70.4651 21.5044 71.7179 20.9933 71.5613 19.8926C71.4047 18.9097 69.8779 18.5559 69.5647 19.3815Z"
                  fill="#37A0D1"
                />
                <path
                  d="M42.788 22.0941C41.8485 25.5536 38.7558 28.0304 34.8019 28.5414C30.4174 29.0918 28.969 30.7429 28.969 35.2639V38.1338H50.3043H71.6395V35.2639C71.6395 30.7429 70.1911 29.0918 65.8066 28.5414C61.8527 28.0304 58.7601 25.5536 57.8205 22.0941L57.3899 20.4429H50.3043H43.2186L42.788 22.0941Z"
                  fill="#37A0D1"
                />
                <path
                  d="M79.743 22.723C78.3337 24.2562 79.469 26.7329 81.5046 26.7329C82.4442 26.7329 83.7752 25.357 83.7752 24.3741C83.7752 23.3127 82.405 22.0154 81.3089 22.0154C80.8 22.0154 80.0953 22.3299 79.743 22.723Z"
                  fill="#37A0D1"
                />
                <path
                  d="M16.9899 35.5785C16.8333 35.9323 16.9116 36.404 17.1465 36.6399C17.7729 37.2689 18.9864 36.8365 18.9864 35.9716C18.9864 34.9495 17.3422 34.635 16.9899 35.5785Z"
                  fill="#37A0D1"
                />
                <path
                  d="M83.1488 39.5096C82.9923 39.8634 83.0706 40.3352 83.3054 40.5711C83.9318 41.2001 85.1454 40.7676 85.1454 39.9028C85.1454 38.8806 83.5012 38.5661 83.1488 39.5096Z"
                  fill="#37A0D1"
                />
                <path
                  d="M28.969 41.2786V42.8511H50.3043H71.6395V41.2786V39.706H50.3043H28.969V41.2786Z"
                  fill="#37A0D1"
                />
                <path
                  d="M28.969 59.1658V73.9082H50.3043H71.6395V59.1658V44.4235H50.3043H28.969V59.1658ZM50.0694 51.2639C50.6957 52.0502 50.1868 53.0723 49.1298 53.0723C48.6209 53.0723 48.112 52.7971 47.9946 52.4433C47.7205 51.6964 48.3861 50.7135 49.1298 50.7135C49.4039 50.7135 49.8345 50.9494 50.0694 51.2639ZM63.6143 51.8929C63.6143 52.6006 63.3795 52.9151 62.714 52.9937C62.205 53.0723 61.7353 52.8758 61.6178 52.5219C61.2264 51.4998 61.7744 50.6349 62.714 50.7922C63.3795 50.8708 63.6143 51.1853 63.6143 51.8929ZM44.4322 54.8414C46.0372 56.4139 45.724 58.9693 43.8058 59.9521C42.2399 60.7777 41.6919 60.699 40.2043 59.3624C37.9729 57.3968 37.6205 57.6719 37.5031 61.6032C37.4248 64.3551 37.2682 65.0628 36.7985 65.0628C36.3287 65.0628 36.2112 64.3158 36.2112 60.7384V56.4139L37.5814 56.296C38.3252 56.2174 39.2256 55.8635 39.5388 55.4704C41.0264 53.662 43.0229 53.3868 44.4322 54.8414ZM58.0554 54.3303C60.2085 55.4704 60.5217 57.6326 58.7601 59.4017C58.1337 60.0307 57.3508 60.5418 56.9985 60.5418C55.9806 60.5418 54.4539 59.6769 53.8667 58.7727C53.4361 58.1044 53.0446 57.9864 51.9093 58.1044L50.5 58.2616V60.8956C50.5 62.3109 50.3434 63.7261 50.1477 64.0013C49.6779 64.7876 44.0407 64.4731 44.0407 63.6868C44.0407 63.2544 44.6279 63.0578 46.1938 62.9006L48.3469 62.704L48.4643 59.9521C48.5426 58.4582 48.7775 57.0036 49.0124 56.7284C49.2473 56.4532 50.226 56.2174 51.2829 56.2174C52.8488 56.2174 53.3578 56.0208 54.3364 55.038C55.5892 53.78 56.6853 53.5834 58.0554 54.3303ZM63.6143 59.9914V64.2765H60.6783C58.2512 64.2765 57.7423 64.1586 57.6248 63.6082C57.5074 63.0578 57.8597 62.9399 59.7779 62.8219L62.0485 62.704L62.1659 59.559C62.2833 55.9815 62.4399 55.3132 63.1446 55.549C63.4578 55.6277 63.6143 56.8857 63.6143 59.9914Z"
                  fill="#37A0D1"
                />
                <path
                  d="M41.3395 56.0601C40.2042 57.2002 40.8697 58.5762 42.5531 58.5762C43.7666 58.5762 44.2756 56.7285 43.2577 55.9422C42.3182 55.2739 42.0833 55.3132 41.3395 56.0601Z"
                  fill="#37A0D1"
                />
                <path
                  d="M55.824 55.9425C54.8062 56.6894 55.1194 58.3406 56.2938 58.4978C58.0163 58.773 58.9167 57.2398 57.7031 56.0604C56.9593 55.3135 56.7244 55.2742 55.824 55.9425Z"
                  fill="#37A0D1"
                />
                <path
                  d="M22.7446 53.8195C22.2357 54.7237 23.1361 55.6672 24.0756 55.274C24.8586 54.9988 24.8194 53.6229 24.0365 53.3084C23.1752 52.9939 23.1752 52.9939 22.7446 53.8195Z"
                  fill="#37A0D1"
                />
                <path
                  d="M77.6683 61.1319C77.3551 61.8788 77.7857 62.5078 78.6861 62.5078C79.4299 62.5078 79.8605 61.8395 79.5865 61.0139C79.3516 60.3456 77.9423 60.4242 77.6683 61.1319Z"
                  fill="#37A0D1"
                />
                <path
                  d="M17.0291 67.0288C16.4027 67.6185 16.0504 68.444 16.0504 69.191C16.0504 69.9379 16.4027 70.7635 17.0291 71.3532C18.9473 73.3189 22.314 71.9429 22.314 69.191C22.314 67.5792 20.7872 66.046 19.1822 66.046C18.4384 66.046 17.6163 66.3998 17.0291 67.0288Z"
                  fill="#37A0D1"
                />
                <path
                  d="M28.969 77.0535V78.626H50.3043H71.6395V77.0535V75.4809H50.3043H28.969V77.0535Z"
                  fill="#37A0D1"
                />
                <path
                  d="M28.969 82.3607C28.969 84.7195 29.7911 86.2134 31.4744 87.039C32.6488 87.5893 34.9194 87.668 50.5783 87.668C67.4508 87.668 68.3512 87.6287 69.4473 86.921C71.0132 85.8596 71.6004 84.6802 71.6395 82.4393V80.5916H50.3043H28.969V82.3607Z"
                  fill="#37A0D1"
                />
                <path
                  d="M18.5167 82.0071C18.3601 82.4396 18.5558 82.872 18.9865 83.2258C19.6128 83.6583 19.8086 83.6583 20.2783 83.1865C20.5915 82.872 20.7481 82.3216 20.6307 82.0071C20.3175 81.1816 18.8299 81.1816 18.5167 82.0071Z"
                  fill="#37A0D1"
                />
              </svg>
            </div>
            <p>Maxsus idishlarga qadoqlanadi</p>
            <div className="line">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="148"
                height="44"
                viewBox="0 0 148 44"
                fill="none"
              >
                <path
                  d="M1 4.87011C55 -3.9994 100.5 4.8695 147 43.0009"
                  stroke="#D9D9D9"
                  stroke-width="2"
                  stroke-miterlimit="16"
                  stroke-linejoin="round"
                  stroke-dasharray="7 7"
                />
              </svg>
            </div>
          </div>
          <div className="water_item">
            <div className="item_box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="96"
                height="86"
                viewBox="0 0 96 86"
                fill="none"
              >
                <path
                  d="M0 0.150647C0 0.21901 0.0682788 0.246355 0.136558 0.205337C0.204836 0.16432 0.273115 0.0959575 0.273115 0.05494C0.273115 0.027595 0.218492 0.000249997 0.136558 0.000249997C0.0682788 0.000249997 0 0.0686125 0 0.150647Z"
                  fill="#37A0D1"
                />
                <path
                  d="M42.9619 8.20638C40.0345 8.53059 39.5909 8.64848 39.4431 9.09059C39.3248 9.35585 40.5963 12.598 42.4001 16.6653C44.1151 20.5559 46.8651 26.8043 48.4915 30.4885C50.1178 34.2022 51.3893 37.2674 51.3302 37.3264C51.271 37.4148 49.0829 37.5916 46.4807 37.739C43.9081 37.9159 40.9216 38.1222 39.8571 38.2106L37.935 38.3874L34.5345 33.4653C32.6716 30.7537 30.5721 27.7769 29.892 26.8337L28.6205 25.0948H25.6931C22.1743 25.0948 21.7603 25.3601 22.47 27.099C22.7361 27.6885 24.0667 30.8716 25.4565 34.1432L27.9995 40.0969L26.9646 41.1285C25.5452 42.5432 25.5748 43.9285 26.9942 45.3432C28.3544 46.699 28.0587 47.4359 26.0183 47.5537C24.7468 47.6422 24.6286 47.7011 24.6286 48.379V49.1159L28.6501 49.2043C32.1985 49.2632 32.7011 49.2043 32.8786 48.7916C33.1743 47.9959 32.4942 47.4948 31.0748 47.4948C29.9216 47.4948 29.7737 47.4359 29.9511 46.9643C30.0399 46.699 30.2173 46.1095 30.306 45.6969C30.4243 44.9895 30.3356 44.8716 29.3893 44.5474C27.4377 43.9285 27.4377 42.4548 29.3597 41.9537C29.8624 41.8064 30.2764 41.4822 30.3356 41.2464C30.3947 40.9811 29.2415 38.0043 27.7925 34.6148C24.2442 26.3622 24.392 27.099 26.2845 27.2169L27.8517 27.3053L29.3302 29.4274C30.1581 30.5769 32.1689 33.4653 33.7952 35.8232C35.4216 38.1811 36.8705 40.1559 37.0479 40.2443C37.2253 40.3032 38.556 40.2443 40.0049 40.0969C41.4834 39.979 44.7361 39.7727 47.2495 39.6843C52.7495 39.478 53.6366 39.3601 53.8732 38.8001C54.021 38.4169 52.8382 35.6464 44.8839 17.4611C41.6313 10.0043 41.6608 10.0632 43.7603 10.0632C44.3517 10.0632 45.0318 9.9748 45.2683 9.88638C45.564 9.79795 47.1017 11.5959 50.2361 15.7811L54.7899 21.8527H57.9538C60.4081 21.8527 61.2065 21.9411 61.5614 22.3243C62.0936 22.8548 62.1232 23.0022 61.7388 23.6211C61.5614 23.9159 60.7925 24.1222 59.6097 24.2106C57.3033 24.3874 57.1259 24.8295 58.6339 26.8632L59.728 28.3369H63.0694C65.9673 28.3369 66.4995 28.4253 67.1796 28.9559C67.5936 29.2801 67.9485 29.8106 67.9485 30.1053C67.9485 31.0485 66.5587 31.8737 64.9323 31.8737C63.3947 31.8737 62.8329 32.3748 63.513 33.2001C63.9861 33.7895 66.7952 33.7895 67.9189 33.2295C69.6339 32.3453 70.2253 30.1643 69.2791 28.3369C68.5399 26.9222 67.4753 26.5685 63.9861 26.5685C62.2415 26.5685 60.7925 26.4506 60.7038 26.2737C60.5856 26.0969 60.8517 25.979 61.2952 25.979C61.7683 25.979 62.4189 25.6253 62.9511 25.1243C64.1635 23.9159 64.1635 22.1474 62.9511 20.939C62.0936 20.1137 62.0049 20.0843 59.0183 20.0843H55.9431L51.4189 14.0422L46.8947 8.00006L45.3571 8.02953C44.5291 8.05901 43.4646 8.14743 42.9619 8.20638Z"
                  fill="#13BBEA"
                />
                <path
                  d="M12.6231 29.3981C12.357 29.7223 12.3274 29.9875 12.564 30.3412C12.8301 30.7833 13.4511 30.8423 16.9403 30.8423C20.4296 30.8423 21.0505 30.7833 21.3167 30.3412C21.5532 29.9875 21.5236 29.7223 21.2575 29.3981C20.9322 29.0149 20.1634 28.9265 16.9403 28.9265C13.7172 28.9265 12.9484 29.0149 12.6231 29.3981Z"
                  fill="#13BBEA"
                />
                <path
                  d="M65.7602 35.6171C65.5828 36.0592 66.6473 37.9455 67.4753 38.6234C67.6527 38.7708 71.6151 38.9476 76.5237 39.0065C84.5371 39.1244 85.3946 39.1834 87.1688 39.7729C89.6231 40.5687 91.8409 42.0129 92.0774 42.956C92.4323 44.3708 90.1258 45.9623 86.4296 46.9055C84.3893 47.436 83.1473 47.495 75.9027 47.495H67.7118L65.4645 50.5013C64.2226 52.1518 63.2172 53.655 63.2172 53.8613C63.2172 54.4508 64.2226 54.8634 65.6715 54.8634C67.8301 54.8634 68.6581 56.3371 67.1796 57.4865C66.4995 58.0171 65.9672 58.1055 63.0694 58.1055H59.728L58.6635 59.5497C58.0721 60.3455 57.5989 61.2002 57.5989 61.436C57.5989 62.1139 58.5452 62.5266 60.0532 62.5266C61.4726 62.5266 62.1527 63.0276 61.857 63.8234C61.6204 64.4423 60.9699 64.5897 57.5989 64.6781L54.7898 64.7371L50.3247 70.6318C47.5452 74.2866 45.6823 76.5266 45.3866 76.4971C45.0909 76.4971 44.2333 76.4676 43.4054 76.4381C42.607 76.4087 41.9269 76.2318 41.9269 76.0844C41.9269 75.9076 42.607 74.1981 43.435 72.2823C44.9726 68.716 45.0909 67.8318 43.9968 67.8318C43.3462 67.8318 42.814 68.7455 40.6258 73.7855C39.8866 75.495 39.3247 77.116 39.443 77.3518C39.65 77.9413 40.3005 78.0887 43.8489 78.3244L46.8355 78.5308L51.3893 72.4297L55.9726 66.3581H59.0183C62.0049 66.3581 62.0936 66.3287 62.9511 65.5034C64.1635 64.295 64.1635 62.5266 62.9511 61.3181C62.4188 60.8171 61.7683 60.4634 61.2952 60.4634C60.8516 60.4634 60.5855 60.3455 60.7038 60.1687C60.7925 59.9918 62.2414 59.8739 63.986 59.8739C67.357 59.8739 68.3919 59.5497 69.2495 58.2823C70.3731 56.5434 69.4565 53.7434 67.5344 53.095C66.943 52.9181 66.4699 52.6823 66.4699 52.5939C66.4699 52.5055 66.943 51.7981 67.5344 51.0023L68.5989 49.5581H76.1097C84.5371 49.5581 86.3704 49.2929 89.978 47.6718C95.6554 45.0781 95.685 41.6887 90.0371 38.9476C86.2522 37.1202 84.0936 36.8255 75.8436 36.9434L68.8059 37.0318L68.0075 36.0592C67.15 35.0276 66.0559 34.8213 65.7602 35.6171Z"
                  fill="#13BBEA"
                />
                <path
                  d="M2.12585 38.7706C1.74144 39.7432 2.24413 40.1559 3.5452 40.0674C4.66886 39.979 4.81671 39.8906 4.81671 39.2422C4.81671 38.5938 4.66886 38.5053 3.5452 38.4169C2.62854 38.358 2.24413 38.4464 2.12585 38.7706Z"
                  fill="#13BBEA"
                />
                <path
                  d="M6.91615 38.8296C6.4726 39.9496 7.21185 40.1265 12.0613 40.1265C15.8167 40.1265 16.7925 40.038 17.0882 39.6844C17.2952 39.4486 17.3839 39.0359 17.2656 38.8001C17.1473 38.417 16.2898 38.358 12.0909 38.358C7.74411 38.358 7.064 38.417 6.91615 38.8296Z"
                  fill="#13BBEA"
                />
                <path
                  d="M36.8409 46.4341C36.6043 46.6404 34.4457 49.7057 32.021 53.213L27.6151 59.5794H26.1957C25.3678 59.5794 24.7764 59.432 24.7764 59.2552C24.7764 59.0783 25.4565 57.3394 26.2844 55.3941C27.0828 53.4488 27.7333 51.6215 27.6742 51.3562C27.6151 51.0909 27.2898 50.8846 26.8462 50.8846C26.1957 50.8846 25.9296 51.3562 24.0962 55.6594C22.943 58.312 22.1151 60.6109 22.2038 60.8762C22.3516 61.2594 22.943 61.3478 25.486 61.3478C29.1527 61.3478 28.236 62.173 33.943 53.8615L37.935 48.0552L39.1178 48.2025C39.7683 48.2909 42.7548 48.5267 45.771 48.7036C48.7871 48.8804 51.3005 49.0573 51.3301 49.1162C51.3893 49.1752 50.029 52.4173 48.2844 56.3373C44.0264 66.0046 44.1446 65.6804 44.5882 66.2109C45.2979 67.0657 45.8005 66.653 46.8651 64.3541C49.8812 57.8404 54.021 48.0257 53.8731 47.672C53.6957 47.2004 52.986 47.1415 43.5532 46.5815C40.3005 46.4046 37.5505 46.1983 37.4323 46.1394C37.3436 46.0804 37.0479 46.1983 36.8409 46.4341Z"
                  fill="#13BBEA"
                />
                <path
                  d="M13.6582 47.9371C13.5399 48.1729 13.5399 48.5855 13.6582 48.8213C13.806 49.2045 14.4861 49.2634 18.1824 49.2045L22.5587 49.1161V48.3792V47.6424L18.1824 47.554C14.4861 47.495 13.806 47.554 13.6582 47.9371Z"
                  fill="#13BBEA"
                />
                <path
                  d="M8.01026 56.8381C7.80327 56.897 7.62585 57.2802 7.62585 57.6928C7.62585 58.636 8.15811 58.7244 13.2146 58.636C16.7925 58.5476 17.5022 58.4591 17.7683 58.0465C18.0049 57.6928 17.9753 57.4276 17.7092 57.1033C17.3839 56.7202 16.5855 56.6318 12.8302 56.6612C10.3759 56.6612 8.18768 56.7497 8.01026 56.8381Z"
                  fill="#13BBEA"
                />
              </svg>
            </div>
            <p>Vital zavodlariga yetkaziladi</p>
            <div className="line">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="148"
                height="44"
                viewBox="0 0 148 44"
                fill="none"
              >
                <path
                  d="M1 4.87011C55 -3.9994 100.5 4.8695 147 43.0009"
                  stroke="#D9D9D9"
                  stroke-width="2"
                  stroke-miterlimit="16"
                  stroke-linejoin="round"
                  stroke-dasharray="7 7"
                />
              </svg>
            </div>
          </div>
          <div className="water_item">
            <div className="item_box">
              <img src={Change} alt="" />
            </div>
            <p>Labatoriya tekshiruvidan o'tkaziladi</p>
            <div className="line">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="148"
                height="44"
                viewBox="0 0 148 44"
                fill="none"
              >
                <path
                  d="M1 4.87011C55 -3.9994 100.5 4.8695 147 43.0009"
                  stroke="#D9D9D9"
                  stroke-width="2"
                  stroke-miterlimit="16"
                  stroke-linejoin="round"
                  stroke-dasharray="7 7"
                />
              </svg>
            </div>
          </div>
          <div className="water_item">
            <div className="item_box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="87"
                height="78"
                viewBox="0 0 87 78"
                fill="none"
              >
                <g clip-path="url(#clip0_36_114)">
                  <path
                    d="M0 0.136532C0 0.198535 0.0618777 0.223336 0.123755 0.186134C0.185633 0.148932 0.247511 0.086929 0.247511 0.0497271C0.247511 0.0249258 0.198009 0.000124544 0.123755 0.000124544C0.0618777 0.000124544 0 0.0621277 0 0.136532Z"
                    fill="#13BBEA"
                  />
                  <path
                    d="M18.6344 2.94455C17.895 3.32314 17.7747 3.80498 17.7747 6.81648C17.7747 9.87961 17.895 10.3959 18.7204 10.7745C19.0471 10.9293 21.5575 10.981 28.1775 10.981H37.1704L37.7034 10.5335L38.2365 10.0861V6.8509V3.61569L37.7034 3.16826L37.1704 2.72084H28.1259C21.1964 2.72084 18.9611 2.77247 18.6344 2.94455Z"
                    fill="#13BBEA"
                  />
                  <path
                    d="M20.6463 12.822C20.5775 12.8736 20.5259 13.9233 20.5259 15.1451V17.3478H19.6662C18.0843 17.3478 16.2272 17.8297 14.5249 18.6729C11.7394 20.0668 9.72759 22.4244 8.71309 25.5219C8.30042 26.7781 8.26603 27.1911 8.19725 30.4264C8.11127 34.4015 8.19725 34.7801 9.33211 35.5373L9.91673 35.9331H28.0572C45.9398 35.9331 46.1977 35.9331 46.748 35.5889C47.7453 34.9694 47.8656 34.4704 47.8656 30.7361C47.8656 26.8642 47.6249 25.5735 46.5416 23.4913C45.5615 21.6156 43.395 19.4989 41.5036 18.5869C39.9216 17.8297 37.9614 17.3478 36.4311 17.3478H35.4854V15.0247V12.7015H28.126C24.068 12.7015 20.6979 12.7532 20.6463 12.822Z"
                    fill="#13BBEA"
                  />
                  <path
                    d="M59.1969 23.6635C57.7353 25.2467 56.4629 27.5183 56.4629 28.5336C56.4801 29.9102 57.6837 31.4418 59.0765 31.8032C61.0883 32.3539 63.0141 31.0288 63.4268 28.8089C63.53 28.2754 63.4612 27.9657 62.9453 26.9332C62.6014 26.2448 61.9136 25.1435 61.3978 24.4895C60.3317 23.0784 59.8847 22.9236 59.1969 23.6635Z"
                    fill="#13BBEA"
                  />
                  <path
                    d="M66.0234 33.9028C64.8885 35.2278 63.6505 37.138 63.3066 38.1189C62.7908 39.616 63.1862 40.9583 64.5274 42.1801C66.2985 43.7805 69.17 43.2986 70.4768 41.1992C71.1474 40.0978 71.1818 38.6695 70.58 37.4821C70.0813 36.5357 68.7917 34.6944 68.018 33.8167C67.2442 32.9735 66.7971 32.9907 66.0234 33.9028Z"
                    fill="#13BBEA"
                  />
                  <path
                    d="M9.53847 37.9637C8.30044 38.6349 8.31764 38.5144 8.31764 47.5145C8.31764 56.4113 8.31764 56.4457 9.38372 57.0997C9.95114 57.4438 10.1919 57.4438 28.1432 57.4438C44.6846 57.4438 46.3869 57.4266 46.834 57.1685C47.8829 56.5318 47.8657 56.7383 47.8657 47.6005C47.8657 39.6674 47.8485 39.2716 47.5218 38.7381C46.834 37.5851 48.0376 37.654 28.1432 37.654C11.0172 37.654 10.0887 37.6712 9.53847 37.9637ZM39.0447 41.9561C40.0764 42.5756 40.128 42.8682 40.128 47.5489C40.128 51.1283 40.0764 51.8855 39.8529 52.3845C39.3027 53.5375 39.7325 53.5031 27.9025 53.4515L17.2245 53.3998L16.7259 52.8319L16.2272 52.2813V47.6177C16.2272 43.5393 16.2616 42.9198 16.5196 42.524C17.1214 41.6292 17.0526 41.6292 28.1776 41.612C38.1162 41.612 38.5117 41.6292 39.0447 41.9561Z"
                    fill="#13BBEA"
                  />
                  <path
                    d="M17.8608 43.5566C17.8092 43.6771 17.792 45.5528 17.8092 47.7211L17.8608 51.6791L28.1433 51.7307L38.4085 51.7651L38.3742 47.6007L38.3226 43.419L28.1261 43.3673C19.9757 43.3329 17.9124 43.3673 17.8608 43.5566ZM34.8836 47.05C35.0384 47.2049 35.1415 47.4974 35.1071 47.6867C35.004 48.4439 34.5397 48.4955 28.4356 48.4783C25.2717 48.4783 22.3658 48.4267 21.9875 48.3578C21.4029 48.2546 21.2997 48.1685 21.2481 47.7555C21.1278 46.7574 21.0074 46.7746 28.1089 46.7746C33.8691 46.7746 34.6257 46.8091 34.8836 47.05Z"
                    fill="#13BBEA"
                  />
                  <path
                    d="M54.3309 46.7747C54.0042 47.0672 53.6947 47.5146 53.6259 47.7728C53.5399 48.1686 56.1191 62.9851 57.5807 70.4881C58.0449 72.8973 58.4404 73.62 59.6269 74.1535C60.2631 74.4461 60.8305 74.4805 66.264 74.4805C72.9012 74.4805 73.1592 74.4288 74.0533 73.2587C74.6035 72.5359 74.6379 72.3638 75.8072 65.7901C76.3402 62.8475 77.2687 57.6677 77.8877 54.2776C79.1258 47.4802 79.1258 47.549 78.0941 46.6886L77.5782 46.2584H66.264H54.9327L54.3309 46.7747ZM77.1484 48.5816C77.1312 48.8569 76.942 50.0443 76.7357 51.1973L76.3574 53.3139H66.2297C60.6757 53.3139 56.1191 53.2623 56.1191 53.2107C56.1191 53.159 55.93 52.0233 55.6893 50.6982C55.4485 49.3904 55.2938 48.2374 55.3454 48.1341C55.4141 48.0309 59.5409 47.9965 66.3156 48.0137L77.1827 48.0653L77.1484 48.5816Z"
                    fill="#13BBEA"
                  />
                  <path
                    d="M9.52119 59.4747C9.1429 59.6812 8.76462 60.077 8.52389 60.5588C8.12841 61.2988 8.12841 61.3848 8.17999 66.0483C8.24877 71.4174 8.26597 71.4863 9.64155 72.949C10.1574 73.5169 10.7248 73.8955 11.3438 74.1364C12.2724 74.4805 12.6162 74.4805 27.9884 74.4805C45.9569 74.4805 44.8737 74.5666 46.404 73.0522C47.7968 71.6411 47.8656 71.3314 47.8656 65.7042C47.8656 61.0406 47.8656 60.9202 47.4701 60.3523C46.6275 59.0789 47.9515 59.1649 28.0056 59.1649C11.0343 59.1649 10.0886 59.1821 9.52119 59.4747Z"
                    fill="#13BBEA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_36_114">
                    <rect width="87" height="78" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p>Vital suvlariga qo‘shiladi</p>
          </div>
        </div>
        <div className="video_container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yvP2c-y4hFI?si=HVc_dTkvb0vpcrIH"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
