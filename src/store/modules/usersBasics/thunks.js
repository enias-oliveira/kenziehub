import { showUsers } from "./actions";
import axios from "axios";

export const showUsersThunk = () => (dispatch) => {
  axios
    .get("https://kenziehub.me/users")
    .then((res) => {
      const data = res.data;

      data.map((item) => {
        let newObject = {};
        newObject.name = item.name;

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
