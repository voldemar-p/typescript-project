var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Helper } from './../../scripts/helper.js';
import { Page } from './../../scripts/page.js';
console.log(`privacy.ts`);
class Privacy extends Page {
    constructor(main) {
        super(main);
        this.setup = () => __awaiter(this, void 0, void 0, function* () {
            const html = yield Helper.getHTML(`components/privacy/privacy.html`);
            const template = html.getElementById(`privacy`);
            console.log(template);
            if (template) {
                const content = template.content;
                this.main.appendChild(content);
            }
        });
        main.innerHTML = `Privacy`;
        this.setup();
    }
}
export { Privacy };
//# sourceMappingURL=privacy.js.map