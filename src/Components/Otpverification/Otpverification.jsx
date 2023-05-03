import { Link } from "react-router-dom";
import "./Otpverification.css";
import React, { useState } from "react";

const Otpverification = () => {
  const [divClass1, setDivClass1] = useState("otpVerification__otp__div");
  const [divClass2, setDivClass2] = useState("otpVerification__otp__div");
  const [divClass3, setDivClass3] = useState("otpVerification__otp__div");
  const [divClass4, setDivClass4] = useState("otpVerification__otp__div");
  const [divClass5, setDivClass5] = useState("otpVerification__otp__div");
  const [divClass6, setDivClass6] = useState("otpVerification__otp__div");
  const [d1, setD1] = useState();
  const [d2, setD2] = useState();
  const [d3, setD3] = useState();
  const [d4, setD4] = useState();
  const [d5, setD5] = useState();
  const [d6, setD6] = useState();
  function handleOnchange(e) {
    const num = e.target.value;
    if (num.length === 6) {
      setD1(num[0]);
      setD2(num[1]);
      setD3(num[2]);
      setD4(num[3]);
      setD5(num[4]);
      setD6(num[5]);
      setDivClass1("otpVerification__otp__div");
    }
  }
  function handlOnkeyDown(e) {
    const num = e.key;

    if (num === "Backspace") {
      if (d6) {
        setD6("");
        setDivClass6("otpVerification__otp__div--active");
      } else if (d5) {
        setD5("");
        setDivClass6("otpVerification__otp__div");
        setDivClass5("otpVerification__otp__div--active");
      } else if (d4) {
        setD4("");
        setDivClass5("otpVerification__otp__div");
        setDivClass4("otpVerification__otp__div--active");
      } else if (d3) {
        setD3("");
        setDivClass4("otpVerification__otp__div");
        setDivClass3("otpVerification__otp__div--active");
      } else if (d2) {
        setD2("");
        setDivClass3("otpVerification__otp__div");
        setDivClass2("otpVerification__otp__div--active");
      } else if (d1) {
        setD1("");
        setDivClass2("otpVerification__otp__div");
        setDivClass1("otpVerification__otp__div--active");
      }
    } else if (
      num === "1" ||
      num === "2" ||
      num === "3" ||
      num === "4" ||
      num === "5" ||
      num === "6" ||
      num === "7" ||
      num === "8" ||
      num === "9" ||
      num === "0"
    ) {
      if (!d1) {
        setD1(num);
        setDivClass1("otpVerification__otp__div");
        setDivClass2("otpVerification__otp__div--active");
      } else if (!d2) {
        setD2(num);
        setDivClass2("otpVerification__otp__div");
        setDivClass3("otpVerification__otp__div--active");
      } else if (!d3) {
        setD3(num);
        setDivClass3("otpVerification__otp__div");
        setDivClass4("otpVerification__otp__div--active");
      } else if (!d4) {
        setD4(num);
        setDivClass4("otpVerification__otp__div");
        setDivClass5("otpVerification__otp__div--active");
      } else if (!d5) {
        setD5(num);
        setDivClass5("otpVerification__otp__div");
        setDivClass6("otpVerification__otp__div--active");
      } else if (!d6) {
        setD6(num);
        setDivClass6("otpVerification__otp__div");
      }
    }
  }
  return (
    <div className="otpVerification">
      <h1>Phone Verification</h1>
      <p>
        Enter the OTP You received on {89206}-{6}XXXX
      </p>
      <div className="otpVerification__otp">
        <div className={divClass1}>
          <input
            type="text"
            value={d1}
            onClick={() => {
              setDivClass1("otpVerification__otp__div--active");
            }}
            onChange={handleOnchange}
            onKeyDown={handlOnkeyDown}
          />
        </div>
        <div className={divClass2}>
          <input type="text" value={d2} />
        </div>
        <div className={divClass3}>
          <input type="text" value={d3} />
        </div>
        <div className={divClass4}>
          <input type="text" value={d4} />
        </div>
        <div className={divClass5}>
          <input type="text" value={d5} />
        </div>
        <div className={divClass6}>
          <input type="text" value={d6} />
        </div>
      </div>
      <div className="otpVerification__link">
        <Link>
          <small>Change Number</small>
        </Link>
        <Link>
          <small>Re-Send OTP</small>
        </Link>
      </div>
      <input
        type="button"
        value="Verify Phone Number"
        className="otpVerification--btn btn"
      />
    </div>
  );
};

export default Otpverification;
