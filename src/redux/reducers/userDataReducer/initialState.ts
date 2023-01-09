const initialState: UserState = {
  token: "",
  refreshToken: "",
  isAuthed: false,
  roles: [],
  info: {
    id: null,
    email: null,
    roles: ["ROLE_GUEST"],
    is_blocked: null,
    is_activated: null,
    name: null,
    surname: null,
    twofa_require: null,
    birth_date: null,
    phone_prefix: null,
    phone_number: null,
    marketing: null,
    selling: null,
    privacy: null,
    user_carriers: [
      {
        carrier: {
          id: null,
        },
      },
    ],
    user_stations: [],
    user_partners: [],
    notifications: [],
    user_notifies: [],
  },
};

export default initialState;
