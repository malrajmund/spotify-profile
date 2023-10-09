const initialState: UserState = {
  token: "",
  refreshToken: "",
  isAuthed: false,
  info: {
    display_name: "",
    country: "",
    images: [],
    followers: {
      total: 0,
    },
    product: "",
  },
};

export default initialState;
