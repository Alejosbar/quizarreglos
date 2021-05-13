/*let datos = ["mango", "Fresa", true, 52, 12.5]
console.log(datos)

datos.reverse[function()]
*/
let array = [1, 500, 230, 40, 4, 65, 28, 32, 45, 1002]
let orden1 = array.sort(function (a, b) { return a - b })
console.log(orden1)

array = [1, 500, 230, 40, 4, 65, 28, 32, 45, 1002]
let orden2 = array.sort(function (a, b) { return b - a })
console.log(orden2)

function borrar() {
    orden1.shift()
    console.log(orden1)
};
	

function unir() {
    unidos = orden1.concat(orden2)
    console.log(unidos)
}
orden1.push(85, 65, 103, 25)
console.log(orden1)