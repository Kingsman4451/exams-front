import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import context from "../../context";
import "./ResultPage.css";
import { HiOutlineArrowLeft } from "react-icons/hi";

const ResultPage = () => {
  const { values } = useContext(context.context);
  const { result, setLoginClick, loginClick } = values;

  const navigate = useNavigate();
  return (
    <>
      <div className="result">
        <div className="container">
          <div className="result__inner">
            <a
              className="exam__link text-decoration-none text-dark d-flex align-items-center pt-5"
              onClick={(e) => {
                setLoginClick(loginClick + 1);
                setTimeout(() => {
                  navigate("/home");
                }, 200);
              }}
            >
              <HiOutlineArrowLeft className="fs-3" />
              <span className="exam__link--text">Orqaga</span>
            </a>
            <div className="result__top pt-5">
              <p className="result__text">Asosiy</p>
              <div className="result__progress mt-5">
                <div className="progres w-50 mb-4 d-flex align-items-center gap-5">
                  <p className="progress__subject text">
                    {result.exam?.mark.subjects[0].subject}
                  </p>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-label="Example with label"
                      style={{
                        width: `${result.exam?.mark.subjects[0].percent}%`,
                      }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {result.exam?.mark.subjects[0].percent}%
                    </div>
                  </div>
                  <p className="text">100%</p>
                  <div className="progres__info text">
                    {result.exam?.mark.subjects[0].trueAnswers}/15
                  </div>
                </div>
                <div className="progres w-50 d-flex align-items-center gap-5">
                  <p className="progress__subject text">
                    {result.exam?.mark.subjects[1].subject}
                  </p>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-label="Example with label"
                      style={{
                        width: `${result.exam.mark.subjects[1].percent}%`,
                      }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {result.exam?.mark.subjects[1].percent}%
                    </div>
                  </div>
                  <p className="text">100%</p>
                  <div className="progres__info text">
                    {result.exam?.mark.subjects[1].trueAnswers}/15
                  </div>
                </div>
              </div>
            </div>
            <div className="result__content">
              <p className="content__title">
                Natija (tavsiya etildi yoki etilmadi)
              </p>
              <p className="content__text">
                Ta'lim muassasi: {result.unversity.unversity}
              </p>
              <p className="content__text">
                Yo'nalish: {result.faculty.faculty}
              </p>
              <p className="content__text">
                Ta'lim turi:{" "}
                {result.exam.result == "grand"
                  ? "Davlat grandi"
                  : result.exam.result == "contract"
                  ? "Kontrakt asosida"
                  : "Tavsiya etilmaydi"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
