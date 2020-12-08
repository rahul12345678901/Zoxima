const initialstate = {
  Login_Status: { success: false, message: null, token: null },
  customer_details: [],
  customer_details_loading: true,
};

export default function (state = initialstate, action) {
  switch (action.type) {
    case "SET_LOGIN_STATUS":
      return (state = {
        ...state,
        Login_Status: {
          ...state.Login_Status,
          success: action.success,
          message: action.message,
          token: action.token,
        },
      });
    case "FETCH_CUSTOMER_DETAILS":
      return (state = {
        ...state,
        customer_details: action.payload,
        customer_details_loading: action.loading,
      });
    default:
      return state;
  }
}
