import { NextResponse } from "next/server";
import db from "../../../../prisma/db";

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();

        if (!id) {
            return NextResponse.json(
                { error: 'Id é necessário para identificar tarefa.' },
                { status: 400 }
            )
        }

        await db.task.delete({
            where: { id }
        })

        return NextResponse.json(
            { status: 'success' },
            { status: 200 }
        );

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                status: 500,
                message: 'Falha em deletar usuário. Tente novamente mais tarde.'
            },
            { status: 500 }
        );
    }
}