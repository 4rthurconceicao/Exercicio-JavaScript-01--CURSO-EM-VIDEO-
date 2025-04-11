function carregar() {
    var img = window.document.getElementById('image')
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var minu = data.getMinutes()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora}:${minu}`

    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'img/manhã.jpg'
        document.body.style.background = ''
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!}
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#EA8E72'
    } else {
        //Boa Noite!
        img.src = 'img/noite.jpg'
        document.body.style.background = '#2A2B2A'

    }


}




