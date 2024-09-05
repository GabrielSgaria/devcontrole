import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server'
import PrismaClient from "@/lib/prisma"


export async function DELETE(request: Request) {

    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return NextResponse.json({ error: "Not authorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("id");

    try {
        await PrismaClient.customer.delete({
            where: {
                id: userId as string
            }
        })
        
        return NextResponse.json({ message: "Cliente deletado com sucesso!" })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Filed delete customer" }, { status: 400 })
    }
}


export async function POST(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
        return NextResponse.json({ error: "Not authorized" }, { status: 401 })
    }

    const { name, email, phone, address, userId } = await request.json();

    try {
        await PrismaClient.customer.create({
            data: {
                name,
                phone,
                email,
                address: address ? address : "",
                userId
            }
        })

        return NextResponse.json({ message: "Cliente cadastrado com sucesso" })

    } catch (err) {
        return NextResponse.json({ error: "Filed create new customer" }, { status: 400 })
    }

}