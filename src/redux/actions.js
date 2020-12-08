import Axios from "axios";
import store from "./store";

export function FetchCustomerTable(token, dispatch) {
  console.log("all state", token);
  const headers = {
    token,
  };

  console.log(headers, ">>>>>.");
  Axios.get("https://herodealersapp.herokuapp.com/getCustomer/getAll", {
    headers,
    params: { dealer_id: "0019D00000B1f95QAB" },
  })
    .then((response) =>
      dispatch({
        type: "FETCH_CUSTOMER_DETAILS",
        payload: response.data.data,
        loading: false,
      })
    )
    .catch((err) => console.log(err));
}
export function Login(credentials, dispatch) {
  Axios.post("https://herodealersapp.herokuapp.com/login/login", credentials)
    .then((response) =>
      dispatch({
        type: "SET_LOGIN_STATUS",
        success: response.data.success,
        message: response.data.message,
        token: response.data.success ? response.data.data.token : null,
      })
    )
    .catch((err) => console.log(err));
}
