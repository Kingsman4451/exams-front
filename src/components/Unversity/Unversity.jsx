import React, { useContext } from "react";
import context from "../../context";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import "./Unversity.css";

const Unversity = () => {
  const navigate = useNavigate();
  const { values } = useContext(context.context);
  const {
    unversities,
    unversityId,
    facultiyId,
    setFacultiyId,
    unversity,
    facultiy,
    registerClick,
    setFaculty,
    setUnversityId,
    setRegisterClick,
    faculties,
    setFaculties,
    testClick,
    setTestClick,
  } = values;
  let func = (e) => {
    setUnversityId(e.target.value);
    localStorage.setItem("unvesityId", e.target.value);
  };
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
              Blok testlar hush kelibsiz
            </h2>
            <ul className="exam__procces list-unstyled p-0 d-flex justify-content-between align-items-center">
              <li className="exap__procces-item active-link">1</li>
              <li className="exap__procces-item active-link">2</li>
              <li className="exap__procces-item">3</li>
            </ul>
          </div>
          <div className="exam__bottom position-relative">
            <div className="unversity">
              <form className="unversity__form d-flex align-items-end justify-content-start gap-5 mt-5">
                <NavLink to="/exam/tests">
                  <button
                    className={
                      facultiyId && unversityId
                        ? "btn__position"
                        : "btn__position disabled"
                    }
                    type="submit"
                    disabled={facultiyId && unversityId ? false : true}
                    onClick={(e) => {
                      setTimeout(() => {
                        setRegisterClick(registerClick + 1);
                      }, 500);
                    }}
                  >
                    Imtihonga o'tish
                  </button>
                </NavLink>
                <div>
                  <label className="subjects__label m-0" htmlFor="main-subject">
                    Unversitet tanlash
                    <select
                      id="main-subject"
                      className="subjects__select unversity__select form-select mt-3"
                      onChange={(e) => func(e)}
                    >
                      <option disabled hidden selected>
                        Unversitet
                      </option>
                      {unversities?.map((unversity) => {
                        return (
                          <option
                            value={unversity.unversity_id}
                            key={unversity.unversity_id}
                          >
                            {unversity.unversity}
                          </option>
                        );
                      })}
                    </select>
                  </label>
                  <div className="unversity__faculties">
                    <label
                      className="subjects__label m-0"
                      htmlFor="main-subject"
                    >
                      Yo'nalish tanlash
                    </label>
                    <div className="radio__btns d-flex flex-wrap gap-2 mt-3">
                      {faculties.map((fac) => {
                        return (
                          <>
                            <input
                              type="radio"
                              class="btn-check"
                              name="options"
                              id={`option${fac.faculty_id}`}
                              autocomplete="off"
                              value={fac.faculty_id}
                              onChange={(e) => {
                                setFacultiyId(e.target.value);
                                setTestClick(testClick + 1);
                                localStorage.setItem(
                                  "facultyId",
                                  e.target.value
                                );
                              }}
                            />
                            <label
                              class="btn btn-secondary"
                              htmlFor={`option${fac.faculty_id}`}
                              onClick={(e) => setFaculty(fac)}
                            >
                              {fac.faculty}
                            </label>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {facultiyId || unversityId ? (
                  <div className="faculty-info radio__btns">
                    <p className="unversity__name">{unversity.unversity}</p>
                    <p className="unversity__name text-secondary">
                      {facultiy.faculty}
                    </p>
                    <div className="grand__row mt-3">
                      <div className="d-flex justify-content-between mb-2">
                        <p className="grand__text">Grand</p>
                        <p className="grand__text text-border ps-3 ms-3">
                          {facultiy.grands}
                        </p>
                        <p className="grand__text text-border ps-3">
                          {facultiy.grand_mark}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="grand__text">Sharnoma</p>
                        <p className="grand__text text-border ps-3">
                          {facultiy.contracts}
                        </p>
                        <p className="grand__text text-border ps-3">
                          {facultiy.contract_mark}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unversity;
