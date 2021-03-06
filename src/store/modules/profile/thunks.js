import { showProfile } from "./actions";
import axios from "axios";

export const showProfileThunk = (id) => (dispatch) => {
  axios.get(`https://kenziehub.me/users/${id}`).then((res) => {
    const data = res.data;
    return dispatch(showProfile(data));
  });
};
