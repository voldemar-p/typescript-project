"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const prindi = (sisu) => {
    document.write(`${sisu}<br>`);
};
// prindi(`test`);
/* MUUTUJA - informatsiooni talletamiseks */
/* let arv: number;
let arv2 = 6;
const arv3: number = 7;
let arv4 = arv2 + arv3 + 13;
prindi(arv);
prindi(`${arv2} + ${arv3} + 13 = ${arv4}`);
arv = 2 ** 3 + 5;
prindi(arv);

const tekst = `Tekst` + arv + ` tekst`;
const midagi = 16 + `5`;
prindi(tekst);
prindi(midagi);*/
/* TINGIMUSLAUSE - sooritab tegevusi vastavalt antud tingimustele */
let lampideHulk = 4;
const kasVasakule = lampideHulk === 6 ? true : false;
prindi(kasVasakule);
if (lampideHulk === 6 || kasVasakule) {
    prindi(`pööra vasakule`);
}
else if (lampideHulk <= 6 && kasVasakule) {
    prindi(`pööra paremale`);
}
else {
    prindi(`mine otse`);
}
lampideHulk++;
++lampideHulk;
prindi(lampideHulk);
lampideHulk %= 2;
prindi(lampideHulk);
// a++; a+=1; a=a+1;
/* TSÜKKEL - kordab mingit tegevust kuni tingimused on täidetud */
let summa = 0;
for (let indeks = 0; indeks < 10; ++indeks) {
    summa += indeks;
}
prindi(summa); // summa = 45
let tekst = ` `;
const isik = { eNimi: `Juku`, pNimi: `Tamm`, vanus: 19 }; // objekt
for (const omadus in isik) {
    if (isik.hasOwnProperty(omadus)) {
        tekst += omadus + ` `;
    }
}
prindi(tekst);
const nimekiri = [`Juku`, `Kalle`, `Malle`];
for (const nimi of nimekiri) {
    tekst += nimi + ` `;
}
prindi(tekst);
let arv = 0;
while (arv < 10) {
    arv++;
    if (arv === 6) {
        continue; // jätab vahele, viskab järgmise käsu peale
    }
    else if (arv === 9) {
        break; // katkestab kogu tsükli
    }
    prindi(arv);
}
/* FUNKTSIOON - annab informatsiooni sisestades väljundi, teeb midagi selle informatsiooniga */
function liitmine(arv1, arv2) {
    return arv1 + arv2;
}
prindi(liitmine(2, 3));
(function () {
    prindi(`anonüümne`);
})();
const funk = (sisend) => {
    return sisend * 2;
};
const funk2 = (sisend) => sisend * 2;
prindi(funk2(5));
prindi(funk2(7));
const ristkylikuPindala2D = (punkt1, punkt2) => {
    if (punkt1.x && punkt2.x) {
        return Math.abs((punkt2.x - punkt1.x) * (punkt2.y - punkt1.y));
    }
    return -1;
};
prindi(ristkylikuPindala2D({ x: 5, y: 3 }, { x: 1, y: 1 }));
/* KLASSID - mallid, mille järgi objektile lühitegevusi luua. Annab info pärimise võimaluse (nagu klassid css-is) */
class Isik {
    // private- ei lase avalikult infole juurde pääseda
    // protected- alamklassid saavad ülemklassilt seda omadust pärida
    constructor(uusNimi) {
        this.kysiNimi = () => this.nimi;
        this.nimi = uusNimi;
    }
}
const juku = new Isik(`Juku`);
prindi(juku.kysiNimi());
// tslint:disable-next-line: max-classes-per-file
class Tootaja extends Isik {
    constructor(uusNimi, valdkond) {
        super(uusNimi);
        this.tutvusta = () => `Tere, mina olen ${this.nimi} ja liitun ${this.valdkond}valdkonnaga.`;
        this.valdkond = valdkond;
    }
}
const kalle = new Tootaja(`Kalle`, `arendus`);
prindi(kalle.tutvusta());
/* VALIJAD (dokumendist info leidmiseks) ja SÜNDMUSED (reageerib millegi teise toimumisele) */
prindi(`<button type=button id=nupp>Nupuke</button>
    <button type=button id=nupp>Nupuke2</button>`);
