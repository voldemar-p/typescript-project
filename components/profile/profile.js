var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Helper } from "../../scripts/helper.js";
import { Page } from "../../scripts/page.js";
console.log(`profile.ts`);
class Profile extends Page {
    constructor(main) {
        super(main);
        this.setup = () => __awaiter(this, void 0, void 0, function* () {
            const html = yield Helper.getHTML(`Components/Profile/profile.html`);
            const template = html.getElementById(`profile`);
            if (template) {
                this.profileData = yield Helper.fetchContent(`Data/profile.json`);
                this.content = template.content;
            }
            this.addTextAndImage();
            this.addContacts();
            this.addXP();
            this.addEducation();
            if (this.content) {
                this.main.innerHTML = ``;
                this.main.appendChild(this.content);
            }
        });
        this.addTextAndImage = () => {
            if (this.content && this.profileData) {
                const firstNameEl = this.content.querySelector(`[itemprop="givenName"]`);
                const lastNameEl = this.content.querySelector(`[itemprop="familyName"]`);
                const imageEl = this.content.querySelector(`[itemprop="image"]`);
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
        this.addContacts = () => {
            if (this.content && this.profileData) {
                const contactListEl = this.content.querySelector(`#contact-list`);
                const contactItemEl = this.content.querySelector(`#contact-item`);
                if (contactListEl && contactItemEl) {
                    const contacts = document.createDocumentFragment();
                    this.profileData.contacts.forEach((value) => {
                        const node = document.importNode(contactItemEl.content, true);
                        const span = node.querySelector(`span`);
                        const a = node.querySelector(`a`);
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
        this.addXP = () => {
            if (this.content && this.profileData) {
                const xpListEl = this.content.querySelector(`#xp-list`);
                const xpItemEl = this.content.querySelector(`#xp-item`);
                if (xpListEl && xpItemEl) {
                    const xps = document.createDocumentFragment();
                    this.profileData.xp.forEach((value) => {
                        const node = document.importNode(xpItemEl.content, true);
                        const span = node.querySelector(`span`);
                        const progress = node.querySelector(`progress`);
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
        this.addEducation = () => {
            if (this.content && this.profileData) {
                const eduListEl = this.content.querySelector(`#edu-list`);
                const eduItemEl = this.content.querySelector(`#edu-item`);
                if (eduListEl && eduItemEl) {
                    const educations = document.createDocumentFragment();
                    this.profileData.education.forEach((value) => {
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
        this.setup();
    }
}
export { Profile };
//# sourceMappingURL=profile.js.map