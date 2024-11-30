import { CLASSIFY_API_ENDPOINT } from "@/lib/utils";
import { RequestText } from "models/request_text";
import { ResponseText } from "models/response_text";


export async function getInputTextResponse(requestText: RequestText): Promise<ResponseText | null> {
	let response = null;
	try {
		console.log("requesting sample text response");
		response = await fetch(CLASSIFY_API_ENDPOINT, {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestText)
		});
		let responseJson: ResponseText = await response.json();
		console.log("response text is -> ", responseJson);
		return responseJson;

	} catch (error) {
		console.error("some error occurred while checking for ai ", error);
		console.log("the server response was -> ", response);


		return null;
	}
}
