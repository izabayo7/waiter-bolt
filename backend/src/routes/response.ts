import { Request, Response } from "express";
import prisma from "../client";

export async function getAllResponses(req: Request, res: Response) {
    const responses = await prisma.response.findMany({
        include: {
            request: true,
        }
    })
    return res.json({ data: responses })
}



export async function createResponse(req: Request, res: Response) {
    const { body, requestId } = req.body

    if (!body || !requestId) {
        return res.status(400).json({ message: "Body and requests id are all required" })
    }

    //@ts-ignore
    const userId = req.userId

    try {

        const user = await prisma.response.create({
            data: {
                body,
                requestId,
                userId
            }
        })

        return res.json({ data: user })

    } catch (error) {
        res.status(400).json({ message: "creating failed" })
    }
}



export async function updateResponse(req: Request, res: Response) {
    const { status, body } = req.body

    const id = parseInt(req.params.id)

    if (!status || !body) {
        return res.status(400).json({ message: "Status and body are required" })
    }

    try {
        const response = await prisma.response.update({
            where: {
                id
            },
            data: {
                status,
                body
            }
        })

        return res.json({ data: response })


    } catch (error) {
        res.status(400).json({ message: "Update failed" })
    }
}


export async function deleteResponse(req: Request, res: Response) {
    const id = parseInt(req.params.id)

    try {
        const response = await prisma.response.delete({
            where: {
                id
            }
        })

        return res.json({ data: response })

    } catch (error) {
        res.status(400).json({ message: "Delete failed" })
    }
}
