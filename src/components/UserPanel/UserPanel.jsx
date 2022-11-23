import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./UserPanel.css";
import context from "../../context";
import { BsFileText } from "react-icons/bs";
import { BsBoxArrowLeft, BsPen } from "react-icons/bs";
import { RiTrophyLine } from "react-icons/ri";
import Accordion from "react-bootstrap/Accordion";
import LastExams from "../LastExams/LastExams";

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
              <Accordion className="accordion_2">
                {user.map((exam, id) => {
                  return (
                    <Accordion.Item className="text" eventKey={exam.exam_id}>
                      <Accordion.Header className="accordion-btn text">
                        <span>Test #{id + 1}</span>
                        <p className="date m-0">
                          {exam.created_at.split("T")[0]}
                        </p>
                        <p className="ball m-0">
                          {exam.mark.overAllMark}/189.0
                        </p>
                      </Accordion.Header>
                      <Accordion.Body className="d-flex justify-content-between aligin-items-center">
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
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPanel;
