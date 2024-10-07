import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const data = {
        "laptop": 1,
        "model": "Asus",
        "handler": "Malenxe krix"
    }

    return new NextResponse(JSON.stringify(data));
}