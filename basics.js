
console.log("hello");
console.log("hello2");

(function () {
    'use strict'
    //minden amit ide írok az strict mode-ban fog futni
    //a strict mode szigorubb szabályokkal futattja a javascript kódot, és több hibát fog kiírni a böngésző amit enélkül nem tenne meg
    var szoveg2 = "valami"
    console.log(szoveg2);
    //erre nem kapunk hibát mert a var kulcsszóval deklarált változót újradeklarálhatjuk
    var szoveg2 = "valami";
    
    let szoveg3 = "szoveg3 ezt let-el hoztuk létre";
    console.log(szoveg3);
    //a let kulcsszóval létrehozott változókat nem lehet újradeklarálni, a következő sort ha nem kommentezzük ki , hibát kapunk:
    //let szoveg3 = "szoveg3 ezt let-el hoztuk létre"
    
    //ez egy értékadás nem deklarálás
    szoveg3 = "új értéket kap a szoveg3";
    //a console.log függvény, aminek átadjuk a szove3 változót
    //a console.log egy más ember által írt kód, ami azt csinálja
    // a neki adott változóval, hogy kiírja a console-ra
    console.log(szoveg3);
    
    //kiírhatunk egyszerre szoveget és válozót is:
    let szam1= 94;
    console.log("a szam1 valtozo értéke" +szam1)
    
}); //itt van vége a strict mode-nak, ez után már nem fog strict mode-ban futni a kód
// implicit global változó lesz a szoveg
// global: minden változó mindenhol elérhető lesz a kódban
// implicit global változót lehetőleg ne használjunk!
szoveg = "3";

console.log(szoveg);