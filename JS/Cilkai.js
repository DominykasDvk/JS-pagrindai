// ciklas FOR 1 uzduotis:
/*
const n = Number.parseInt(prompt('Kiek dienų buvo dresuojamas Zinas?'));

let valAll = 0; 

for (let i = 1; i <= n; i++) {
    const min = Number.parseInt(prompt(`Kiek Laiko buvo dresuojamas katinas Zinas per ${i} dieną?`));
    valAll = valAll + min;
} 
let minPerD = Math.round(valAll / n * 100) /100 ;
console.log("Per " + n + " dienas Zinas buvo treneruojamas " + valAll + " minučių.");
console.log("Vidutiniškai per dieną katinas buvo kamuojamas " + minPerD + " minučių.");
*/
    
// 2 uzduotis:
/*
// b = 4
// d = 5
// n = 3

const b = Number.parseInt(prompt("Kiek pirmaja diena prinoko braškių?"));
const d = Number.parseInt(prompt("Kiek daugiau brakskiu prinoks negu pries tai bususia diena?"))
let n = Number.parseInt(prompt("kiek dienų liko iki Braškių prinokimo?"));

let braskiuIsViso = b;

for (let i = 2; i <= n; i++) {
    let braskiuPerDiena = b + d;
    braskiuIsViso = braskiuIsViso + braskiuPerDiena;
}

alert(`Per ${n} dienas pririnko ${braskiuIsViso} braškės.`);
*/
// 3 uzduotis:
/*
let kp  = Number.parseInt(prompt("Kokia buvo daikto pradine kaina?"));
const n = Number.parseInt(prompt("Kiek buvo pirkeju?"));


for( i = 1; i<= n; i++){
    let didinimas = Number.parseInt(window.prompt(`Kokia prekės kainą pasiūlė ${i} dalyvis?`));
        kp = kp + didinimas;
}
alert(`Galutine kaina ${kp} euru.`);

// 4 užduotis:

const Sk = Number.parseInt(prompt('Įveskite norimą matyti skaičių'));
let dalSuma = 0;

for (let b = 1; b < Sk; b++) {
    if (Sk % b === 0)
    dalSuma += b;
}

if (Sk === dalSuma){ 
    alert('Skaičius Tobulas !');
}else{
    alert('Skaičius nėra tobulas !');
}
*/
// 5 uzduotis:
/*
let N = Number.parseInt(prompt('Įveskite skaiciu:'));
const sriftas = Number.parseInt(prompt('parasykite kiek sifru norite pamatyti?'));

let sum = N;

for (let i = 0; i <= sriftas ; i++) {
    N = N * 10 + N;
    sum = sum + N;
}
alert(`Pirmuju ${sriftas} sekos suma ${sum}.`);
*/

// CIKLAS WHILE:
// 1 uzduotis:
/*
const m = Number.parseInt(prompt('Iveskite pirma skaiciu: '));
const n = Number.parseInt(prompt('Iveskite antra skaiciu: '));

let bmk = m;

while (bmk%n != 0) {
    bmk = bmk + m;
}
alert('Bendras maziausias kartotinis : '+bmk);
*/

//2 uzduotis:
/*
let alga = {
    poMetu: 0,
    poTrijuMen: 0,
    dvigubai: 0,
    daugiauNeiBuvo: 0
};

let x = 1200;
let atliginimas = x;
let y = 400;
let i = 1;

while (true) {
    atliginimas += y;
    if (atliginimas > x * 2) {
        alga.dvigubai = i;
        atliginimas = x;
        i = 1;
        break;
    }
    i++;
}
while (true) {
    atliginimas += y;
    if (i == 3) {
        alga.poTrijuMen = atliginimas;
        atliginimas = x;
        i = 1;
        break;
    }
    i++;
}
while (true) {
    atliginimas += y;
    if (atliginimas >= 4000) {
        alga.daugiauNeiBuvo = i;
        atliginimas = x;
        i = 1;
        break;
    }
    i++;
}
while (true) {
    atliginimas += y;
    if (i == 12) {
        alga.poMetu = atliginimas;
        break;
    }
    i++;
}

alert(`Po 1 metų atlyginimas bus ${alga.poMetu} eur.`);
alert(`Po 3 mėnesių atlyginimas bus ${alga.poTrijuMen} eur.`);
alert(`Po ${alga.dvigubai} mėnesių jo atlyginimas bus daugiau nei dvigubai didesnis.`);
alert(`Po ${alga.daugiauNeiBuvo} mėnesių jo atlyginimas bus nemažesnis nei 4000 eurų.`);
*/

