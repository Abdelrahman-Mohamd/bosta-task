import "./DetailsCard.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPackageDetails } from "../rtk/slices/package-slice";

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
      <div className="table-container">
        <h1>تفاصيل الشحنة</h1>
        <div className="table">
          <div className="row">
            <div className="cell">التفاصيل</div>
            <div className="cell">الوقت</div>
            <div className="cell">التاريخ</div>
            <div className="cell">الفرع</div>
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
    </>
  );
};

export default DetailsCard;
