import { NextResponse } from 'next/server';
import db from '../../../../prisma/db';

export async function POST(request: Request) {
    try {
        const { id, title, description } = await request.json();

        if (!id) {
            return NextResponse.json(
                { error: 'Id é necessário para identificar tarefa.' },
                { status: 400 }
            );
        }

        const updatedTransaction = await db.task.update({
            where: { id },
            data: { title, description }
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
                message: 'Failed to update transaction. Please try again later.'
            },
            { status: 500 }
        );
    }
}

export function OPTIONS() {
    return NextResponse.json(null, {
        status: 200,
        headers: {
            'Allow': 'POST, OPTIONS',
        },
    });
}