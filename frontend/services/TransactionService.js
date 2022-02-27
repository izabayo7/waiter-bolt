import http from "./http-common";

class TransactionService {

    create(data) {
        return http.post("/transaction", data)
    }

    getAll() {
        return http.get("/transaction");
    }

    get(id) {
        return http.get("/transaction/" + id)
    }

    delete(id) {
        return http.delete("/transaction/" + id)
    }


}

export default new TransactionService