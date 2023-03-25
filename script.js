//console.log("hello world");

//Opertaory logiczne

/*var x = 2;

console.log(5 + x);
console.log(5 - x);
console.log(5 * x);
console.log(5 / x);
console.log(5 % x); // 2 * 2 = 4  5 - 4 = 1 reszta z dzielenia modulo XD

console.log("x = " + x);

x += 5;
x -= 5;
x *= 5;
x /= 2;
x %= 2;

console.log("x = " + x);

x++;

console.log("x = " + x);

x--;

console.log("x = " + x);*/

// Operatory porówaniania

/*var x = 5 == 5;
console.log(x);
console.log(typeof (x));

console.log("-----");

console.log(5 == "5");
console.log(5 === "5");

console.log(5 != "5");
console.log(5 !== "5");

console.log(5 > 5);
console.log(5 >= 5);

console.log(5 < 5);
console.log(5 <= 5);

//Operatory logiczne

console.log("-----");

console.log(true || false); // 'or' 'lub'
console.log(true && false); // 'i' 'and'
console.log(!5 > 0); // 'not' 'nie'

console.log(true || true && !false); //! to jest pierwsze && ma pierszeństwo nad ||
*/

// instrukcje warunkowe if

//document.getElementById("result").innerHTML = "Hello World";

//var result = document.getElementById("result");

/*var x = 15, y = 10;
var age = 1;
var num = 0;
*/
//instrukcja trój argumentowa

/*age >= 18 ? alert("Pełnoletni") : alert("NIepełnoletni");

if (num > 0) {
    result.innerHTML = "Dodatnia";
}
else if (num == 0) {
    result.innerHTML = "Równa 0";
}
else {
    result.innerHTML = "Ujemna";
}
*/

// Instrukcje wyboru Switch

/*var box = document.getElementById("result");

var color = 10;

switch (color) {
    case 0: //if (color == "red")
        box.style.backgroundColor = "red";
        box.style.color = "white";
        break;
    case 1: // else if (color == "blue")
        box.style.backgroundColor = "blue";
        box.style.color = "white";
        break;
    case 2: //else if (color == "green")
        box.style.backgroundColor = "green";
        box.style.color = "white";
        break;
    default:        //else
        box.style.backgroundColor = "grey";
        box.style.color = "white";
        break;
}
*/

// Pętle
/*
var box = document.getElementById("result");
var box2 = document.getElementById("result2");
var box3 = document.getElementById("result3");
// While

var i = 0;

while (i < 10) {
    box.innerHTML += i + " Test<br>";
    i++;
}

// Do while

var j = 0;

do {
    box2.innerHTML += j + " Test<br>";
    j++;
}
while (j < 10);

// for

for (var k = 0; k < 10; k++) {
    box3.innerHTML += k + " Test<br>";
}
*/


// instrukcje skoku
/*
var box = document.getElementById("result");
var box2 = document.getElementById("result2");


//continue

loop1:
for (var j = 0; j < 3; j++) {

    loop2: // < --etykieta
    for (var i = 0; i < 10; i++) {

        // box.innerHTML += "- <br>";
        if (i > 5) {
            continue loop1;
        }
        if (i % 2 == 1) {
            continue;
        }
        box.innerHTML += j + " - " + i + "<br>";
    }
}


// break

top:
for (var j = 0; j < 3; j++) {

    inner:
    for (var i = 0; i < 10; i++) {

        if (i == 5) {
            break top;
        }
        box2.innerHTML += j + " - " + i + "<br>";
    }
}

skip:
{
    alert("warning!");
    break skip; // pomija drugi komunikat
    alert("skip!");
}
*/

// Funkcje
/*
var result = document.getElementById("result");

add(5);
add(10, 20);
add(10, 20, 5);


function add(a, b) {

    if (typeof (b) === "undefined") {
        b = 1;
    }
    if (arguments.length < 3)
        result.innerHTML += a + " + " + b + " =  " + (a + b) + "<br>";
    else
        result.innerHTML += a + " + " + b + " + " + arguments[2] + " = " + (a + b + arguments[2]) + "<br>";
}

function hello() {
    alert("hello world!");
}

*/
/*
var result = document.getElementById("result");


//return

function add(a, b) {
    return "Wynik = " + (a + b);
}

var sum = add(5, 5);
result.innerHTML += "suma = " + sum + "<br>";
//alert(add(10, 30));

// rekurencja

function silnia(n) {
    if (n == 1)
        return 1;
    else
        return n * silnia(n - 1)
}

result.innerHTML += "silnia = " + silnia(5);

*/

