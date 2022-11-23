import axios from "axios";

const URL = "https://exam--back.herokuapp.com";

export const Api = {
  loginUser: (username, password) => {
    return axios({
      url: `${URL}/signin`,
      method: "POST",
      data: {
        username,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  registerUser: (fullname, contact, username, password, region, gender) => {
    return axios({
      url: `${URL}/signup`,
      method: "POST",
      data: {
        fullname,
        contact,
        region,
        gender,
        username,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  getRegions: () => {
    return axios({
      url: `${URL}/regions`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  getUser: (token) => {
    return axios({
      url: `${URL}/user`,
      method: "GET",
      headers: {
        token: token,
      },
    });
  },

  getSubject1: () => {
    return axios({
      url: `${URL}/subjects/main`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  getSubject2: (subject) => {
    return axios({
      url: `${URL}/subjects/${subject}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  getUnversities: (subject_1, subject_2) => {
    return axios({
      url: `${URL}/unversities?subject_1=${subject_1}&subject_2=${subject_2}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  getUnversity: (subject_1, subject_2, unversityId) => {
    return axios({
      url: `${URL}/unversities?subject_1=${subject_1}&subject_2=${subject_2}&unversityId=${unversityId}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  getTests: (subject_1, subject_2, token) => {
    return axios({
      url: `${URL}/tests?subject_1=${subject_1}&subject_2=${subject_2}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    });
  },

  getExam: (examId, token) => {
    return axios({
      url: `${URL}/exams/${examId}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    });
  },

  getExams: (token) => {
    return axios({
      url: `${URL}/exams`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    });
  },

  postExam: (subject_1, subject_2, unversityId, facultyId, token) => {
    return axios({
      url: `${URL}/exams`,
      method: "POST",
      data: {
        subject_1,
        subject_2,
        unversityId,
        facultyId,
      },
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
    });
  },

  postAnswer: (answer, examId, testId, token) => {
    return axios({
      url: `${URL}/answers/${testId}`,
      method: "POST",
      data: {
        answer,
        examId: parseInt(examId),
      },
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
    });
  },
};
