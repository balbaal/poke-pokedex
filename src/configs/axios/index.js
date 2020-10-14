import axios from "axios";

const instance = axios.create({
  baseURL: `https://pokeapi.co/api/v2`,
});

instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log("err :>> ", err);
    return Promise.reject(err);
  }
);

export default instance;
