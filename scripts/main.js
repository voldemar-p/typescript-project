import { Page } from './page.js';
import { Privacy } from './../components/privacy/privacy.js';
import { Profile } from './../components/profile/profile.js';
console.log(`main.ts`);
class Main {
    constructor() {
        this.main = document.getElementById(`main`);
        this.header = document.getElementsByClassName(`main-nav`)[0];
        this.footer = document.getElementsByClassName(`footer-nav`)[0];
        this.clicking = (e) => {
            const target = e.target;
            if (target) {
                e.preventDefault();
                /* loogika */
                this.changeState(target.getAttribute(`href`));
            }
            e.stopPropagation();
        };
        this.changeState = (state) => {
            if (!state) {
                state = ``;
            }
            history.pushState(state, ``, state);
            if (this.page) {
                this.page.destroy();
            }
            if (state === `#!profile`) {
                this.page = new Profile(this.main);
            }
            else if (state === `#!privacy`) {
                this.page = new Privacy(this.main);
            }
            else {
                this.page = new Page(this.main);
            }
        };
        this.changeState(location.hash);
        addEventListener(`popstate`, (ev) => {
            this.changeState(ev.state);
        });
        this.header.addEventListener(`click`, this.clicking);
        this.footer.addEventListener(`click`, this.clicking);
    }
}
const main = new Main();
main;
//# sourceMappingURL=main.js.map