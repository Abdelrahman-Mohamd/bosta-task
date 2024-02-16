import "./MainCard.css";
import { FaCheck } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { fetchPackageDetails } from "../rtk/slices/package-slice";
import { useEffect } from "react";
import { LuPackageCheck } from "react-icons/lu";
import { FaHandshake } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { RiFolderReceivedFill } from "react-icons/ri";

const MainCard = () => {
  const state = useSelector((state) => state.package);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPackageDetails());
  }, [dispatch]);

  useEffect(() => {
    console.log(state.data.provider);
  }, [state]);

  if (!state.data) {
    return <div>Loading...</div>;
  }

  const { data } = state;

  return (
    <div className="main-card-wrapper">
      <div className="main-card">
        <div className="upper-div">
          <div className="upper-sub-div">
            <h3>موعد التسليم خلال</h3>
            {data.PromisedDate && <h1>{data.PromisedDate.slice(0, 10)}</h1>}
          </div>
          <div className="upper-sub-div">
            <h3>اسم التاجر</h3>
            <h1>{data.provider}</h1>
          </div>
          <div className="upper-sub-div">
            <h3>آخر تحديث</h3>
            {data.CurrentStatus ? (
              <h1>
                {new Date(data.CurrentStatus.timestamp).toLocaleString("ar", {
                  weekday: "long",
                  hour: "numeric",
                  minute: "numeric",
                  month: "numeric",
                  day: "numeric",
                  year: "numeric",
                })}
              </h1>
            ) : (
              ""
            )}
          </div>
          <div className="upper-sub-div">
            <h3> رقم الشحنة {data.TrackingNumber}</h3>

            <h1
              className={
                data.CurrentStatus?.state &&
                data.CurrentStatus.state === "DELIVERED_TO_SENDER"
                  ? "text-yellow-400"
                  : data.CurrentStatus?.state &&
                    data.CurrentStatus.state === "DELIVERED"
                  ? "text-green-600"
                  : data.CurrentStatus?.state &&
                    data.CurrentStatus.state === "CANCELLED"
                  ? "text-[#ff0000]"
                  : ""
              }
            >
              {data.CurrentStatus?.state &&
              data.CurrentStatus.state === "DELIVERED_TO_SENDER"
                ? "لم يتم تسليم الشحنة"
                : data.CurrentStatus?.state &&
                  data.CurrentStatus.state === "DELIVERED"
                ? "تم تسليم الشحنة"
                : data.CurrentStatus?.state &&
                  data.CurrentStatus.state === "CANCELLED"
                ? "تم الغاء الشحنة"
                : data.CurrentStatus?.state || ""}
            </h1>
          </div>
        </div>
        <div className="lower-div">
          <div
            className={`path ${
              data.CurrentStatus?.state === "DELIVERED"
                ? "bg-[#00ba00]"
                : data.CurrentStatus?.state === "DELIVERED_TO_SENDER"
                ? "bg-yellow-400"
                : data.CurrentStatus?.state === "CANCELLED"
                ? "bg-[#ff0000]"
                : ""
            }`}
          >
            {data.CurrentStatus?.state === "DELIVERED" ? (
              <div className="path-icons">
                <FaCheck className="path-icon text-[1.5rem] text-white bg-[#204720]" />
                <FaCheck className="path-icon text-[1.5rem] text-white bg-[#00ba00]" />
                <FaCheck className="path-icon text-[1.5rem] text-white bg-[#00ba00]" />
                <FaCheck className="path-icon text-[1.5rem] text-white bg-[#00ba00]" />
              </div>
            ) : data.CurrentStatus?.state === "DELIVERED_TO_SENDER" ? (
              <div className="path-icons">
                <RiFolderReceivedFill className="path-icon text-[2.5vw] text-[#e9e9e9]" />
                <TbTruckDelivery className="path-icon text-[2.5vw] bg-yellow-400 text-[white]" />
                <FaCheck className="path-icon text-[1.5rem] text-[white] bg-yellow-400" />
                <FaCheck className="path-icon text-[1.5rem] text-[white] bg-yellow-400" />
              </div>
            ) : data.CurrentStatus?.state === "CANCELLED" ? (
              <div className="path-icons">
                <RiFolderReceivedFill className="path-icon text-[2.5vw] text-[#e9e9e9]" />
                <TbTruckDelivery className="path-icon text-[2.5vw] text-[white] bg-[#ff0000]" />
                <FaCheck className="path-icon text-[1.5rem] text-[white] bg-[#ff0000]" />
                <FaCheck className="path-icon text-[1.5rem] text-[white] bg-[#ff0000]" />
              </div>
            ) : (
              <div className="path-icons">
                <RiFolderReceivedFill className="path-icon text-[2.5vw] text-[#e9e9e9]" />
                <TbTruckDelivery className="path-icon text-[2.5vw] text-[#e9e9e9]" />
                <FaHandshake className="path-icon text-[2.5vw] text-[#e9e9e9]" />
                <LuPackageCheck className="path-icon text-[2.5vw] text-[#e9e9e9]" />
              </div>
            )}
          </div>

          <div className="path-details">
            <div>
              <h1 className="path-heading">تم التسليم</h1>
            </div>
            <div>
              <h1 className="path-heading">الشحنة خرجت للتسليم</h1>
              {data.CurrentStatus?.state && (
                <>
                  {data.CurrentStatus.state === "CANCELLED" && (
                    <h5 className="text-[#ff0000] text-[0.7rem]">
                      تم الغاء الشحنة من التاجر
                    </h5>
                  )}
                  {data.CurrentStatus.state === "DELIVERED_TO_SENDER" && (
                    <h5 className="text-yellow-400 text-[0.7rem]">
                      العميل غير متواجد في العنوان
                    </h5>
                  )}
                </>
              )}
            </div>
            <div>
              <h1 className="path-heading">تم استلام الشحنة من التاجر</h1>
            </div>
            <div>
              <h1 className="path-heading">تم انشاء الشحنة</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
