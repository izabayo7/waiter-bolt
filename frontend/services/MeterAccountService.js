import http from "./http-common";

class MeterAccountService {

    create(data) {
        return http.post("/meter-account", data)
    }

    getAll() {
        return http.get("/meter-account");
    }

    get(id) {
        return http.get("/meter-account/" + id)
    }

    delete(id) {
        return http.delete("/meter-account/" + id)
    }


}

export default new MeterAccountService