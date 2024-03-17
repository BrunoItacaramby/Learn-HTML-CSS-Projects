const data = new Date
let diaSemana = data.getDay()
let dia = data.getDate()
let mes = data.getMonth()
let ano = data.getFullYear()
let hora = data.getHours()
let min = data.getMinutes()
let diaTexto
let mesTexto

switch (diaSemana) {
    case 0:
        diaTexto = 'domingo'
        break;

    case 1:
        diaTexto = 'segunda'
        break;

    case 2:
        diaTexto = 'terça'
        break;

    case 3:
        diaTexto = 'quarta'
        break;

    case 4:
        diaTexto = 'quinta'
        break;

    case 5:
        diaTexto = 'sexta'
        break;

    case 6:
        diaTexto = 'sabado'
        break;

    default:
        diaTexto = ''
        break;
}

switch (mes) {
    case 0:
        mesTexto = 'Janeiro'
        break;

    case 1:
        mesTexto = 'Fevereiro'
        break;

    case 2:
        mesTexto = 'Março'
        break;

    case 3:
        mesTexto = 'Abril'
        break;

    case 4:
        mesTexto = 'Maio'
        break;

    case 5:
        mesTexto = 'Junho'
        break;

    case 6:
        mesTexto = 'Julho'
        break;

    case 7:
        mesTexto = 'Agosto'
        break;

    case 8:
        mesTexto = 'Setembro'
        break;

    case 9:
        mesTexto = 'Outubro'
        break;

    case 10:
        mesTexto = 'Novembro'
        break;

    case 11:
        mesTexto = 'Dezembro'
        break;

    default:
        mesTexto = ''
        break;
}

if(min < 9){
    min.toString()
    min = min+0
}

const dataAtual = document.getElementById('container')

function MostrarData() {
    dataAtual.innerHTML = `<h1>${diaTexto},${dia} de ${mesTexto} de ${ano}, ${hora}:${min}</h1>`
}

MostrarData()