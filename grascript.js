//Prosta gra

var input = document.getElementById("input");
var button = document.getElementById("button");
var answer = document.getElementById("answer");
var list = document.getElementById("list");
var i = 0;
var sprawdzamy = document.getElementById("sprawdzamy");



//losowanie i zapamietanie liczby

var los = Math.floor(Math.random() * 10) + 1;
//alert(los);

button.addEventListener("click", sprawdz);
const tab = [];

function sprawdz() {

    var value = Number(input.value); // sprawdzamy czy to liczba
    if (Number.isInteger(value) && value >= 1 && value <= 10)// sprawdzamy czy liczba jest całkowita
    {
        //window.open('data:text/csv;charset=utf-8,' + value);
        i++;
        console.log("wybranna liczba " + value);



        if (los > value) {
            answer.innerHTML = "Wylosowana liczba jest większa od twojej!"; //zmiana --- na liczbe
        }
        else if (los < value) {
            answer.innerHTML = "Wylosowana liczba jest mniejsza od twojej!";
        }
        else {
            answer.innerHTML = "Brawo !!! Zgadłeś za " + i + "razem";


            answer.classList.add("good");
            button.innerHTML = "Odśwież";
            button.removeEventListener("click", sprawdz);// usuwamy opcje wyszukiwania kolejnej liczby
            button.addEventListener("click", odswiez);

        }


        if (tab.indexOf(value) != -1) {  // sprawdzamy czy wartosc sie nie powtarza 
            i--;
        }
        else {
            var li = document.createElement("li"); // tworzymy element li
            list.appendChild(li); //dodajemy dziecko xD 
            tab.push(value);// dodajemy wartość do tablicy
            console.log(tab); // wyswietlamy wartosc w konsoli
            list.lastChild.innerHTML = i.toString() + ": " + value;// dodajemy do listy nasze liczby

        }

    }
    else {
        alert("Błędna liczba!");
    }
}

function odswiez() {
    location.reload();
}


// zrobić zabezpieczenie żeby liczy nie powtarzały się.
// zrobione!