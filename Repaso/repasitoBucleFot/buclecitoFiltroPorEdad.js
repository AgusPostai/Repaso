function fizzBuzz(numero) {
    if (numero < 33 && numero < 66 && numero < 99) {
        return "Menores de todo ";
    } else if (numero< 99 === 0) {
        return "Fizz";
    } else if (numero % 5 === 0) {
        return "Buzz";
    } else {
        return numero.toString();
    }
};