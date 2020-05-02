// let answer =prompt ('Escojer un numero del 1 al 5:')

// switch (answer) {
//     case '1':
//         alert('Eres timido')
//         break;
//     case '2':
//         alert('Eres extrovertido')
//         break;
//     case '3':
//         alert('Eres melancolico')
//         break;
//     case '4':
//         alert('Eres triste')
//         break;
//     case '5':
//         alert('Eres feliz')
//         break;
//     default:
//         parseInt(prompt ('Porfa Escojer un numero del 1 al 5:'))
//         break;
// }

let question = prompt(`Cual es la capital del Peru:
a.Montevideo
b.Bogota
c.Lima
d.Quito
e.Sucre
Porfavor escribir la respuesta: 
`).toLowerCase().trim()
let capUruguay=`Montevideo`
let capColombia=`Bogota`
let capPeru=`Lima`
let capBolivia=`Sucre`
let capEcuador=`Quito`

switch (question) {

    case 'a':
        alert(`Incorrecto la capital de Uruguay es ${capUruguay}`)
        break;
    case 'b':
        alert(`Incorrecto la capital de Colombia es ${capColombia}`)
        break;
    case 'c':
        alert('Correcto! La capital del Peru es LIMA, Felicitaciones!')
        break;
    case 'd':
        alert(`Incorrecto la Capital de Ecuador es ${capEcuador}`)
        break;
    case 'e':
        alert(`Incorrecto la capital de Bolivia es ${capBolivia}`)
        break;
    default:
        alert('Te equivocaste!')
        break;
}