// 1 uzduotis:
/*
let n = 2
let m = 3

if(n>m){
    console.log("Ilgiau aptarnaujamas pirmasis pirkėjas")
}else{
    console.log("Ilgiau aptarnaujamas bus antras pirkėjas.")
} 
*/

// 2 uzduotis naudojant trumpaja if versija:
/*
let n = 2 //(Jono taskai)
let m = 3 //(Povilo taskai)

n>m?
console.log("Turnyrą laimėjo Jonas"):
console.log("Turnyrą laimėjo Povilas");
*/

// 3 uzduotis: 
/*
let m = 200 // Martyno saldainiai
let k = 300 // Karolio saldainiai

if (m>k) {
    console.log("Daugiau saldainių pirko Martynas");
}else{
    console.log("Daugiau saldainių pirko Karolis");
}
*/

// 4 uzduotis:
/*
let olimpMetai = 1896
let metai = 2016 // 2016 olimpiniai
let n = (metai-olimpMetai)/4

if (n%2==0) {
    console.log(n);
}else{
    console.log("Metai neolimpiniai");
}
*/

// 5 uzduotis : 
/*
let l = 45 // 25 // 10 // 5

if (l>30) {
    console.log("Liko dar labai daug laiko!");
}else if (l<30 && l>15){
    console.log("Liko dar nemažai laiko");
}else if (l>=7) {
    console.log("Liko nedaug laiko");
}else{
    console.log("Pamoka baigta!");
}
*/

// 6 uzduotis
/*
let M = 2000 // 1998

if ((M%4==0) && (M%100==0) || (M%400==0) ) {
    console.log(M + " Keliamieji metai");
}else{
    console.log(M + " Paprastieji metai");
}
*/

// 7 uzduotis:
/*
let loterijosBiletas = 850616   //850687 (pralaimejimas)

loterijosBiletas%4==0?
console.log("Laimėjai milijoną!!!"):
console.log("Ne tau Martynai melynas dangus");
*/

// 8 uzduotis
/*
let n=10,p=200, p1=50,p2=50,p3=40,p4=50,p5=20, s=11
let pusl=n*p;
let persk=s*(p1+p2+p3+p4+p5);
if(persk>=pusl){
    console.log("Jonas knygas perskaityti spės.")
}else{
    console.log("Jonas knygų perskaityti nespės.")
} 
*/

// 9 uzduotis:
/*
let n1 = 1 // max 1
let n2 = 1 // max 1
let n3 = 0 // max 1

isvada = n1+n2+n3;
if(isvada<3){
    console.log("Mokinys 10 negaus");
}else{
    console.log("Mokinys 10 gaus :)");
}
*/

// 10 uzduotis:

const k = 850

if (k>4000) {
    console.log("Jolantai geriausiai tiktų pirmos grupės kelionė");
}else if (k<4000 && k>=3000) {
    console.log("Jolantai geriausiai tiktų antros grupės kelionė");
}else if (k<3000 && k>=1000) {
    console.log("Jolantai geriausiai tiktų trečios grupės kelionė");
}else{
    console.log("Jolantai geriausiai tiktų ketvirtos grupės kelionė");
}
