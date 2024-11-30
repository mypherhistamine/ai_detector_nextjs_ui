

import { db } from "@/app/firebase/config";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function GET() {
	return NextResponse.json({
		hello: "This API will return all the queries queried by the user",
	});
}

export async function POST(req: Request) {
	const { text } = await req.json() // Use req.json() for parsing JSON body

	//the rqeuest body is 
	console.log(`The request body is -> ${req} and the body is -> ${req.body}`);

	if (!text) {
		return NextResponse.json({ error: "Text is a required field" }, { status: 400 });
	}
	try {
		const docRef = await addDoc(collection(db, "userQueries"), {
			text,
			createdAt: serverTimestamp(),
		});
		console.log("The query has been added into the query");
		return NextResponse.json({ message: "Query added", id: docRef.id }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: `Failed to add the query -> ${error}` }, { status: 500 });
	}
}

