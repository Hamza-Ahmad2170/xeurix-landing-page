import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  // const data = await req.formData();
  console.log(data);

  return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
}
export async function GET(req: NextRequest, res: NextResponse) {
  return new NextResponse("Hello, Next.js!", { status: 200 });
}
