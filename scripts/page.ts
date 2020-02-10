
console.log(`page.ts`);

class Page {
    protected main: HTMLElement;
    constructor(main: HTMLElement) {
        main.innerHTML = `Tere`;
        this.main = main;
    }
    public readonly destroy = () => {

    }
}
export { Page };