import { Express } from "express";
import { protect } from "../utils/auth";
import { createRequest, getAllRequests, getRequestsByUser, updateRequest } from "./requests";
import { createResponse, deleteResponse, getAllResponses, updateResponse } from "./response";
import { createUser, getUsers, login, me } from "./users";

export default function routes(app: Express) {
        app.get("/api/users", (req, res) => getUsers(req, res));
        app.post("/api/users", (req, res) => createUser(req, res));
        app.post("/api/login", (req, res) => login(req, res));

        // get current logged in user
        app.get("/api/login/me", protect, (req, res) => me(req, res));
        app.get("/api/requests", protect, (req, res) => getAllRequests(req, res));
        app.post("/api/requests", protect, (req, res) => createRequest(req, res));

        // get all request by loged in user 
        app.get("/api/requests/me", protect, (req, res) => getRequestsByUser(req, res));
        app.put("/api/requests/:id", protect, (req, res) => updateRequest(req, res));

        app.get("/api/responses", protect, (req, res) => getAllResponses(req, res));
        app.post("/api/responses", protect, (req, res) => createResponse(req, res));
        app.put("/api/responses/:id", protect, (req, res) => updateResponse(req, res));
        app.delete("/api/responses/:id", protect, (req, res) => deleteResponse(req, res));
}
