let electrodomesticos = ["television", "computadora", "lavarropa", "microonda", "heladera", "freezer"];

const elementos = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);;

    }
}
const extraerPrimerElementoAgregarloAlUltimo = (array) => {
    array.push(array.shift())
}
const agregarUnElementoAlFinalDelarray = (array, elemento) => {
    array.push(elemento);
}
const buscarElemento = (array, elemento) => {
    let existe = false;
    array.forEach(element => {

        if (element == elemento) {
            existe = true;

        }
    });
    if (existe) {
        console.log("producto encontrado");


    } else {
        console.log("producto no encontrado");

    }
}
const unificar = (array) => {
    let string = ""
    array.forEach(element => {
        if (element == array[array.length - 1]) { //verifico que al ultimo elemento no se le agregue el espacio.
            string += element;
        } else {
            string += element + " "; 
        }
    });
    return string;
}


//A)
elementos(electrodomesticos);

//B)
console.log("------------------------");
extraerPrimerElementoAgregarloAlUltimo(electrodomesticos);
console.log("mover el primer elemento a la ultima posicion: ");
//elementos(electrodomesticos)

//C)
console.log("------------------------");
console.log("agregar dos elementos nuevos, una radio y un ventilador: ");
agregarUnElementoAlFinalDelarray(electrodomesticos, "radio")
agregarUnElementoAlFinalDelarray(electrodomesticos, "ventilador")
//elementos(electrodomesticos);

//D)
console.log("------------------------");
console.log(`La cantidad de elementos que contiene el array es de: ${electrodomesticos.length}`);

//E)
console.log("------------------------");
buscarElemento(electrodomesticos, "television")

//F)
console.log("------------------------");
let electrodomesticosString = unificar(electrodomesticos);
console.log(electrodomesticosString);

//G)
console.log("------------------------");
console.log(electrodomesticosString.split(" ").length);

//H)
console.log("------------------------");
let electrodomesticosStringModificado = electrodomesticosString.replace("television", "pantalla");
console.log(electrodomesticosStringModificado);

//I)
console.log("------------------------");
let electrodomesticosNuevoArray = electrodomesticosStringModificado.split(" ")
elementos(electrodomesticosNuevoArray)








