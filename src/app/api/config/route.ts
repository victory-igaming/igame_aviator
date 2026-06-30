import { NextResponse } from 'next/server';
export async function GET() {
  return NextResponse.json({
    apkUrl: process.env.NEXT_PUBLIC_APK_URL,
    gameUrl: process.env.NEXT_PUBLIC_GAME_URL,
  });
}