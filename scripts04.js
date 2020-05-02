/* condiciones multiples*/
// if (5>2 && 2>1){
//     console.log('Paso la primera condicion')
// }else if (2===2 && 4<1){
//     console.log('Mundi')
// }else if ('a' === 'a' || 5<1){
//     console.log('XD')
// }

/* condiciones anidadas*/
// if (5>2){
//     if(2>1){
//         console.log('Paso la primera condicion anidada')
//     }
// }



let age = parseInt(prompt('Ingresa tu edad:'),10)
/*Si age valiera NaN seria False y entraria al else porque
lo estamos parseando a entero*/
if(age === NaN) {
    if(age>18){
        alert('Usted es mayor de edad')
    }else {
        alert('Usted es menor de edad')
    }
}else{
    age = parseInt(prompt('Tu edad deber ser un numero:'),10)
    if(age>18){
        alert('Usted es mayor de edad')
    }else {
        alert('Usted es menor de edad')
    }
}
console.log(age)

