import { showUsers } from "./actions";
import axios from "axios";

export const showUsersThunk = (perPage, page) => (dispatch) => {
  axios
    .get(`https://kenziehub.me/users?perPage=${perPage}&page=${page}`)
    .then((res) => {
      const data = res.data;
      let list = [];
      data.map((item) => {
        item.title = item.techs.length && item.techs[0].title;
        item.status = item.title && item.techs[0].status;

        list = [...list, item];
      });
      return dispatch(showUsers(list));
    })
    .catch((err) => console.log(err));
};
