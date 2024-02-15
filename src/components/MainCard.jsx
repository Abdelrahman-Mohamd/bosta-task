import "./MainCard.css";
import { FaCheck } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { RiFolderReceivedFill } from "react-icons/ri";

const MainCard = () => {
  return (
    <div className="main-card-wrapper">
      <div className="main-card">
        <div className="upper-div">
          <div className="upper-sub-div">
            <h3>موعد التسليم خلال</h3>
            <h1>3 / 1 / 2020</h1>
          </div>
          <div className="upper-sub-div">
            <h3>اسم التاجر</h3>
            <h1>SOUQ.COM</h1>
          </div>
          <div className="upper-sub-div">
            <h3>آخر تحديث</h3>
            <h1>at 5:33pm 06/04/2020 الأثنين</h1>
          </div>
          <div className="upper-sub-div">
            <h3> رقم الشحنة 6741696</h3>
            <h1>تم تسليم الشحنة</h1>
          </div>
        </div>
        <div className="lower-div">
          <div className="path"></div>
          <div className="path-details">
            <div>
              <FaCheck className="path-icon text-[1.5vw] text-[white]" />
              <h1 className="path-heading">تم التسليم</h1>
            </div>
            <div>
              <FaCheck className="path-icon text-[1.5vw] text-[white]" />
              <h1 className="path-heading">الشحنة خرجت للتسليم</h1>
            </div>
            <div>
              <FaCheck className="path-icon text-[1.5vw] text-[white]" />
              <h1 className="path-heading">تم استلام الشحنة من التاجر</h1>
            </div>
            <div>
              <FaCheck className="path-icon text-[1.5vw] text-[white]" />
              <h1 className="path-heading">تم انشاء الشحنة</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
