var btn = document.querySelector('button.generate_btn')

function born () {
    var year = Number(document.querySelector('input.year_born').value)
    var sex = document.getElementsByName('sex')
    var resp = document.querySelector('div.text_down')
    var gen = ''
    var date = new Date()
    var date = date.getFullYear()
    var img = document.querySelector('img.img_ger')
    subt = date-year

    console.log(year)
    console.log(subt)

    if (sex[0].checked) {
        gen = 'Um Homem'
        if (subt < 12) {
            gen = 'Uma Criança'
            img.setAttribute('src', 'download.jfif')

        } else if (subt < 19) {
            gen = 'Um Adolescente'
            img.setAttribute('src', 'adolescente m.jpg')

        } else if (subt < 55) {
            gen = 'Um Adulto'
            img.setAttribute('src', 'adulto m.jfif')

        } else {
            gen = 'Um Ancião'
            img.setAttribute('src', 'aciao m.jpg')

        }
    
    } else if (sex[1].checked) {
        gen = 'Uma Mulher'
        if (subt < 12) {
            gen = 'Uma Criança'
            img.setAttribute('src', 'download.jfif')

        } else if (subt < 19) {
            gen = 'Uma Adolescente'
            img.setAttribute('src', 'adolescente f.jfif')
    
        } else if (subt < 55) {
            gen = 'Uma Adulta'
            img.setAttribute('src', 'adulto f.jpg')

        } else {
            gen = 'Uma Anciã'
            img.setAttribute('src', 'ancia f.jpg')
    
        }

    } else {
        console.log('Sexo não Definido')

    }

    resp.innerHTML = `${gen} de ${subt} anos`
    img.appendChild(img)
}

btn.addEventListener("click", born)