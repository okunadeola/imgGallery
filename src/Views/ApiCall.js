import axios from "axios";
const KEY = process.env.REACT_APP_PUBLIC_KEY ;

const API = axios.create({ baseURL: 'https://api.pexels.com/v1/curated?per_page=15&page=1' });
API.interceptors.request.use((req) => {
    req.headers.Authorization = KEY;
  return req;
});


export const CloudCall = async (dispatch) => {
  try {
    const res = await API.get("")

    dispatch({ type: "GET_IMAGE", payload: res.data.photos});
    console.log(res.data.photos);

  } catch (err) {
    dispatch({ type: "GET_ERROR", payload: err });
  }
};

