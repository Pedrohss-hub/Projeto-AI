var btn = document.querySelector('button.generate_btn')

function born () {
    var year = Number(document.querySelector('input.year_born').value)
    var sex = document.getElementsByName('sex')
    var resp = document.querySelector('p.text_down')
    var gen = ''
    var date = new Date()
    var date = date.getFullYear()
    subt = date-year

    console.log(year)
    console.log(date)
    console.log(subt)

    /*
    if (sex[0].checked) {
        gen = 'Homem'
        resp.innerText = `Um ${gen} de ${subt} anos`
        console.log('Homem')

    } else if (sex[1].checked) {
        gen = 'Mulher'
        resp.innerText = `Um ${gen} de ${subt} anos`
        console.log('Mulher')

    } else {
        console.log('Sexo não Definido')

    }
    */

    switch (sex) {
        case sex[0] == sex[0].checked:
            console.log('homem')
            break
        case sex[1] == sex[1].checked:
            console.log('Mulher')
            break
        default:
            console.log('Gênero Indefinido')
            break
    }

    
}

btn.addEventListener("click", born)