import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;  
    const result = await prisma.task.delete({
        where: { id: parseInt(id) }
    })

    return NextResponse.json({ res: result, message: `Task with ID ${id} deleted successfully.` });
}

export async function GET(req:NextRequest, { params }: { params: {id: string} }){
    const id = params.id;
    const result = await prisma.task.findFirst({
        where:{
            id: parseInt(id)
        }
    })

    return NextResponse.json({data: result})
}

export async function PUT(req:NextRequest, {params}: { params: {id: string} }){
    const id = params.id
    const values = await req.json()

    const resulte = await prisma.task.update({
        where:{
            id: parseInt(id)
        },
        data: {
            task: values.task,
            desc: values.desc,
            status: values.status
        }
    })

    return NextResponse.json({data: resulte})
}