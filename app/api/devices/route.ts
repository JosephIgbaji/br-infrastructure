import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/utils/connectDb";

export async function GET(request: NextRequest) {
    connectDb();
    
    const data = {
        "laptop": 1,
        "model": "Asus",
        "handler": "Malenxe krix"
    }

    return new NextResponse(JSON.stringify(data));
}