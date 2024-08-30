const initialState = {
  token: {
    accessToken: { value: "" },
    refreshToken: { value: "" },
  },
  form: {
    email: { value: "" },
    password: { value: "" },
  },
  loading: false,
  errors: "",
};

export default initialState;
