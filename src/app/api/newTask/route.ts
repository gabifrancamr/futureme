import { NextResponse } from 'next/server';
import db from '../../../../prisma/db';

export async function POST(request: Request) {
    try {
        const { title, description } = await request.json();

        await db.task.create({
            data: {
                title,
                description,
                status: 'Em andamento'
            }
        });

        return NextResponse.json(
            { status: 'success' },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}