console.log(`helper.ts`);

class Helper {
    private static cacheHTML = new Map<string, string>();
    public static fetchContent = async (file: string, isJSON = true) => {
        let response: Response | undefined;
        try {
            response = await fetch(file);
            const content = isJSON ? await response.json() :await response.text();
            return content;
        } catch (error) {
            error.response = response;
            throw error;
        }
    }
    public static getHTML = async (name: string) => {
        if(!Helper.cacheHTML.has(name)) {
            const content = await Helper.fetchContent(name, false);
            Helper.cacheHTML.set(name, content);
        }
        const tmp = Helper.cacheHTML.get(name);
        if(tmp) {
            const range = document.createRange();
            const fragment = range.createContextualFragment(tmp);
            return fragment;
        }
        return document.createDocumentFragment();
    }
    constructor() {

    }
}

export { Helper };
