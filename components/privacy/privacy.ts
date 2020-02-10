import { Helper } from './../../scripts/helper.js';
import { Page } from './../../scripts/page.js';

console.log(`privacy.ts`);
class Privacy extends Page {
	constructor(main: HTMLElement) {
		super(main);

		main.innerHTML = `Privacy`;
		this.setup();
	}
	private readonly setup = async () => {
        const html = await Helper.getHTML(`components/privacy/privacy.html`);
        
        const template = html.getElementById(`privacy`);
        console.log(template);
		if (template) {
			const content = (template as HTMLTemplateElement).content;
			this.main.appendChild(content);
		}
	};
}

export { Privacy };