import { Express } from "express";
import { protect } from "../utils/auth";
import { createRequest, getAllRequests, updateRequest } from "./requests";
import { createUser, getUsers, login } from "./users";

export default function routes(app: Express) {
        app.get("/api/users", (req, res) => getUsers(req, res));
        app.post("/api/users", (req, res) => createUser(req, res));
        app.post("/api/login", (req, res) => login(req, res));
        app.get("/api/requests", protect, (req, res) => getAllRequests(req, res));
        app.post("/api/requests", protect, (req, res) => createRequest(req, res));
        app.put("/api/requests/:id", protect, (req, res) => updateRequest(req, res));
}
