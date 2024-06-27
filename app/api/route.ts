import { NextResponse } from "next/server";

export const GET = async () => {
    return new NextResponse("Api is working", { status: 200 });
}