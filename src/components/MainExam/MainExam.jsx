import React, { useContext, useState } from "react";
import context from "../../context";
import "./MainExam.css";
import Subjects from "../Subjects/Subjects";
import { NavLink } from "react-router-dom";

const MainExam = () => {
  const { values } = useContext(context.context);
  const {
    facultiy,
    tests,
    subject_1,
    answerClick,
    answer,
    testId,
    setTestId,
    resultClick,
    setResultClick,
    setAnswer,
    setAnswerClick,
    secondSubject,
    mainSubject,
    subject_2,
  } = values;
  let blok_1 = tests.filter((test) => {
    return test.subject_id == mainSubject;
  });

  let blok_2 = tests.filter((test) => {
    return test.subject_id == secondSubject;
  });
  const [btn, setBtn] = useState(false);
  return (
    <>
      <div className="tests">
        <div className="container">
          <div className="tests__inner position-relative pt-3">
            <div className="tests__subject">
              <p className="subject">{subject_1}</p>
              <ul className="tests__list list-unstyled">
                {blok_1?.map((test, id) => {
                  return (
                    <li className="test__item mb-4">
                      <p className="test__question mb-2">
                        #{id + 1} {test.test_question}
                      </p>
                      <div className="tests__variants d-flex flex-column gap-3">
                        {test.test_variants.map((variant) => {
                          return (
                            <>
                              <div className="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name={test.test_id}
                                  id={variant + id}
                                  value={variant}
                                  onChange={(e) => {
                                    setAnswer(e.target.value);
                                    setTestId(test.test_id);
                                    setTimeout(() => {
                                      setAnswerClick(answerClick + 1);
                                    }, 500);
                                  }}
                                />
                                <label
                                  class="form-check-label ms-2"
                                  for={variant + id}
                                >
                                  {variant}
                                </label>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="tests__subject mt-5">
              <p className="subject">{subject_2}</p>
              <ul className="tests__list list-unstyled">
                {blok_2?.map((test, id) => {
                  return (
                    <li className="test__item mb-4">
                      <p className="test__question mb-2">
                        #{id + 1} {test.test_question}
                      </p>
                      <div className="tests__variants d-flex flex-column gap-3">
                        {test.test_variants.map((variant) => {
                          return (
                            <>
                              <div className="">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name={test.test_id}
                                  id={variant + id}
                                  value={variant}
                                  onChange={(e) => {
                                    setAnswer(e.target.value);
                                    setTestId(test.test_id);
                                    setTimeout(() => {
                                      setAnswerClick(answerClick + 1);
                                    }, 500);
                                  }}
                                />
                                <label
                                  class="form-check-label ms-2"
                                  for={variant + id}
                                >
                                  {variant}
                                </label>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <button
              className="login__btn w-25"
              onClick={(e) => {
                setResultClick(resultClick + 1);
                setBtn(true);
                localStorage.removeItem("subject_1");
                localStorage.removeItem("subject_2");
                localStorage.removeItem("facultyId");
                localStorage.removeItem("unversityId");
                localStorage.removeItem("subjectFirst");
                localStorage.removeItem("subjectSecond");
              }}
            >
              Yakunlash
            </button>
            <NavLink to="/exam/result">
              <button
                className={
                  btn
                    ? "login__btn test__finish"
                    : "login__btn test__finish disabled"
                }
                disabled={btn ? false : true}
                onClick={(e) => {
                  setResultClick(resultClick + 1);
                }}
              >
                Natija
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainExam;
