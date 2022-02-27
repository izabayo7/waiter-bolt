
import http from "./http-common";
class ReplyService {
    create(data) {
        return http.post("/responses", data)
    }

    getAll() {
        return http.get("/responses");
    }

    get(id) {
        return http.get("/responses/" + id)
    }

    sendOrder(message) {
        return http.post("/responses", {
            body: message
        })
    }

    delete(id) {
        return http.delete("/responses/" + id)
    }
}

export default new ReplyService;
