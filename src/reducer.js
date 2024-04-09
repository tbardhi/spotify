export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQCNqvOiZriDv9rsLC2VLDcUfS__yy2PEVL7KCnZE4MXfjUOP8GMGMDmbWRSQp0LIpwmWcWrMtvGK1kRtQNG6RRUc7bkl6x0oqAJ_0Lxnuux3WPEqSFBLXC-bLhvlQiAFKtr6g08kTr8lO6s27_fgm2rKIWYgKEGeNYhZvAFTPFtLLge8-9Y&token_type=Bearer&expires_in=3600",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state, // keep the state, then update the specifics
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
