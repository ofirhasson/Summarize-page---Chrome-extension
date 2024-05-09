//read content from page
export function readContents(): string[] {
    const arr: string[] = [];
    const allTags = document.querySelectorAll("h1,h2,h3,h4,h5,h6,p, article, span:not([class])");

    for (const tag of allTags) {
        const text = (tag as HTMLElement).innerText;
        if (text?.length > 50) arr.push(text);
    }

    return arr;
}