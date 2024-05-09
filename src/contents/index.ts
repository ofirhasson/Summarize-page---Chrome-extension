import type { PlasmoCSConfig } from "plasmo";
import { readContents } from "./reader";
import { storageUtil } from "~src/shared/utils/StorageUtil";

export const config:PlasmoCSConfig={
    matches:["https://*/*"]
};

//read content from page and store him in global state
window.addEventListener("load",async ()=>{
    const arr=readContents();
    const data = JSON.stringify(arr);
    await storageUtil.clear();
    await storageUtil.write(data);
});