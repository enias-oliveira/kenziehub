import { showUsers } from "./actions";
import axios from "axios";

export const showUsersThunk = (perPage, page) => (dispatch) => {
  axios
    .get(`https://kenziehub.me/users?perPage=${perPage}&page=${page}`)
    .then((res) => {
      const data = res.data;

      data.map((item) => {
        let newObject = {};
        newObject.name = item.name;
        newObject.course_module = item.course_module;

        item.techs.map((techs, index) => {
          if (index === 0) {
            newObject.title = techs.title;
            newObject.status = techs.status;
          }
          return "";
        });
        return dispatch(showUsers(newObject));
      });
    })
    .catch((err) => console.log(err));
};
