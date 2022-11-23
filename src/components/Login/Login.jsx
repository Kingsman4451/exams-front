import React, { useState, useContext, useRef } from "react";
import context from "../../context";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import "./Login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const { values } = useContext(context.context);
  const {
    username,
    password,
    loginClick,
    setUsername,
    setPassword,
    setLoginClick,
  } = values;
  const [showPassword, setShowPassword] = useState(false);

  const checker = () => {
    if (!username || !password) {
      textError.current.style.display = "block";
      return;
    } else {
      textError.current.style.display = "none";
      setLoginClick(loginClick + 1);
    }
    setTimeout(() => {
      localStorage.getItem("token")
        ? toast.success("Siz hisobga kirdingiz")
        : toast.error("Username yoki parol noto'g'ri!");
      setUsername("");
      setPassword("");
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
              <h2 className="login__heading">Hisobga kirish</h2>
              <form
                className="login__form d-flex flex-column align-items-center gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  className="login__input"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
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
                  Username va passwordni kiriting
                </span>
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
                    to={localStorage.getItem("token") ? "/home" : "/"}
                  >
                    <button
                      className={
                        localStorage.getItem("token")
                          ? "login__btn"
                          : "login__btn disabled"
                      }
                      type="submit"
                      disabled={localStorage.getItem("token") ? false : true}
                      onClick={(e) => setLoginClick(loginClick + 1)}
                    >
                      Kirish
                    </button>
                  </NavLink>
                </div>
              </form>
              <p className="register__link">
                Hisobingiz yuqmi?{" "}
                <NavLink
                  className="d-inline-block text-decoration-none"
                  to="/register"
                >
                  Ro'yhatdan o'tish
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

export default Login;