//3 uzduotis:
/*
let sk = Number.parseInt(prompt('Iveskite skaiciu: '));
let atb = 0;
let skaitm = 0;

while (sk > 0) {
    skaitm = sk % 10;
    sk = Math.floor(sk/10);
    atb = atb * 10 + skaitm;
}
alert(atb);
*/

//4 uzduotis
/*
let sk = Number.parseInt(prompt('Iveskite naturalu skaiciu: '));

let arr = [];
let sum = 0; 
let i = 0;

while (sum < sk) {
    sum += i;
    i++;
    arr.push(i);
}

if (sum == sk) {
    alert(arr)
}else{
    alert('Tokios sekos nera !');
}
*/

//5 uzduotis: 
/*
let m = Number.parseInt(prompt('Iveskite pirma skaiciu: '));
let n = Number.parseInt(prompt('Iveskite antra skaiciu: '));

let nat = 0;
let j = 0;

while (j <= m) {
    if (m % j == 0) {
        nat++;
    }
    j++;
    if (j == m) {
        j = 0;
        break;
    }
}

while (j <= n) {
    if (n % j == 0) {
        nat++;
    }
    j++;
    if (j == n) {
        break;
    }
}

if (nat == 2) {
    alert('Priminiai');
}else if(nat > 2){
    alert('Sudetiniai');
}
*/

// 6 uzduotis 
/*
let sk = Number.parseInt(prompt('Iveskite skaiciu: '));
let fak = 1 ; 
let i = 0;

do{
    i++;
    fak = fak * i;
}while(fak < sk);

if (fak == sk) {
    alert(`Skaicius yra ${i} faktorialas`);
}else{
    alert('Skaicius nera faktorialas !');
}
*/

//Ciklai + masyvai:

// 1 Uzduotis:
/*
let apskSpind = [10, 5, 12, 6, 7, 8, 18, 4, 3, 2];
let radiusMax = 0;
let maxApsk = 1;

for (let i = 0; i < apskSpind.length; i++) {
    if (radiusMax < apskSpind[i]) {
        radiusMax = apskSpind[i];
    }else if (radiusMax == apskSpind[i]){
        maxApsk++;
    }
}

alert(`Didžiausio apskritimo spindulys - ${radiusMax}, yra ${maxApsk} tokio dydžio apskritimų.`);
*/

// 2 uzduotis:
/*
let bankas = [2000, 6000, 10000, 500, 300, 600, 800, 900, 250, 200, 850];
let piniguSkaic = 0;

for (let i = 0; i < bankas.length; i++) {
    if (bankas[i] > 1000) {
        piniguSkaic++;
    }
}

alert(`${piniguSkaic} klientu indeliai didesni nei 1000eur.`);
*/

// 3 uzduotis: 
/*
let parleistosPam = [2, 4, 9, 8, 6, 7, 10, 1, 3, 1];

for (let i = 0; i < parleistosPam.length - 1; i++) {
    if (parleistosPam[i] > parleistosPam[i + 1]) {
        parleistosPam = parleistosPam[i + 1];
        let laik = parleistosPam[i];
        parleistosPam[i + 1] = laik;
        i = -1;
    }
}

alert(`Del ligos praleista: ${parleistosPam}.`);
*/

// 4 uzduotis:
/*
let kort = [15, 20, 15, 12, 10, 36, 5, 8, 9, 30];
let lib = [];

for (let i = 0; i < kort.length; i++) {
    let A = kort[i] + i;
    lib.push(A);
}

alert(`Korteliu skaicius skyriuose: ${lib}`);
*/