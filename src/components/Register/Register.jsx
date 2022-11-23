import React, { useState, useContext, useRef } from "react";
import context from "../../context";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import "./Register.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  const { values } = useContext(context.context);
  const {
    username,
    password,
    registerClick,
    regions,
    contact,
    fullname,
    region,
    gender,
    setUsername,
    setPassword,
    setRegisterClick,
    setContact,
    setFullname,
    setRegion,
    setGender,
  } = values;
  const [showPassword, setShowPassword] = useState(false);
  const checker = () => {
    if (!username || !password || !fullname || !region || !contact || !gender) {
      textError.current.style.display = "block";
      return;
    } else {
      textError.current.style.display = "none";
      setRegisterClick(registerClick + 1);
    }
    setTimeout(() => {
      localStorage.getItem("token")
        ? toast.success("Siz hisobga kirdingiz")
        : toast.error("Username yoki parol noto'g'ri!");
      setUsername("");
      setPassword("");
      setContact("");
      setFullname("");
      setGender("");
      setRegion("");
    }, 1000);
  };
  const textError = useRef();
  const nevRef = useRef();
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="login__inner">
            <div className="login__card">
              <h2 className="login__heading">Ro'yhatdan o'tish</h2>
              <form
                className="login__form d-flex flex-column align-items-center gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  className="login__input"
                  placeholder="Fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
                <input
                  type="text"
                  className="login__input"
                  placeholder="Ex: 998 XX XXX XX XX"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
                <input
                  type="text"
                  className="login__input"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <select
                  className="region-select"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                  <option selected disabled hidden>
                    Viloyat
                  </option>
                  {regions.map((region) => {
                    return (
                      <option value={region.region_id}>{region.region}</option>
                    );
                  })}
                </select>
                <div className="password__box">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="login__input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="pasword__show"
                    type="button"
                    onClick={(e) => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </button>
                </div>
                <span
                  className="text-error text-danger position-absolute"
                  style={{ display: "none" }}
                  ref={textError}
                >
                  Barcha maydonni tuldiring
                </span>
                <div className="radios-wrapper d-flex align-self-start gap-4">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      value="male"
                      onChange={(e) => setGender(e.target.value)}
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Erkak
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      value="female"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Ayol
                    </label>
                  </div>
                </div>
                <div className="login__btns">
                  <button
                    className={
                      localStorage.getItem("token")
                        ? "login__btn login__send w-50 disabled"
                        : "login__btn login__send w-50"
                    }
                    onClick={(e) => checker()}
                    disabled={localStorage.getItem("token") ? true : false}
                  >
                    Jo'natish
                  </button>
                  <NavLink
                    ref={nevRef}
                    className="login__link"
                    to={localStorage.getItem("token") ? "/home" : "/register"}
                  >
                    <button
                      className={
                        localStorage.getItem("token")
                          ? "login__btn"
                          : "login__btn disabled"
                      }
                      type="submit"
                      disabled={localStorage.getItem("token") ? false : true}
                    >
                      Ro'yhatdan o'tish
                    </button>
                  </NavLink>
                </div>
              </form>
              <p className="register__link">
                Hisobingiz bormi?{" "}
                <NavLink className="d-inline-block text-decoration-none" to="/">
                  Kirish
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Register;
