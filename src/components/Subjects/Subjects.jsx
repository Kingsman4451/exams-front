import React, { useContext } from "react";
import context from "../../context";
import { HiOutlineArrowLeft } from "react-icons/hi";
import "./Subjects.css";
import { NavLink, useNavigate } from "react-router-dom";

const Subjects = () => {
  const navigate = useNavigate();
  const { values } = useContext(context.context);
  const {
    subjects,
    subjects2,
    mainSubject,
    secondSubject,
    loginClick,
    setSubject_1,
    setSubject_2,
    registerClick,
    setRegisterClick,
    setMainSubject,
    setSecondSubject,
    setLoginClick,
  } = values;
  return (
    <>
      <div className="exam">
        <div className="container">
          <a
            className="exam__link text-decoration-none text-dark d-flex align-items-center pt-5"
            onClick={(e) => navigate(-1)}
          >
            <HiOutlineArrowLeft className="fs-3" />
            <span className="exam__link--text">Orqaga</span>
          </a>
          <div className="exam__top">
            <h2 className="exam__heading text-center">
              Asosiy Imtihonga xushkelibsiz
            </h2>
            <ul className="exam__procces list-unstyled p-0 d-flex justify-content-between align-items-center">
              <li className="exap__procces-item active-link">1</li>
              <li className="exap__procces-item">2</li>
              <li className="exap__procces-item">3</li>
            </ul>
          </div>
          <div className="exam__bottom position-relative">
            <form className="subjects" onSubmit={(e) => e.preventDefault()}>
              <label className="subjects__label" htmlFor="main-subject">
                Birinchi fan
              </label>
              <select
                id="main-subject"
                className="subjects__select form-select"
                onChange={(e) => {
                  setMainSubject(e.target.value),
                    setSubject_1(
                      e.target[e.target.selectedIndex].getAttribute(
                        "data-subject"
                      )
                    );
                  setLoginClick(loginClick + 1),
                    localStorage.setItem("subject_1", e.target.value);
                  localStorage.setItem(
                    "subjectFirst",
                    e.target[e.target.selectedIndex].getAttribute(
                      "data-subject"
                    )
                  );
                }}
              >
                <option disabled hidden selected>
                  Blok 1
                </option>
                {subjects.map((subject) => {
                  return (
                    <option
                      value={subject.subject_id}
                      data-subject={subject.subject}
                      key={subject.subject_id}
                    >
                      {subject.subject}
                    </option>
                  );
                })}
              </select>

              <label className="subjects__label" htmlFor="main-subject">
                Ikkinchi fan
              </label>
              <select
                id="main-subject"
                className="subjects__select form-select"
                disabled={mainSubject ? false : true}
                onChange={(e) => {
                  setSubject_2(
                    e.target[e.target.selectedIndex].getAttribute(
                      "data-subject"
                    )
                  );
                  setSecondSubject(e.target.value);
                  localStorage.setItem("subject_2", e.target.value);
                  localStorage.setItem(
                    "subjectSecond",
                    e.target[e.target.selectedIndex].getAttribute(
                      "data-subject"
                    )
                  );
                }}
              >
                <option disabled hidden selected>
                  Blok 2
                </option>
                {subjects2.map((subject) => {
                  return (
                    <option
                      value={subject.subject_id}
                      data-subject={subject.subject}
                      key={subject.subject_id}
                    >
                      {subject.subject}
                    </option>
                  );
                })}
              </select>
            </form>
            <NavLink to="/exam/unversity">
              <button
                className={
                  mainSubject && secondSubject
                    ? "next__btn"
                    : "next__btn disabled"
                }
                type="submit"
                disabled={mainSubject && secondSubject ? false : true}
                onClick={(e) => {
                  setRegisterClick(registerClick + 1);
                }}
              >
                Keynigi
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subjects;
