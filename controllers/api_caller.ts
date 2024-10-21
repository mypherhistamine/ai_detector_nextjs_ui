import { CLASSIFY_API_ENDPOINT } from "@/lib/utils";
import { RequestText } from "models/request_text";
import { ResponseText } from "models/response_text";


export async function getInputTextResponse(requestText: RequestText): Promise<ResponseText> {
	console.log("requesting sample text response");
	let response: Response = await fetch(CLASSIFY_API_ENDPOINT, {
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
}
