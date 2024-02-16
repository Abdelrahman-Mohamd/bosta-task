import "./Navbar.css";
import bostaLogo from "../assets/BostaLogo.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { fetchPackageDetails } from "../rtk/slices/package-slice";

const Navabr = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isSearchCardVisible, setIsSearchCardVisible] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isHamburgerNavbarVisible, setIsHamburgerNavbarVisible] =
    useState(false);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const toggleSearchCard = () => {
    setIsSearchCardVisible(!isSearchCardVisible);
    setIsHamburgerNavbarVisible(false);
    document.body.classList.remove("overflow-hidden");
  };

  const handleSearchButtonClick = () => {
    setIsSearchCardVisible(false);
    dispatch(fetchPackageDetails(trackingNumber));
  };

  const toggleHamburgerNavbar = () => {
    setIsHamburgerNavbarVisible(!isHamburgerNavbarVisible);
    setIsSearchCardVisible(false);
    if (isHamburgerNavbarVisible) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
  };
  return (
    <>
      <nav className="hidden md:flex">
        <div className="left-nav-section">
          <a href="#" className="nav-lang-selection">
            ENG
          </a>
          <a href="#">تسجيل الدخول</a>
          <a className="cursor-pointer flex md:hidden">
            <FaBars className="text-[1.5rem]" />
          </a>
          <a
            className="nav-tracking-package"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={toggleSearchCard}
          >
            {isHovering ? <IoIosArrowDown /> : <IoIosArrowBack />}
            <a href="#">تتبع شحنتك</a>
          </a>
        </div>
        <div className="middle-nav-section ">
          <a href="#">كلم المبيعات</a>
          <a href="#">الأسعار</a>
          <a href="#">الرئيسية</a>
        </div>
        <div className="nav-container">
          <img src={bostaLogo} alt="logo" className="nav-logo w-[6rem]" />
        </div>
      </nav>
      {/* small screens navbar */}
      <nav className="flex md:hidden py-[1.7rem] gap-[5.5rem]">
        <div className="left-nav-section">
          <a className="cursor-pointer " onClick={toggleHamburgerNavbar}>
            {isHamburgerNavbarVisible ? (
              <IoClose className="text-[1.5rem]" />
            ) : (
              <FaBars className="text-[1.5rem]" />
            )}
          </a>
          <a
            className="nav-tracking-package"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={toggleSearchCard}
          >
            {isHovering ? <IoIosArrowDown /> : <IoIosArrowBack />}
            <a href="#">تتبع شحنتك</a>
          </a>
        </div>
        <div className="nav-container">
          <img src={bostaLogo} alt="logo" className="nav-logo w-[6rem]" />
        </div>
      </nav>
      {isSearchCardVisible && (
        <div className="search-card">
          <div className="search-container">
            <h1>تتبع شحنتك</h1>
            <div className="search-bar">
              <button
                className="search-button"
                onClick={handleSearchButtonClick}
              >
                <IoSearchOutline className="text-white text-[2rem]" />
              </button>
              <input
                type="text"
                className="search-input"
                placeholder="رقم التتبع"
                onChange={(e) => {
                  setTrackingNumber(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      )}
      {isHamburgerNavbarVisible && (
        <div className="hamburger-navbar flex md:hidden">
          <div className="middle-nav-section">
            <a href="#">الرئيسية</a>
            <a href="#">الأسعار</a>
            <a href="#">كلم المبيعات</a>
            <a href="#">تسجيل الدخول</a>
            <a href="#" className="nav-lang-selection">
              ENG
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navabr;
