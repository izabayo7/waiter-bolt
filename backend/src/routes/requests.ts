import { Request, Response } from "express"
import prisma from "../client"

export async function getAllRequests(req: Request, res: Response) {
    const requests = await prisma.request.findMany({
        include: {
            responses: true
        }
    })

    return res.json({ data: requests })
}


export async function getRequestsByUser(req: Request, res: Response) {

    //@ts-ignore
    const userId = parseInt(req.userId)

    const requests = await prisma.request.findMany({
        where: {
            userId
        },
        include: {
            responses: true,
            user: true
        }
    })

    return res.json({ data: requests })
}


export async function createRequest(req: Request, res: Response) {
    const { body } = req.body

    if (!body) {
        return res.status(400).json({ message: "Body is missing" })
    }

    //@ts-ignore
    const userId = req.userId

    const user = await prisma.request.create({
        data: {
            body,
            userId
        }
    })

    return res.json({ data: user })
}


export async function updateRequest(req: Request, res: Response) {
    const { status, body } = req.body

    const id = parseInt(req.params.id)

    if (!status || !body) {
        return res.status(400).json({ message: "All fields are required" })
    }

    try {

        const old_request = await prisma.request.findUnique({
            where: { id }
        })

        if (!old_request) {
            return res.status(404).json({ message: "Request not found" })
        }

        const request = await prisma.request.update({
            where: { id },
            data: {
                status,
                body,
                userId: id
            }
        })

        return res.json({ data: request })

    } catch (error) {
        return res.status(400).json({ message: "Update failed" })
    }
}
