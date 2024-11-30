import { getApp } from "firebase/app";
import { NextResponse } from "next/server";
import { app } from "../firebase/config";

export async function GET() {

	//get the collections from the firestore connection
	return NextResponse.json({
		hello: "world"
	})
}


