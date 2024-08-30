import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/redux/selector.js";
import AppThemeColor from "../../AppThemeColors.js";
import darkImage from "../../assets/Images/SignIn/dark.svg";
import lightImage from "../../assets/Images/SignIn/light.svg";

const SignIn = () => {
  const selectedTheme = useSelector(selectTheme);

  const { bodyBgColor, primaryColor, secondaryColor, textColor, borderColor } =
    AppThemeColor[selectedTheme];

  return (
    <div
      className="h-screen w-screen grid grid-cols-2"
      style={{ background: bodyBgColor, color: textColor }}
    >
      <div className="flex flex-col justify-center items-center">
        <img
          alt="bgImage"
          src={selectedTheme === "dark" ? darkImage : lightImage}
          className="w-3/4"
        />
        <div className="border w-3/4 text-2xl">
          <p>Experience state-of-the-art digital solutions with VEDA..</p>
          <p>HIMS(Hospital Integrated Management Software)</p>
          <p>
            designed to meet the unique needs of doctors, clinics, and
            hospitals.
          </p>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default SignIn;

{
  /* <img alt="bgImage" src={selectedTheme === "dark" ? darkImage : lightImage} />; */
}
