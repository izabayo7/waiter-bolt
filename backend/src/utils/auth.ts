import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export async function protect(req: Request, res: Response, next: NextFunction) {
        let token;

        if (
                req.headers.authorization &&
                req.headers.authorization.startsWith("Bearer")
        ) {
                token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
                return res.status(401).json({
                        message: "No token found",
                });
        }

        try {

                //TODO: find a better way to handle this 
                const decoded = jwt.verify(token, "secret") as any;



                //@ts-ignore
                req.userId = decoded.userId

                next();
        } catch (error) {
                return res.status(401).json({
                        message: "Invalid token"
                })
        }


}
