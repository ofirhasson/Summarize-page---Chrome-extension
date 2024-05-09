import { storageUtil } from "~src/shared/utils/StorageUtil";
import "./summarize.css";
import { useEffect, useState } from "react";
import { promptEngineering } from "~src/shared/services/PromptEngineering";
import { gptServices } from "~src/shared/services/GptServices";

function Summarize(): JSX.Element {

    const [completion, setCompletion] = useState<string>("");
    const [isLoader, setIsLoader] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            setCompletion("Reading Website...");
            const data = await storageUtil.waitAndRead();
            const arr = JSON.parse(data);

            setCompletion("Getting GPT Summary...");
            const prompt = promptEngineering.getPrompt(arr);
            const newCompletion = await gptServices.getCompletion(prompt);

            setIsLoader(false);
            setCompletion(newCompletion);
        })();
    }, [])

    return (
        <div className="summarize" style={completion.length <= 22 ? { overflow:'hidden'} : { overflow:'auto' }}>
            {completion}
            {isLoader && <div className="loader"></div>}
        </div>
    );
}

export default Summarize;
