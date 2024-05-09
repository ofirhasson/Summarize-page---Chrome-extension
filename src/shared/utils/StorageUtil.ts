import { Storage } from "@plasmohq/storage"

//all the function that are related to storage
class StorageUtil {
    private storage = new Storage({ area: "local" });

    public async write(data: string): Promise<void> {
        await this.storage.set("data", data);
    }

    public async read(): Promise<string> {
        const data = await this.storage.get("data");
        return data;
    }

    public async waitAndRead(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            let timerId = setInterval(async () => {
                const data = await this.storage.get("data");
                if (data) {
                    clearInterval(timerId);
                    resolve(data);
                }
            }, 100)
        });
    }

    public async clear(): Promise<void> {
        await this.storage.clear();
    }

}

export const storageUtil = new StorageUtil();
