// <-- MANEIRA MAIS EXTENSA -->

// const data = new Date
// let diaSemana = data.getDay()
// let dia = data.getDate()
// let mes = data.getMonth()
// let ano = data.getFullYear()
// let hora = data.getHours()
// let min = data.getMinutes()
// let diaTexto
// let mesTexto

// switch (diaSemana) {
//     case 0:
//         diaTexto = 'Domingo'
//         break;

//     case 1:
//         diaTexto = 'Segunda-feira'
//         break;

//     case 2:
//         diaTexto = 'Terça-feira'
//         break;

//     case 3:
//         diaTexto = 'Quarta-feira'
//         break;

//     case 4:
//         diaTexto = 'Quinta-feira'
//         break;

//     case 5:
//         diaTexto = 'Sexta-feira'
//         break;

//     case 6:
//         diaTexto = 'Sabado'
//         break;

//     default:
//         diaTexto = ''
//         break;
// }

// switch (mes) {
//     case 0:
//         mesTexto = 'Janeiro'
//         break;

//     case 1:
//         mesTexto = 'Fevereiro'
//         break;

//     case 2:
//         mesTexto = 'Março'
//         break;

//     case 3:
//         mesTexto = 'Abril'
//         break;

//     case 4:
//         mesTexto = 'Maio'
//         break;

//     case 5:
//         mesTexto = 'Junho'
//         break;

//     case 6:
//         mesTexto = 'Julho'
//         break;

//     case 7:
//         mesTexto = 'Agosto'
//         break;

//     case 8:
//         mesTexto = 'Setembro'
//         break;

//     case 9:
//         mesTexto = 'Outubro'
//         break;

//     case 10:
//         mesTexto = 'Novembro'
//         break;

//     case 11:
//         mesTexto = 'Dezembro'
//         break;

//     default:
//         mesTexto = ''
//         break;
// }

// if (min < 10) {
//     min.toString()
//     min = '0' + min
// }

// if (hora < 10) {
//     hora.toString()
//     hora = '0' + hora
// }

// const dataAtual = document.getElementById('container')

// function MostrarData() {
//     dataAtual.innerHTML = `<h1>${diaTexto},${dia} de ${mesTexto} de ${ano}, ${hora}:${min}</h1>`
// }

// MostrarData()

// <--> MANEIRA MAIS COMPACTA E RAPIDA <-->

const h1 = document.querySelector('.container h1')
const data = new Date()



function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta'];
    return diasSemana[diaSemana]
}

function getNomeMes(numeroMes){
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[numeroMes]
}

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function criaData(data){
    const diaSemana = data.getDay()
    const numeroMes = data.getMonth()

    const nomeDia = getDiaSemanaTexto(diaSemana)
    const nomeMes = getNomeMes(numeroMes)

    return(
        `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} - ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    )
}

h1.innerHTML = criaData(data)