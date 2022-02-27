import http from "./http-common";

class UserService {

    create(data) {
        return http.post("/users", data)
    }


    getAll() {
        return http.get("/users");
    }


    get(id) {
        return http.get("/users/" + id)
    }

    delete(id) {
        return http.delete("/users/" + id)
    }


}

export default new UserService