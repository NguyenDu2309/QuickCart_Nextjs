import connectDB from "@/app/config/db";
import authSeller from "@/lib/authSeller";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        
       

        await connectDB()

        const products = await Product.find({})
        return NextResponse.json({success: true, products})


    } catch (error) {
        return NextResponse.json({success: false, message: error.message})
    }
}