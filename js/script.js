var btn = document.querySelector('button.generate_btn')

function born () {
    var container = document.querySelector('div.container')
    var year = Number(document.querySelector('input.year_born').value)
    var sex = document.getElementsByName('sex')
    var resp = document.querySelector('div.resp')
    var gen = ''
    var date = new Date()
    var date = date.getFullYear()
    var img = document.createElement('img')
    img.setAttribute('class', 'img_gen')
    subt = date-year

    console.log(year)
    console.log(subt)

    if (sex[0].checked) {
        gen = 'Um Homem'
        if (subt < 12) {
            gen = 'Uma Criança'
            img.setAttribute('src', 'img/download.jfif')

        } else if (subt < 19) {
            gen = 'Um Adolescente'
            img.setAttribute('src', 'img/adolescentem.jpg')

        } else if (subt < 55) {
            gen = 'Um Adulto'
            img.setAttribute('src', 'img/adultom.jfif')

        } else {
            gen = 'Um Ancião'
            img.setAttribute('src', 'img/anciaom.jpg')

        }
    
    } else if (sex[1].checked) {
        gen = 'Uma Mulher'
        if (subt < 12) {
            gen = 'Uma Criança'
            img.setAttribute('src', 'img/download.jfif')

        } else if (subt < 19) {
            gen = 'Uma Adolescente'
            img.setAttribute('src', 'img/adolescentef.jfif')
    
        } else if (subt < 55) {
            gen = 'Uma Adulta'
            img.setAttribute('src', 'img/adultof.jpg')

        } else {
            gen = 'Uma Anciã'
            img.setAttribute('src', 'img/anciaf.jpg')
    
        }

    } else {
        console.log('Sexo não Definido')

    }
    container.style.height = '490px'
    resp.style.textAlign = 'center'
    resp.innerHTML = `${gen} de ${subt} anos`
    resp.appendChild(img)

    console.log(`${gen} de ${subt} anos`)
}

btn.addEventListener("click", born)