import { useState } from "react";
import bostaLogo from "../assets/BostaLogo.png";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isArrowDown, setIsArrowDown] = useState(true);
  const [isTrackingDivOpen, setIsTrackingDivOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleArrow = () => {
    setIsArrowDown(!isArrowDown);
    setIsTrackingDivOpen(!isTrackingDivOpen);
  };

  return (
    <>
      <nav className="flex flex-row-reverse justify-between px-[3vw] py-[2rem] items-center border-b-2 md:hidden">
        <img src={bostaLogo} className="w-[7rem]" alt="bosta logo" />
        <div className="flex flex-row-reverse gap-10 items-center">
          <div
            className={`cursor-pointer flex flex-row items-center gap-2 hover:text-[#e30613] ${
              isArrowDown ? "" : "text-[#e30613]"
            }`}
            onClick={handleToggleArrow}
          >
            {isArrowDown ? (
              <IoIosArrowDown className="text-[1rem]" />
            ) : (
              <IoIosArrowBack className="text-[1rem]" />
            )}
            {isArrowDown ? (
              <a className="text-[1.1rem] font-[600]">تتبع شحنتك</a>
            ) : (
              <a
                className="text-[1.1rem] font-[600] text-[#e30613]"
                onClick={handleToggleArrow}
              >
                تتبع شحنتك
              </a>
            )}
          </div>
          <button className="focus:outline-none" onClick={handleToggleMenu}>
            {isOpen ? (
              <IoClose className="text-[1.5rem]" />
            ) : (
              <FaBars className="text-[1.5rem]" />
            )}
          </button>
        </div>
      </nav>
      {isTrackingDivOpen && (
        <div className="bg-white w-[22rem] py-8 px-7 ml-10 shadow-lg flex flex-col items-end rounded-md absolute top-[4rem]">
          <h3 className="text-[1.1rem] font-[350] mb-[1rem]">تتبع شحنتك</h3>
          <div className="flex items-center rounded-md px-0 py-0 border border-gray-200 border-1">
            <div className="bg-[#e30613] w-[3rem] h-[3rem] flex items-center justify-center rounded-l-md">
              <button onClick={handleToggleArrow}>
                <IoSearchOutline className="text-white text-[2rem]" />
              </button>
            </div>
            <input
              type="text"
              placeholder="رقم التتبع"
              className="focus:outline-none w-[15rem] font-[100] pl-40"
            />
          </div>
        </div>
      )}

      {/* fullscreen */}
      <nav className="md:flex md:flex-row-reverse md:justify-between  md:items-center md:py-[1.3rem] md:border-b-2 hidden">
        <div className="pr-[5rem] cursor-pointer grow-[1] flex justify-center">
          <img src={bostaLogo} alt="bosta logo" className="w-[7rem]" />
        </div>
        <div className="flex flex-row-reverse gap-[5rem] items-center grow-[2] justify-center">
          <a className="text-[1rem] font-[500] cursor-pointer">الرئيسية</a>

          <a className="text-[1rem] font-[500] cursor-pointer">الأسعار</a>

          <a className="text-[1rem] font-[500] cursor-pointer">كلم المبيعات</a>
        </div>
        <div className="flex flex-row-reverse gap-[1rem] items-center grow-[1] justify-center">
          <a
            className={`cursor-pointer flex flex-row items-center gap-2 hover:text-[#e30613] ${
              isArrowDown ? "" : "text-[#e30613]"
            }`}
            onClick={handleToggleArrow}
          >
            {isArrowDown ? (
              <IoIosArrowDown className="text-[1rem]" />
            ) : (
              <IoIosArrowBack className="text-[1rem]" />
            )}
            {isArrowDown ? (
              <a className="text-[1.1rem] font-[600]">تتبع شحنتك</a>
            ) : (
              <a
                className="text-[1.1rem] font-[600] text-[#e30613]"
                onClick={handleToggleArrow}
              >
                تتبع شحنتك
              </a>
            )}
          </a>

          <a className="text-[1rem] font-[500] cursor-pointer">تسجيل الدخول</a>

          <a className="text-[1rem] font-[500] cursor-pointer text-[#e30613]">
            ENG
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
