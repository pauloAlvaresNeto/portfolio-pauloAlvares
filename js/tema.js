$(document).ready(function(){


    $('a').addClass('text-white')

    $('.btn-light').click(function(light){
        light.preventDefault()
        //Remover o CSS existente do tem(jumbotron)
        //Seleciono o jumbotron e excluo o CSS existente
        $('.jumbotron').removeClass('bg-jumbotron')
        $('.jumbotron').removeClass('bg-dark')
        $('a').removeClass('text-white')
        //Aplicar a classe CSS que eu desejo
        $('.jumbotron').addClass('bg-light')
        $('a').addClass('text-dark')
    })

    $('.btn-dark').click(function(dark){
        dark.preventDefault()
        //Remover o CSS existente do tem(jumbotron)
        $('.jumbotron').removeClass('bg-jumbotron')
        $('.jumbotron').removeClass('bg-light')
        $('a').removeClass('text-dark')
        //Aplicar a classe CSS que eu desejo
        $('.jumbotron').addClass('bg-dark')
        $('a').addClass('text-white')
    })

    $('.btn-primary').click(function(danger){
        danger.preventDefault()
        //Remover o CSS existente do tem(jumbotron)
        //Seleciono o jumbotron e excluo o CSS existente
        $('.jumbotron').removeClass('bg-light')
        $('.jumbotron').removeClass('bg-dark')
        //Aplicar a classe CSS que eu desejo
        $('.jumbotron').addClass('bg-jumbotron')
       

    })
})