const nupp = document.getElementById(`nupp`);
const nupp2 = document.getElementsByClassName(`nupp2`)[0];
const nupud = document.getElementsByTagName(`button`);
// tslint:disable-next-line: max-line-length
const nupp3 = document.querySelector(`body .nupp2`); // sama nagu css-is millegi valimine (body vms) ning sellele omaduste lisamine
const nupud2 = document.querySelectorAll(`body button`);
if (nupp3) {
    nupp3.innerText = `Muudetud`;
    const tegevus = () => alert(`tere`);
    nupp3.removeEventListener(`click`, tegevus);
}
for (const nupuke of nupud2) {
    nupuke.innerText = `Nuppudest`;
}
/* JAVASCRIPTI TEEGID */
prindi(Number.EPSILON);
const f = parseFloat(`12.2f cm`); // konverdib stringi numbriks
const i = parseInt(`12.2f cm`, 10); // konverdib numbri stringiks
prindi(f);
prindi(i);
prindi(Number.isNaN(i));
prindi(Number.isFinite(12 / 0)); // kontrollib, ega number ei ole lõpmatu
prindi(Number.isInteger(1233225646.545354365)); // kontrollib, kas on tegu numbriga
// tslint:disable-next-line: max-line-length
prindi(Number.isSafeInteger(1233225646.545354365)); // kontrollib, kas arvu pikkus on veebilehitsejale töötlemiseks talutav
prindi(1233225646.545354365);
prindi(1233225646.545354365.toString(16));
prindi(1233225646.545354365.toExponential());
prindi(1233225646.545354365.toFixed(4)); // mitu numbrit peale komakohta kuvab
prindi(123.545354365.toPrecision(4)); // mitu numbrit kuvab
/* MATEMAATIKA */
prindi(Math.PI);
prindi(Math.abs(-12));
prindi(Math.floor(12.67)); // ümarda madalama täisarvuni
prindi(Math.ceil(12.67)); // ümarda kõrgema täisarvuni
prindi(Math.round(12.67)); // ümarda lähima täisarvuni
prindi(Math.trunc(12.67)); // jätab alles vaid täisarvu, eemaldab kõik peale komakohta
prindi(Math.random()); // annab suvalise arvu
prindi(Math.round(Math.random() * 10 - 5));
const rand = (vahemik, minArv) => Math.round(Math.random() * vahemik + minArv);
prindi(rand(10, -5));
prindi(Math.sqrt(16));
prindi(Math.pow(16, 2));
prindi(Math.cos(Math.PI * 2));
prindi(Math.max(2, 34, 5, 5, 75, 23)); // annab väärtuste hulgast suurima
const arvud = [2, 34, 5, 5, 75, 23];
prindi(Math.min(...arvud)); // annab väärtuste hulgast väikseima
/* SÕNED (strings) - sõnalised väärtused  */
const s6ne = ` Tere maailm, kuidas läheb?`;
prindi(s6ne.toLocaleLowerCase());
prindi(s6ne);
prindi(s6ne.includes(`kuidas`)); // kontrollib, kas valitud väärtus esineb sõnes
prindi(s6ne.startsWith(` `)); // kontrollib, kas sõne algab valitud väärtusega
prindi(s6ne.endsWith(`kuidas`)); // kontrollib, kas sõne lõpeb valitud väärtusega
prindi(s6ne.indexOf(`kuidas`)); // annab teada, millal(numbriliselt) valitud väärtus esimest korda sõnes esineb
prindi(s6ne.lastIndexOf(`kuidas`)); // annab teada, millal(numbriliselt) valitud väärtus viimast korda sõnes esineb
prindi(s6ne.search(/kuidas/i)); // otsib sõnest valitud väärtuse osa ning väljastab selle(esimese esinemise paigast)
prindi(s6ne.match(/kuidas/gi)); // otsib sõnest valitud väärtuse osa ning väljastab kõik selle esinemised
prindi(s6ne.trim().split(` `)); // eemaldab sõnest tühimikud
prindi(s6ne.concat(`kuidas `, `tere`));
prindi(s6ne.replace(`kuidas läheb`, `hästi läheb`)); // asendab sõnes ühe väärtuse teisega
prindi(s6ne.slice(10, 15)); // lõikab tekstist välja 10ndast sõnast 15ndani
prindi(s6ne.substr(10, 15)); // lõikab tekstist 10ndast sõnast alates 15 järgmist
prindi(s6ne.charCodeAt(10));
/* MASSIIV (array) - muutuja, mis hoiab endas kindlas järjekorras sarnast informatsiooni */
const rMass = [1, 54, 53, 23];
const massiiv = [1, 3, 43, 543, 34];
massiiv[2] = 4;
prindi(massiiv.pop()); // eemaldab väärtuse massiivi lõpust
massiiv.push(...massiiv); // lisab väärtuse massiivi lõppu
massiiv.unshift(12, 24); // lisab väärtuse massiivi algusesse
massiiv.shift(); // eemaldab väärtuse massiivi algusest
prindi(massiiv.splice(3, 4)); // kustutab valitud väärtused
prindi(massiiv.slice(3, 4)); // lõikab valitud väärtused välja (hilisemalt kopeeritavad)
prindi(massiiv.copyWithin(3, 5)); // lõikab valitud väärtused välja (hilisemalt kopeeritavad)
massiiv.fill(7, 3); // asendab olemasolevad väärtused määratud väärtustega (7), alates mitmendast (3)
prindi(massiiv);
prindi(massiiv.find((value) => value === 5 + 7));
prindi(massiiv.findIndex((value) => value === 7));
prindi(massiiv.filter((value) => value > 7));
prindi(massiiv.reduce((sum, num) => sum + num));
massiiv.sort((a, b) => b - a);
massiiv.reverse();
prindi(massiiv);
prindi(massiiv.join(`; `));
massiiv.forEach((value, index, array) => {
    array[index] = Math.round(Math.random() * value);
});
prindi(massiiv);
prindi(massiiv.length);
/* AEG */
const aeg = new Date(Date.now());
prindi(aeg);
prindi(aeg.getDate());
prindi(aeg.getDay());
aeg.setFullYear(2101);
prindi(aeg);
prindi(aeg.toUTCString()); // 0-ajatsooni aeg (GMT +0)
prindi(aeg.toLocaleTimeString());
prindi(aeg.toTimeString());
/* JSON - muudab muutuja informatsiooni kuju (nt tekstiks), et seda oleks võimalik edasi saata (nt serverisse) */
const punkt3 = { x: 25, y: 30, z: 32 };
/*
{
    "x": 25;
    "y": 30,
    "z": 32
}
*/
const punktTekstina = JSON.stringify(punkt3);
prindi(punktTekstina);
const punktTagasi = JSON.parse(punktTekstina);
prindi(punktTagasi.x);
/* KONSOOL */
console.log(`Tavaline logi`);
console.warn(`Midagi on viltu`);
// console.error(`Panges`);
const miski = 3543435;
console.log(`Hetkeväärtus miskile ${miski}`);
console.log(document);
/*let num = ` `;
console.time();
for (let i = 0; i < 10000000; ++i) {
    num += (24 ** 5 / 7 - i).toString();
}
console.timeEnd();*/ // näitab, kui kaua protsessi laadimine aega võtab
console.clear(); // teeb konsooli puhtaks
/* TRY CATCH - veaga tegelemine programmist väljaspool */
try {
    throw new RangeError(); // otsi viga süsteemist väljaspoolt
}
catch (error) { // leiab vea
    prindi(error.stack);
    prindi(`Unfold`); // tee midagi selle veaga
}
finally { // pakib tagasi kokku, lõpeta programmiväline suhtlemine
    prindi(`Peale katset`);
}
/* ASUKOHT URL */
prindi(location.href); // tagastab terve aadressi
prindi(location.origin);
prindi(location.pathname);
prindi(location.protocol);
prindi(location.host);
prindi(location.hostname);
prindi(location.port);
prindi(location.search);
prindi(location.hash);
/* WINDOW - browseri aken */
prindi(window.innerWidth);
prindi(window.innerHeight);
prindi(window.outerWidth - window.innerWidth);
prindi(window.outerHeight - window.innerHeight);
if (!localStorage.getItem(`time`)) {
    const time = new Date(Date.now());
    localStorage.setItem(`time`, time.getMilliseconds().toString());
}
prindi(localStorage.getItem(`time`)); // kogu veebilehe kasutusega seotud info (talletatakse, kuni manuaalse kustutamiseni)
if (!sessionStorage.getItem(`time`)) { // ühe veebisessiooniga seotid info (veebiakna avamisest kuni selle sulgemiseni)
    const time = new Date(Date.now());
    sessionStorage.setItem(`time`, time.getMilliseconds().toString());
}
prindi(sessionStorage.getItem(`time`));
/* ASÜNKROONNE FUNKTSIOON - läheb käiku peale teisi funktsioone */
const promise = new Promise(resolve => {
    //resolve(prindi(`Tehtud!`));
    setTimeout(() => {
        resolve(console.log(`Tehtud!`));
    }, 200);
});
const afunk = () => __awaiter(this, void 0, void 0, function* () {
    //resolve(prindi(`Tehtud!`));
    yield setTimeout(() => {
        console.log(`Tehtud2!`);
    }, 200);
});
// afunk();
const afunk2 = () => __awaiter(this, void 0, void 0, function* () {
    yield afunk();
    console.log("L6pp2");
});
afunk2();
console.log(`Tere`);
console.log(promise);
const rest = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch(`https://reqres.in/api/users?page=1`);
    const json = yield response.json();
    prindi(`<ul>`);
    for (const isik of json.data) {
        prindi(`<li>${isik.first_name} ${isik.last_name}</li>`);
    }
    prindi(`</ul>`);
});
rest();
//# sourceMappingURL=script.js.map