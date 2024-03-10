import http from "../http-common";

class HabitDataService {
  getAll() {
    return http.get("/habits/all");
  }

  get(id) {
    return http.get(`/habits/${id}`);
  }

  create(data) {
    return http.post("/habits/add", data);
  }

  update(id, data) {
    return http.put(`/habits/${id}`, data);
  }

  // delete(id) {
  //   return http.delete(`/tutorials/${id}`);
  // }

  // deleteAll() {
  //   return http.delete(`/tutorials`);
  // }

  // findByTitle(title) {
  //   return http.get(`/tutorials?title=${title}`);
  // }
}

export default new HabitDataService();
