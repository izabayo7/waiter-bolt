import axios from "axios";
// export const domain = "https://att-management-backend.herokuapp.com";

export const domain ="http://localhost:4500"



const http = axios.create ({
  baseURL: `${domain}/api/v1`,
  headers: {'Content-Type': 'application/json'},
});


export default http;