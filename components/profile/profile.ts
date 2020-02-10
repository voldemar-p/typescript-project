import { Helper } from "../../scripts/helper.js";
import {
	ProfileData,
	Contact,
	Education,
	XP
} from "../../scripts/interface.js";
import { Page } from "../../scripts/page.js";

console.log(`profile.ts`);
class Profile extends Page {
	private profileData?: ProfileData;
	private content?: DocumentFragment;
	constructor(main: HTMLElement) {
		super(main);

		this.setup();
	}
	private readonly setup = async () => {
		const html = await Helper.getHTML(`Components/Profile/profile.html`);
		const template = html.getElementById(`profile`);
		if (template) {
			this.profileData = await Helper.fetchContent(`Data/profile.json`);
			this.content = (template as HTMLTemplateElement).content;
		}
		this.addTextAndImage();
		this.addContacts();
		this.addXP();
		this.addEducation();
		if (this.content) {
			this.main.innerHTML = ``;
			this.main.appendChild(this.content);
		}
	};
	private readonly addTextAndImage = () => {
		if (this.content && this.profileData) {
			const firstNameEl = this.content.querySelector(`[itemprop="givenName"]`);
			const lastNameEl = this.content.querySelector(`[itemprop="familyName"]`);
			const imageEl = this.content.querySelector(
				`[itemprop="image"]`
			) as HTMLImageElement | null;
			const descEl = this.content.querySelector(`[itemprop="description"]`);
			const descContEl = this.content.querySelector(`.desc-continue`);

			if (firstNameEl && lastNameEl && imageEl && descEl && descContEl) {
				firstNameEl.innerHTML = this.profileData.name.first;
				lastNameEl.innerHTML = this.profileData.name.last;
				imageEl.src = this.profileData.image.src;
				imageEl.alt = this.profileData.image.alt;
				descEl.innerHTML = this.profileData.description;
				descContEl.innerHTML = this.profileData.descContinue;
			}
		}
	};
	private readonly addContacts = () => {
		if (this.content && this.profileData) {
			const contactListEl = this.content.querySelector(`#contact-list`);
			const contactItemEl = this.content.querySelector(
				`#contact-item`
			) as HTMLTemplateElement | null;

			if (contactListEl && contactItemEl) {
				const contacts = document.createDocumentFragment();
				this.profileData.contacts.forEach((value: Contact) => {
					const node = document.importNode(contactItemEl.content, true);
					const span = node.querySelector(`span`);
					const a = node.querySelector(`a`) as HTMLAnchorElement | null;
					if (span && a) {
						span.innerHTML = value.name;
						a.innerHTML = value.content;
						a.href = value.href;
						if (value.itemprop) {
							a.setAttribute(`itemprop`, value.itemprop);
						}
					}
					contacts.appendChild(node);
				});
				contactListEl.appendChild(contacts);
			}
		}
	};
	private readonly addXP = () => {
		if (this.content && this.profileData) {
			const xpListEl = this.content.querySelector(`#xp-list`);
			const xpItemEl = this.content.querySelector(
				`#xp-item`
			) as HTMLTemplateElement | null;

			if (xpListEl && xpItemEl) {
				const xps = document.createDocumentFragment();
				this.profileData.xp.forEach((value: XP) => {
					const node = document.importNode(xpItemEl.content, true);
					const span = node.querySelector(`span`);
					const progress = node.querySelector(
						`progress`
					) as HTMLProgressElement | null;
					if (span && progress) {
						span.innerHTML = value.title;
						progress.value = value.level;
					}
					xps.appendChild(node);
				});
				xpListEl.appendChild(xps);
			}
		}
	};
	private readonly addEducation = () => {
		if (this.content && this.profileData) {
			const eduListEl = this.content.querySelector(`#edu-list`);
			const eduItemEl = this.content.querySelector(
				`#edu-item`
			) as HTMLTemplateElement | null;

			if (eduListEl && eduItemEl) {
				const educations = document.createDocumentFragment();
				this.profileData.education.forEach((value: Education) => {
					const node = document.importNode(eduItemEl.content, true);
					const h4 = node.querySelector(`h4`);
					const span = node.querySelector(`span`);
					const small = node.querySelector(`small`);
					if (h4 && span && small) {
						h4.innerHTML = value.school;
						span.innerHTML = value.title;
						small.innerHTML = value.year.toString();
					}
					educations.appendChild(node);
				});
				eduListEl.appendChild(educations);
			}
		}
	};
}

export { Profile };
