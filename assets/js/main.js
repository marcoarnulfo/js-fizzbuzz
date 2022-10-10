
const listElement = document.getElementById("list")

//Scrivi un programma che stampi in console i numeri da 1 a 100,
for (let index = 1; index < 101; index++) {
    console.log(index);
    const li = document.createElement("li")
    li.append(index)
    listElement.append(li)

    if (index % 3 == 0 && index % 5 == 0) {
        li.innerHTML = "FizzBuzz"
        console.log("FizzBuzz")
    }
    // SE multipli di 3, stampa Fizz
    else if (index % 3 === 0) {
        console.log("Fizz")
        li.innerHTML = "Fizz"
    }
    // ALTRIMENTI SE multipli di 5, stampa Buzz
    else if (index % 5 === 0) {
        console.log("Buzz")
        li.innerHTML = "Buzz"
    }
    // ALTRIMENTI  per i numeri sia multipli di 3 e di 5, stampi FizzBuzz
    
}

