import Otpverification from "../Components/Otpverification/Otpverification";
import "./Hoome.css";
import React, { useEffect, useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

const Home = () => {
  const [popupClass, setPopupClass] = useState("home__popup--hide");
  const [homeClass, setHomeClass] = useState("home");
  const [closeClass, setCloseClass] = useState("close--hide");
  return (
    <div className={homeClass}>
      <div
        className={closeClass}
        onClick={() => {
          setCloseClass("close--hide");
          setHomeClass("home");
          setPopupClass("home__popup--hide");
        }}
      >
        <AiFillCloseSquare />
      </div>
      <input
        type="button"
        value="Verify Phone Number"
        className="home__btn btn"
        onClick={() => {
          setPopupClass(
            popupClass === "home__popup--hide"
              ? "home__popup"
              : "home__popup--hide"
          );
          setHomeClass("home--inactive");
          setCloseClass("close");
        }}
      />
      <div className={popupClass}>
        <Otpverification />
      </div>
    </div>
  );
};

export default Home;
