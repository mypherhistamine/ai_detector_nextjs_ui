import { addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { collection } from "firebase/firestore/lite";

/**
 * The passed query should not be empty not accepting empty query strings
 * */
export async function sendQueryToDB(userID: string, query: string) {
	try {
		const docRef = await addDoc(collection(db, "userQueries"), {
			query,
			createdAt: serverTimestamp(),
		});
		console.log("The query has been added into the query");


	} catch (err) {
		console.error("Error in adding the required query into the db");

	}


}
