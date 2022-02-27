import http from "./http-common";

class RequestService {

    create(data) {
        return http.post("/requests", data)
    }

    getAll() {
        return http.get("/requests");
    }

    get(id) {
        return http.get("/requests/" + id)
    }

    sendOrder(message) {
        return http.post("/requests", {
            body: message
        })
    }

    delete(id) {
        return http.delete("/requests/" + id)
    }


}

export default new RequestService