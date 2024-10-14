import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/utils/connectDb";


import Device from "@/models/device.model";

export async function GET(request: NextRequest) {
    connectDb();

    const data = await Device.find();

    return new NextResponse(JSON.stringify(data));
}

export async function POST(request: NextRequest) {
    connectDb();

    const {deviceName, brand, serialNumber, issuedTo, issuedDate} = await request.json();

    const newEntry = await Device.create({
        deviceName,
        brand,
        serialNumber,
        issuedTo,
        issuedDate
    })

    newEntry.save();    
   

    return new NextResponse(JSON.stringify(newEntry));
}