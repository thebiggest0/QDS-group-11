import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/users/all");
  }

  create(data) {
    // console.log('sending: ' + data);
    return http.post("/users/add", data);
  }
}

export default new UserDataService();
