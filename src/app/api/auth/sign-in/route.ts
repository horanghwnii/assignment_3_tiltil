import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { id, pw, rePw } = body;

  if (id === 'udemy' && pw === 'udemy' && pw === rePw) {
    return NextResponse.json('OK', { status: 200 });
  } else {
    return NextResponse.json('Unauthorized', { status: 401 });
  }
}
