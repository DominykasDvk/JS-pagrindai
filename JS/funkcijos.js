// 1 uzduotis
/*
let mase = [13.5, 20, 9, 7.2, 5.2, 18];
let kaina = 0.5;

drauguKiekis();

function drauguKiekis () {
    let n = mase.length;
    let kb = 0;
    let k = 0;

    alert(`Stovyklauti vyko ${n} draugai (-ų).`);

    for (let i = 0; i < n; i++) {
        alert(`${i+1} draugo kuprinė sveria ${mase[i]} kilogramų.`);
        kb = kb + mase[i];

        if (mase[i] <= 10) {
            k++;
        }
    }

    alert(`Draugai is viso vežė ${kb} kilogramų.`);
    let s = kb * kaina;
    alert(`Už visą bagažą draugai turės sumokėti ${s} Eurų.`);
    let v = Math.round(kb / n * 100) / 100;
    alert(`Vidutiniškai kiekvienas draugas veš po ${v} kilogramų.`);
    alert(`Pas ${k} keliaujančius (-ų) bagažas buvo ne sunkesnis, nei 10kg.`);
}
*/

// 2 uzduotis:
/*
let u = [7, 6, 7, 9, 5, 3];

olimpiadosUzdaviniai();

function olimpiadosUzdaviniai () {
    let n = u.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum = sum + u[i];
    }
    alert(`${n} olimpiadoje dalyvavę programuotojai išsprendė ${sum} uždavinių.`);
}
*/

// 3 uzduotis: 
/*
let m = [18, 15, 10, 12, 25];

gydytojoPriemimai();

function gydytojoPriemimai () {
    let n = m.length;
    let sum = 0;
    let k = 0;

    for (let i = 0; i < n; i++) {
        sum = sum + m[i];
        if (m[i] > 20) {
            k++;
        }
    }

    let v = Math.round(sum / n * 100) / 100;
    alert(`Pacientai vidutiniškai gydytojo kabinete praleido po ${v} minučių.`);
    alert(`Iš ${n} pacientų, ${k} kabinete praleido ilgiau, nei 20min.`);
}
*/

// 4 uzdavinis
/*
let autobusas = [
    {
        v: 4,
        m: 15,
        k: 50
    },
    {
        v: 2,
        m: 30,
        k: 20
    },
    {
        v: 0,
        m: 15,
        k: 5
    },
];

kelioneAutobusu();

function kelioneAutobusu () {
    let kv = 0;
    let t = 0;
    let k = 0;

    for (let i = 0; i < autobusas.length; i++) {
        kv = kv + autobusas[i].k;
        t = t + Math.round((autobusas[i].v * 60 + autobusas[i].m) / autobusas.length);
        if (autobusas[i].k < 10) {
            k++;
        }
    }
    alert(`${autobusas.length} autobusai(-ų) pervežė ${kv} keleivių.`);
    alert(`Vidutiniškai vienas autobusas kelionėje sugaišta ${t} min.`);
    alert(`${k} autobuse važiavo mažiau, nei 10 žmonių.`);
}
*/

// 5 uzduotis:
/*
let b = 4;
let d = 5;
let n = 3;

braskes();

function braskes () {
    let braskiuIsViso = b;

    for (let i = 2; i <= n; i++) {
    let braskiuPerDiena = b + d;
    braskiuIsViso = braskiuIsViso + braskiuPerDiena;
}
    alert(`Per ${n} dienas prinoko ${braskiuIsViso} braškės.`);
}
*/
// 6 uzduotis: 
/*
let a = 31;
let b = 62;

ledai();

function ledai () {
    let k = 0;
    for (let i = a; i <= b; i++) {
        if (i % 6 == 0) {
            k++;
        }
    }
    alert(`Reikalingas porcijų kiekis: ${k}`);
}
*/

// 7 uzduotis

let skyrius = 8;

knyga();

function knyga() {

    let sum = 0;
    let i = 1;

    while (true) {
        sum = sum + i;
        if (skyrius < sum) {
            sum = skyrius;
            break;
        }
        i++;
    }
    let v = Math.round(skyrius / i * 100) / 100;
    alert(`Tadas visą knygą perskaitys per ${i} dienas.`);
    alert(`Tadas vidutiniškai per dieną perskaitė ${v} skyrius.`);
}
