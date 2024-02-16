import "./DetailsCard.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPackageDetails } from "../rtk/slices/package-slice";
import questionLogo from "../assets/Questions-amico.png";

const DetailsCard = () => {
  const state = useSelector((state) => state.package);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPackageDetails());
  }, [dispatch]);

  useEffect(() => {
    console.log(state.data.TransitEvents);
  }, [state]);

  if (!state.data || !state.data.TransitEvents) {
    return <div></div>;
  }

  const formatState = (state) => {
    return state
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");

    const amPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${hours}:${minutes} ${amPm}`;
  };

  return (
    <>
      <div className="details-card">
        <div className="table-container">
          <h1>تفاصيل الشحنة</h1>
          <div className="table">
            <div className="row">
              <div className="cell text-[0.9rem] font-[700] text-[#8f8f8f]">
                تفاصيل
              </div>
              <div className="cell text-[0.9rem] font-[700] text-[#8f8f8f]">
                الوقت
              </div>
              <div className="cell text-[0.9rem] font-[700] text-[#8f8f8f]">
                التاريخ
              </div>
              <div className="cell text-[0.9rem] font-[700] text-[#8f8f8f]">
                الفرع
              </div>
            </div>
            {state.data.TransitEvents.map((event, index) => (
              <div className="row" key={index + 2}>
                <div className="cell">
                  {formatState(event.state)}{" "}
                  {event.state === "CANCELLED" && (
                    <h5 className="text-[#ff0000] text-[0.7vw]">
                      تم الغاء الشحنة من التاجر
                    </h5>
                  )}
                  {event.state === "DELIVERED_TO_SENDER" && (
                    <h5 className="text-yellow-400 text-[0.7vw]">
                      العميل غير متواجد في العنوان
                    </h5>
                  )}
                </div>
                <div className="cell">{formatTime(event.timestamp)}</div>
                <div className="cell">
                  {event.timestamp && event.timestamp.slice(0, 10)}
                </div>
                <div className="cell">{event.hub}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="extra-details">
          <h1>عنوان التسليم</h1>
          <div className="address">
            <p>
              امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 33
            </p>
          </div>
          <div className="complain-card">
            <div className="left-section">
              <h1>هل يوجد مشكلة في شحنتك ؟</h1>
              <button>ابلاغ عن مشكلة</button>
            </div>
            <div className="right-section">
              <img src={questionLogo} alt="question mark" className="w-[5vw]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
