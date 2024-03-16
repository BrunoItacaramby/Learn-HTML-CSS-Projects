function meuEscopo () {
    const form = document.querySelector('.form')
    const dados = {}
    let bg
    const resultado = document.getElementById('resultado')


    function recebeEventoForm (evento) {
        const peso = document.querySelector('#peso')
        const altura = document.querySelector('#altura')

        dados.peso = peso.value
        dados.altura = (altura.value/100)

        const imc = (dados.peso/(dados.altura**2)).toFixed(1)

        if(imc < 18.5 || imc > 30){
            bg = 'rgb(236, 66, 66)' // vermelho
        }else{
            bg = 'rgb(66, 236, 117)' // verde
        }

        resultado.style.display = 'block'
        resultado.style.backgroundColor = `${bg}`
        resultado.innerHTML = `<h2>Seu IMC é: ${imc}</h2>`
        
        console.log(imc)       
        
        evento.preventDefault()
    }

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo()