/*function saludar(person,sexo){}   Es lo mismo que const */
const saludar=(person,sexo)=>{
    let saludo = sexo === 'm'
            ? 'Bienvenido'
            : 'Bienvenida'
        return `${saludo} a Wors ${person}` 
}
console.log(saludar('Alvaro','m'))
console.log(saludar('Sebas','m'))
console.log(saludar('Dayi','f'))
console.log(saludar('Johnny','m'))
console.log(saludar('Esmeraldiusk','f'))

console.log('--------------------------------')

const sum = (a,b) => a + b
console.log(sum(1,2))
console.log(sum(3,2))
console.log(sum(5,2))

console.log('--------------------------------')
/*parametros rest para pasar la cantidad de parametros que quieras*/
const sumar = (...numeros) => {
    let resultado = 0
    for(let i = 0; i<numeros.length ; i++){
        resultado += numeros[i]
    }
    return resultado
}
console.log(sumar(1,2,3,4,5,6,7,8,9))

console.log('--------------------------------')

c = console.log

const multiply = (a,b) => a * b
c(multiply(2,4))

console.log('--------------------------------')

function sumar1 (x) {
    return function(y){
        return x + y
    }
}
c(sumar1(2)(3))

console.log('--------------------------------')

const sumarflecha = x => y => x + y
c(sumarflecha(1)(2))

console.log('--------------------------------')

const dosomething = x => y => x * y
const a = dosomething(2)(2)
const b = dosomething(3)
c(dosomething(a)(b(3)))

console.log('--------------------------------')

let x = 'Hola'
const sayhi = ((saluda, persona) => `${saluda} ${persona}`)(x,'Alvaro')
c(sayhi)

/*funcion anonima*/
setTimeout(()=>{
    alert(`Hola alvarod`)
},100)

console.log('--------------------------------')

/*scope*/
function aument(){
    let numero = 0
    return function () {
        numero++
        c(numero)
    }
}
const incrementar = aument()
incrementar()
incrementar()
incrementar()
incrementar()
incrementar()

console.log('--------------------------------')

let numero1 = 0
function aumentar () {
    numero1++
    c(numero1)
}
aumentar()
aumentar()
aumentar()
