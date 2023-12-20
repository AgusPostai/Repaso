const numerosAleatorios = Array.from({ length: 25 }, () => Math.floor(Math.random() * 100) + 1);

function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz";
    } else if (numero % 3 === 0) {
        return "Fizz";
    } else if (numero % 5 === 0) {
        return "Buzz";
    } else {
        return numero.toString();
    }
}

for (let i = 0; i < numerosAleatorios.length; i++) {
    console.log(fizzBuzz(numerosAleatorios[i]));
}