import { NextRequest, NextResponse} from "next/server";
import prisma from '../../lib/prisma'

export async function POST(request: NextRequest){
    const res = await request.json()
    const {task, desc, status} = res
    const result = await prisma.task.create({data: { task, desc, status }})
    return NextResponse.json({data: result})
}
