const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum };
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
module.exports = {sum, fromEuroToDollar}

 const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * (fromEuroToDollar);
    return valueInYen
 }
 module.exports = {sum, fromEuroToDollar, fromDollarToYen}

 const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * (fromDollarToYen);
    return valueInPound
 }
 module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}