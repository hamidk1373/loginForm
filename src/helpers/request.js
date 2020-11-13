import { toast } from "react-toastify";

const BASE_URL = "http://localhost:11111";

export function request(endpoint, method, body) {
  let statusCode;
  return fetch(BASE_URL + endpoint, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      statusCode = response.status;
      return response.json();
    })
    .then((JSONResponse) => {
      return { statusCode, JSONResponse };
    })
    .catch((error) => {
      toast.error("Server error!!!");
    });
}
