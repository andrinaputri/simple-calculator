//function
//1. declaration
//2. expression

//1. declaration
/*
function name(parameter){
  code block;
}
*/
function sayHello(){
  return "Hello World";
}
console.log(sayHello());

function sapaName(name){
  return "My name is " + name;
}
console.log(sapaName("Nina"));
console.log(sapaName("Diva"));

//menghitung luas persegi panjang menggunakan function
//luas = panjang * lebar

function persegiPanjang(Panjang, Lebar){
  let luas = Panjang * Lebar;
  return "Luas persegi panjang adalah " + luas;
}
console.log(persegiPanjang(4, 5));
console.log(persegiPanjang(101, 27));

//menghitung luas segitiga menggunakan function
//luas = 1/2 * alas * tinggi

function luasSegitiga(alas, tinggi){
  let luas = 1/2 * alas * tinggi;
  return "Luas segitiga adalah " + luas;
}
console.log(luasSegitiga(4, 5));
console.log(luasSegitiga(20, 25));

//konversi suhu dari fahrenheit menjadi celcius menggunakan function
//C = 5/9 * (F-32);

function konversiSuhu(f){
  let rumus = 5/9 * (f - 32);
  return f + "°F" + " = " + rumus + "°C";
}
console.log(konversiSuhu(50));
console.log(konversiSuhu(59));

//2. function expression
const hello = function(){
  return "Hello World"
}
console.log(hello);
console.log(hello());

//1. sapanama
//2. luas persegi panjang
//3. luas segitiga
//4. konversi suhu  

//1.
const sapaNama = function(name){
  return "My name is " + name;
}
console.log(sapaNama("Nina"));


//2.
const persegiPanjang1 = function(Panjang, Lebar){
  let luas = Panjang * Lebar;
  return "Luas persegi panjang adalah " + luas;
}
console.log(persegiPanjang1(101, 27));

//3.
const luasSegitiga1 = function(alas, tinggi){
  let luas = 1/2 * alas * tinggi;
  return "Luas segitiga adalah " + luas;
}
console.log(luasSegitiga1(4, 5));

//4.
const konversiSuhu1 = function(f){
  let rumus = 5/9 * (f - 32);
  return f + "°F" + " = " + rumus + "°C";
}
console.log(konversiSuhu1(59));

//Arrow Function;
const persegiPanjang2 = (panjang, lebar) => "Luas persegi panjang adalah " + (panjang * lebar);
console.log(persegiPanjang2(4, 5));

//1. say Hello
//2. sapa nama
//3. luas segitiga
//4. konversi suhu

//1.
const sayHello1 = () => "Hello World";
console.log(sayHello1());

//2.
const sapaNama1 = (name) => "My name is " + name;
console.log(sapaNama1("Nina"));

//3.
const luasSegitiga2 = (alas, tinggi) => "Luas segitiga adalah " + (1/2 * alas * tinggi);
console.log(luasSegitiga2(4, 5));

//4.
const konversiSuhu2 = (f) => f + "°F" + " = " + (5/9 * (f - 32)) + "°C";
console.log(konversiSuhu2(59));