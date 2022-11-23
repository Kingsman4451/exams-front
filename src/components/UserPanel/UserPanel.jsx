import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./UserPanel.css";
import context from "../../context";
import { BsFileText } from "react-icons/bs";
import { BsBoxArrowLeft, BsPen } from "react-icons/bs";
import { RiTrophyLine } from "react-icons/ri";

const UserPanel = () => {
  const { values } = useContext(context.context);
  const { user, loginClick, setLoginClick, registerClick, setRegistarClick } =
    values;
  return (
    <>
      <div className="user-panel">
        <div className="container">
          <div className="user-panel__inner row pt-5">
            <div className="user-panel__sidebar pt-5 col-3 gx-0">
              <div className="sidebar__links position-relative d-flex flex-column gap-4">
                <NavLink
                  to="/exam/subjects"
                  className="sidebar__link text-decoration-none text-dark d-flex align-items-center gap-2"
                >
                  <BsPen className="fs-3" />
                  <span>Imtihon topshirish</span>
                </NavLink>
                <NavLink
                  to="/exams"
                  className="sidebar__link text-decoration-none text-dark d-flex align-items-center gap-2"
                  onClick={(e) => {
                    setLoginClick(loginClick + 1);
                  }}
                >
                  <BsFileText className="fs-3" />
                  <span>Testlar</span>
                </NavLink>
                <NavLink
                  to="/home"
                  className="sidebar__link active text-decoration-none text-dark d-flex align-items-center gap-2"
                >
                  <RiTrophyLine className="fs-3" />
                  <span>Yutuqlarim</span>
                </NavLink>
                <NavLink
                  to="/"
                  className="sidebar__link logout text-decoration-none text-dark d-flex align-items-center gap-2"
                  onClick={(e) => {
                    localStorage.clear();
                  }}
                >
                  <BsBoxArrowLeft className="fs-3" />
                  <span>Chiqish</span>
                </NavLink>
              </div>
            </div>

            <div className="user-panel__body pt-5 col-9 gx-0">
              <h2 className="user-panel__body-title">Testlar</h2>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                {user.map((exam, id) => {
                  return (
                    <div className="accordion-item" key={exam.exam_id}>
                      <h2 className="accordion-header" id={`flush-headingOne`}>
                        <button
                          className="accordion-button w-100 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapse${exam.exam_id}`}
                          aria-expanded="false"
                          aria-controls={`flush-collapse${exam.exam_id}`}
                        >
                          <span>Test #{id + 1}</span>
                          <p className="date m-0">
                            {exam.created_at.split("T")[0]}
                          </p>
                          <p className="ball m-0">
                            {exam.mark.overAllMark}/189.0
                          </p>
                        </button>
                      </h2>
                      <div
                        id={`flush-collapse${exam.exam_id}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`flush-headingOne`}
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body d-flex justify-content-between">
                          <div className="result">
                            {exam.faculty[0].faculty}
                            <br />({exam.unversity[0].unversity})
                            <p>
                              {exam.result == "grand"
                                ? "Davlat grandi"
                                : exam.result == "contract"
                                ? "Shartnoma asosida"
                                : "Rad etildi"}
                            </p>
                          </div>
                          <div className="marks d-flex gap-5">
                            <p className="mark-1">
                              Blok#1
                              <br />
                              {exam.mark.subjects[0].trueAnswers} / 15
                            </p>
                            <p className="mark-1">
                              Blok#2
                              <br />
                              {exam.mark.subjects[1].trueAnswers} / 15
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPanel;