//Tablice
/*
var result = document.getElementById("result");

var tab = new Array("Poniedziałek", "Wtorek", "Sroda");

result.innerHTML += tab[0] + "<br>";
tab[3] = "Czwartek";
result.innerHTML += tab[3] + "<br>";
tab[4] = "Piatek";
tab[5] = "Sobota";
tab[6] = "Niedziela";
result.innerHTML += "Długośc = " + tab.length + "<br>";

console.log(tab);


result.innerHTML += "----------" + "<br>";

for (var i = 0; i < tab.length; i++) {
    result.innerHTML += tab[i] + "<br>";
}

tab.forEach(x => console.log(x));

var tab2 = new Array(3);
tab2[0] = 10;
tab2[1] = true;
tab2[2] = "JavaScript";
console.log(tab2);

var tab3 = ["Wiosna", "Lato", "Jesień", "Zima"];

console.log(tab3);

var tab4 = (tab.concat(tab2)).concat(tab3);

console.log(tab4);
*/

//Obiekty
/*
var result = document.getElementById("result");

//sposób 1
var adam = {
    name: "Adam", age: 25,
    show() {
        return "Imię: " + this.name + ", wiek " + this.age + "<br>";
    }
};

console.log(adam);
result.innerHTML += adam.show();

result.innerHTML += adam.name;
result.innerHTML += " lat: " + adam['age'] + "<br>";

// sposób 2

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.show = function () {
        return "Imię: " + this.name + ", wiek " + this.age + "<br>";
    }
}

var bartek = new Person("Bartek", 19);
console.log(bartek);
result.innerHTML += bartek.age + "<br>"

var ola = new Person("Ola", 22);

result.innerHTML += ola.show();
*/


// Math i Date
/*
var math = document.getElementById("math");
var date = document.getElementById("date");

//Math


var liczba = 3;//var liczba = prompt("Podaj liczbę:", "0");
math.innerHTML += "liczba: " + liczba + "<br>";
math.innerHTML += "Abs: " + Math.abs(liczba) + "<br>"; // wartośc bezwzględa
math.innerHTML += "Round: " + Math.round(liczba) + "<br>"; //zaokrąglenie
math.innerHTML += "Ceil: " + Math.ceil(liczba) + "<br>"; //zaokrągla do góry
math.innerHTML += "Floor : " + Math.floor(liczba) + "<br>"; // zaokrągla do dołu
math.innerHTML += "Power: " + Math.pow(liczba, 3) + "<br>"; // potęga
math.innerHTML += "Sqrt: " + Math.sqrt(liczba) + "<br>"; // pierwiastek
math.innerHTML += "Pi: " + Math.PI + "<br>"; // pi
math.innerHTML += "Pi zaokrąglone: " + (Math.round(Math.PI * 1000) / 1000) + "<br>";
math.innerHTML += "Random: " + (Math.floor(Math.random() * 10) + 1) + "<br>"; // LOSOWANIE liczba 0d 1 do 10

//Date


date.innerHTML += "Current: " + Date() + "<br>";

var date1 = new Date(1000000); //1.01.1970
date.innerHTML += "Date1:" + date1 + "<br>";

var date2 = new Date(1995, 2, 24, 1, 2, 3);
date.innerHTML += "Date 2: " + date2.getDate() + "." + (date2.getMonth() + 1) + "." + date2.getFullYear() + "<br>";

setTime();
setInterval(setTime, 1000); //odświeżanie czasu zegarka

function setTime() {
    var time = new Date();
    date.innerHTML = "Czas: " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

}
*/

// Prosta gra

console.log(document);

var placeholder = document.getElementById("placeholder");
/*placeholder.innerText = "<b>JavaScript</b>";*/
placeholder.innerHTML = "<b>JavaScript</b>";

var goods = document.getElementsByClassName("good");
console.log(goods);

for (var i = 0; i < goods.length; i++) {
    goods[i].innerText += " -OK";
}

var li = document.getElementsByTagName("li");
console.log(li);

//var tekst = document.getElementsByName();

var newLi = document.createElement("li"); // tworzymy element li
var text = document.createTextNode("Text 6"); // tworzymy nowy text
newLi.appendChild(text); //połączenie elementu i tekstu

var list = document.getElementById("list"); // uchwyt do listy
list.appendChild(newLi);// dodajemy dziecko wyświetlamy je dodajemy element na koniec

var newLi2 = document.createElement("li");
var text2 = document.createTextNode("Tekst 3");
newLi2.appendChild(text2);

