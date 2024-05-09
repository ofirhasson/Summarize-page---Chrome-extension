//creating the question for the ChatGPT
class PromptEngineering {

    public getPrompt(contents: string[]): string {
        let prompt = `here is an html page content extracted from text elements.
        write a 80 words summary of the page content.
        write the summary in english.
        stylize the summary to be an easily readable paragraph for everybody.
        avoid mentioning the word HTML.
        the extracted data is:
        `;
        
        for (const content of contents) {
            prompt += content + "\n";
        }

        return prompt;
    }

}

export const promptEngineering = new PromptEngineering();
