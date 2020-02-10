var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log(`helper.ts`);
class Helper {
    constructor() {
    }
}
Helper.cacheHTML = new Map();
Helper.fetchContent = (file, isJSON = true) => __awaiter(this, void 0, void 0, function* () {
    let response;
    try {
        response = yield fetch(file);
        const content = isJSON ? yield response.json() : yield response.text();
        return content;
    }
    catch (error) {
        error.response = response;
        throw error;
    }
});
Helper.getHTML = (name) => __awaiter(this, void 0, void 0, function* () {
    if (!Helper.cacheHTML.has(name)) {
        const content = yield Helper.fetchContent(name, false);
        Helper.cacheHTML.set(name, content);
    }
    const tmp = Helper.cacheHTML.get(name);
    if (tmp) {
        const range = document.createRange();
        const fragment = range.createContextualFragment(tmp);
        return fragment;
    }
    return document.createDocumentFragment();
});
export { Helper };
//# sourceMappingURL=helper.js.map