import axios from "axios";

const simpleMiddlewareApi = axios.create({
  baseURL: "http://localhost:9091",
  timeout: 1500,
});

simpleMiddlewareApi.interceptors.request.use(config => {
  console.log("AXIOS .getUri()", axios.getUri(config));
  return config;
});

export default simpleMiddlewareApi;
