import axios from "axios";
import { appConfig } from "../utils/AppConfig";

class GptServices {

    //ask ChatGPT to summarize the content
    public async getCompletion(prompt: string): Promise<string> {

        //Axios body:
        const requestBody = {
            model: "gpt-3.5-turbo",
            max_tokens: 2500,
            messages: [
                { role: "system", content: "You are a helpful assistant." }, //State ChatGPT personality.
                { role: "user", content: prompt } // User asking
            ]
        };

        //Axios header:
        const options = {
            headers: {
                authorization: "Bearer " + appConfig.apiKey
            }
        };

        //Get data by axios
        const axiosResponse = await axios.post(appConfig.gptUrl, requestBody, options);

        //Extract OpenAI response
        const apiResponse = axiosResponse.data;

        //Extract Completion
        const completion = apiResponse.choices[0].message.content;

        return completion;

    }

}

export const gptServices = new GptServices();
