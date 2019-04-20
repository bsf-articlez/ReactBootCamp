import endpoints from "requests/endpoints";
import { API } from "configs";

const login = (identifier, password) => {
  API.fetchAPI(endpoints.LOGIN, "post", {
    identifier,
    password
  }).then(res => {
    console.log("login response");
  });
};

export default { login };
