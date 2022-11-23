import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import context from "../../context";
import "./LastExams.css";
import { HiOutlineArrowLeft } from "react-icons/hi";

const LastExams = () => {
  const { values } = useContext(context.context);
  const { exams } = values;
  const navigate = useNavigate();

  return (
    <>
      <div className="exams">
        <div className="container">
          <div className="exams__inner">
            <a
              className="exam__link text-decoration-none text-dark d-flex align-items-center pt-5"
              onClick={(e) => navigate(-1)}
            >
              <HiOutlineArrowLeft className="fs-3" />
              <span className="exam__link--text">Orqaga</span>
            </a>
            <p className="exam__title mt-5">Songi imtihon g’olibi</p>
            <table className="table">
              <thead>
                <tr className="rows">
                  <th scope="col">ID</th>
                  <th className="column" scope="col">
                    Ismi
                  </th>
                  <th className="column" scope="col">
                    Yo'nalish
                  </th>
                  <th className="column" scope="col">
                    Sana
                  </th>
                  <th className="column" scope="col">
                    Ball
                  </th>
                  <th className="column" scope="col">
                    Vaqt
                  </th>
                </tr>
              </thead>
              <tbody>
                {exams.map((exam) => {
                  return (
                    <tr className="rows">
                      <th scope="row">{exam.user[0].user_id}</th>
                      <td className="column">{exam.user[0].username}</td>
                      <td className="column">{exam.faculty[0].faculty}</td>
                      <td className="column">
                        {exam.created_at.split("T")[0]}
                      </td>
                      <td className="column">{exam.mark.overAllMark}</td>
                      <td className="column">{exam.time}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastExams;
