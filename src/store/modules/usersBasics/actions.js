import { USER_GET } from "./types";

export const showUsers = (list) => ({ type: USER_GET, list });
