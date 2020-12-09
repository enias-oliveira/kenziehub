import { showUsers } from "./actions";
import axios from "axios";
import { useEffect } from "react";

export const showUsersThunk = () => (dispatch) => {
  useEffect(() => {
    axios
      .get("https://kenziehub.me/users")
      .then((res) => {
        const data = res.data;

        data.map((item) => {
          console.log(item);
          let newObject = {};
          newObject.name = item.name;

          item.techs.map((techs, index) => {
            if (index === 0) {
              newObject.title = techs.title;
              newObject.status = techs.status;
            }
            return "";
          });
          console.log(newObject);
          return dispatch(showUsers(newObject));
        });
      })
      .catch((err) => console.log(err));
  }, [dispatch]);
};
