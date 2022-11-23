import { useState, useEffect } from "react";
import context from "./context";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import { Api } from "../Api/Api";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/Private/PrivateRoute";
import UserPanel from "./components/UserPanel/UserPanel";
import Subjects from "./components/Subjects/Subjects";
import Unversity from "./components/Unversity/Unversity";
import MainExam from "./components/MainExam/MainExam";
import ResultPage from "./components/ResultPage/ResultPage";
import LastExams from "./components/LastExams/LastExams";

function App() {
  const cont = context.context;
  const {
    loginUser,
    getRegions,
    registerUser,
    getUser,
    getSubject1,
    getUnversities,
    getSubject2,
    getUnversity,
    postExam,
    getTests,
    postAnswer,
    getExam,
    getExams,
  } = Api;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginClick, setLoginClick] = useState("");
  const [registerClick, setRegisterClick] = useState("");
  const [answerClick, setAnswerClick] = useState("");
  const [testClick, setTestClick] = useState("");

  const [resultClick, setResultClick] = useState("");

  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [regions, setRegions] = useState([]);
  const [contact, setContact] = useState("");
  const [fullname, setFullname] = useState("");
  const [region, setRegion] = useState(0);
  const [gender, setGender] = useState("");
  const [user, setUser] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [subjects2, setSubjects2] = useState([]);
  const [unversities, setUnversities] = useState([]);
  const [tests, setTests] = useState([]);
  const [exams, setExams] = useState([]);

  const [unversity, setUnversity] = useState({});

  const [faculties, setFaculties] = useState([]);
  const [facultiy, setFaculty] = useState({});

  const [unversityId, setUnversityId] = useState("");
  const [facultiyId, setFacultiyId] = useState("");

  const [mainSubject, setMainSubject] = useState(
    localStorage.getItem("subject_1") || ""
  );
  const [secondSubject, setSecondSubject] = useState(
    localStorage.getItem("subject_2") || ""
  );

  const [subject_1, setSubject_1] = useState(
    localStorage.getItem("subjectFirst") || ""
  );
  const [subject_2, setSubject_2] = useState(
    localStorage.getItem("subjectSecond") || ""
  );

  const [answer, setAnswer] = useState("");
  const [testId, setTestId] = useState("");

  const [result, setResult] = useState({});

  const [examId, setExamId] = useState(localStorage.getItem("examId") || "");

  useEffect(() => {
    if (localStorage.getItem("token")) return;
    loginUser(username, password).then((res) => {
      setToken(res.data.user.token);
      localStorage.setItem("token", res.data.user.token);
    });
  }, [loginClick]);

  useEffect(() => {
    if (localStorage.getItem("token")) return;
    registerUser(fullname, contact, username, password, region, gender).then(
      (res) => {
        console.log(res);
        setToken(res.data.user.token);
        localStorage.setItem("token", res.data.user.token);
      }
    );
  }, [registerClick]);

  useEffect(() => {
    getRegions().then((res) => {
      setRegions(res.data.data);
    });
  }, []);

  useEffect(() => {
    getUser(token).then((res) => {
      setUser(res.data.data.exams);
    });
  }, [loginClick, registerClick]);

  useEffect(() => {
    getSubject1().then((res) => {
      setSubjects(res.data.data);
    });
  }, []);

  useEffect(() => {
    getSubject2(mainSubject).then((res) => {
      setSubjects2(res.data.data);
    });
  }, [loginClick]);

  useEffect(() => {
    if (!mainSubject || !secondSubject) return;
    getUnversities(mainSubject, secondSubject).then((res) => {
      setUnversities(res.data.data);
    });
  }, [registerClick]);

  useEffect(() => {
    getTests(mainSubject, secondSubject, token).then((res) => {
      setTests(res.data.data);
    });
  }, [registerClick, testClick]);

  useEffect(() => {
    if (!unversityId) return;
    getUnversity(mainSubject, secondSubject, unversityId).then((res) => {
      setUnversity(res.data.data[0]);
      setFaculties(res.data.data[0].faculties);
    });
  }, [unversityId]);

  useEffect(() => {
    if (!mainSubject || !secondSubject || !unversityId || !facultiyId) return;
    postExam(mainSubject, secondSubject, unversityId, facultiyId, token).then(
      (res) => {
        console.log(res.data.data);
        setExamId(res.data.data.exam_id);
        localStorage.setItem("examId", res.data.data.exam_id);
      }
    );
  }, [registerClick]);

  useEffect(() => {
    if (!answer || !examId || !testId) return;
    postAnswer(answer, examId, testId, token).then((res) => {
      console.log(res.data.data);
    });
  }, [answerClick]);

  useEffect(() => {
    getExam(examId, token).then((res) => {
      setResult(res.data.data);
    });
  }, [resultClick]);

  useEffect(() => {
    getExams(token).then((res) => {
      setExams(res.data.data);
    });
  }, [loginClick, registerClick]);

  const values = {
    username,
    password,
    loginClick,
    registerClick,
    regions,
    contact,
    fullname,
    region,
    gender,
    user,
    subjects,
    subjects2,
    mainSubject,
    secondSubject,
    unversities,
    unversityId,
    faculties,
    unversity,
    facultiyId,
    facultiy,
    subject_1,
    subject_2,
    tests,
    answerClick,
    answer,
    testId,
    result,
    resultClick,
    testClick,
    exams,
    setTestClick,
    setResultClick,
    setTestId,
    setAnswer,
    setAnswerClick,
    setSubject_1,
    setSubject_2,
    setFaculty,
    setFacultiyId,
    setFaculties,
    setUsername,
    setPassword,
    setLoginClick,
    setRegisterClick,
    setContact,
    setFullname,
    setRegion,
    setGender,
    setMainSubject,
    setSecondSubject,
    setUnversityId,
  };
  return (
    <div>
      <cont.Provider value={{ values }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/home" element={<UserPanel />} />
              <Route path="/exam/subjects" element={<Subjects />} />
              <Route path="/exam/unversity" element={<Unversity />} />
              <Route path="/exam/tests" element={<MainExam />} />
              <Route path="/exam/result" element={<ResultPage />} />
              <Route path="/exams" element={<LastExams />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </cont.Provider>
    </div>
  );
}

export default App;
