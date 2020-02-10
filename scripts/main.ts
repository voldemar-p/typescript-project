import { Page } from './page.js';
import { Privacy } from './../components/privacy/privacy.js';
import { Profile } from './../components/profile/profile.js';
console.log(`main.ts`);
class Main {
    private readonly main = document.getElementById(`main`) as HTMLElement;
    private readonly header = document.getElementsByClassName(`main-nav`)[0];
    private readonly footer = document.getElementsByClassName(`footer-nav`)[0];
    private page?: Page;
    constructor() {
        this.changeState(location.hash);
        addEventListener(`popstate`, (ev: PopStateEvent) => {
            this.changeState(ev.state);
        });
        this.header.addEventListener(`click`, this.clicking);
        this.footer.addEventListener(`click`, this.clicking);
    }
    private readonly clicking = (e: Event) => {
        const target = e.target as HTMLAnchorElement | undefined;
        if (target) {
            e.preventDefault();
            /* loogika */
            this.changeState(target.getAttribute(`href`));
        }
        e.stopPropagation();
    };
    private readonly changeState = (state: string | null) => {
        
        if (!state) {
            state = ``;
        }
                history.pushState(state, ``, state);
                if (this.page) {
            this.page.destroy();
        }
                if (state === `#!profile`) {
            this.page = new Profile(this.main);
        } else if (state === `#!privacy`) {
            this.page = new Privacy(this.main);
        } else {
            this.page = new Page(this.main);
        }
    }
}
const main = new Main();
main;