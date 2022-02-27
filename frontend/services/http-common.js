import axios from "axios";

export const domain ="http://8096-197-243-61-202.ngrok.io"


const http = axios.create ({
  baseURL: `${domain}/api`,
  headers: {'Content-Type': 'application/json'},
});


export default http;