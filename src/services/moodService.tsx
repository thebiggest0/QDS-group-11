import http from "../http-common";

class MoodDataService {
  getAll() {
    return http.get("/moods/all");
  }

  create(data) {
    return http.post("/moods/add", data);
  }
}

export default new MoodDataService();
