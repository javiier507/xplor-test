import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();

    const fetchResponse = await fetch('http://127.0.0.1:8080/auth/login', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await fetchResponse.json();

    return NextResponse.json(data);
}
