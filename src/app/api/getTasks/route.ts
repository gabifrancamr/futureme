import { NextResponse } from 'next/server';
import db from '../../../../prisma/db';

export async function GET(request: Request) {
    try {
        const tasks = await db.task.findMany()

        return NextResponse.json(
            {
                status: 200,
                tasks: tasks.length > 0 ? tasks : []
            },
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