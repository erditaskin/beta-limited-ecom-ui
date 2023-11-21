import axios from "axios";

// Config
const config = {
  baseURL: process.env.REACT_APP_API_ENDPOINT_URL,
  headers: {
    "Content-Type": "application/json",
    "Session-ID": null,
  },
};

const apiRequestInstance = axios.create(config);

// Request
apiRequestInstance.interceptors.request.use(
  async (config) => {
    const sessionId = await localStorage.getItem("Session-ID");

    config.headers["Session-ID"] =
      sessionId && sessionId !== "" ? sessionId : null;

    return config;
  },
  (error) => Promise.reject(error)
);

// Response
apiRequestInstance.interceptors.response.use(
  (response) => {
    // Response interceptions
    return response;
  },
  (error) => {
    return error;
  }
);

export const Api = apiRequestInstance;
