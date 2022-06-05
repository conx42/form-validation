import React, { useState } from "react";
import "./formInput.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import PasswordIcon from "@mui/icons-material/Password";

const FormInput = (props) => {
  /**
   * My Modification --Starts
   */
  const [showPassword, setShowPassword] = useState(false);
  const toogle = () => {
    if (showPassword) {
      // document.getElementById("password").type = "password"; <-- this code will also work
      document.getElementById("password").setAttribute("type", "password");
      // document.getElementById("i-eye").style.display = "none";
      setShowPassword(false);
    } else {
      // document.getElementById("password").type = "text"; <-- this code will also work
      document.getElementById("password").setAttribute("type", "text");
      // document.getElementById("i-eye").style.display = "none";
      setShowPassword(true);
    }
  };
  /**
   * My Modification --Ends
   */
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, HandleOnChange, id, icon, ...inputProps } =
    props;
  // console.log(icon);
  const handleFocused = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <div className="lebu">
        <label>{label}</label>
        {icon === true && showPassword === true ? (
          <i id="i-eye" onClick={toogle}>
            <RemoveRedEyeOutlinedIcon htmlColor="#2e81f4" />
          </i>
        ) : null}
        {icon === true && showPassword === false ? (
          <i id="i-eye" onClick={toogle}>
            <VisibilityOffOutlinedIcon />
          </i>
        ) : null}
      </div>
      {icon === false ? (
        <>
          <input
            {...inputProps}
            onChange={HandleOnChange}
            onBlur={handleFocused}
            onFocus={() => {
              inputProps.name === "confirmPassword" && setFocused(true);
            }}
            focused={focused.toString()}
          />
        </>
      ) : (
        <>
          <input
            id="password"
            {...inputProps}
            onChange={HandleOnChange}
            onBlur={handleFocused}
            onFocus={() => {
              inputProps.name === "confirmPassword" && setFocused(true);
            }}
            focused={focused.toString()}
          />
        </>
      )}
      <span id="span-type">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
