export const dynamic = "force-dynamic";

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

        await db.task.update({
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
            { message: 'Internal server error.' },
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