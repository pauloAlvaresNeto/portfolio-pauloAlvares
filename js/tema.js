$(document).ready(function(){


    $('a').addClass('text-white')
    $('.dropdown-menu').addClass('bg-bold')

    $('.light').click(function(light){
        light.preventDefault()
        //Remover o CSS existente do tem(jumbotron)
        //Seleciono o jumbotron e excluo o CSS existente
        $('.jumbotron').removeClass('bg-jumbotron')
        $('.jumbotron').removeClass('bg-dark')
        $('a').removeClass('text-white')
        $('.dropdown-menu').removeClass('bg-bold')
        //Aplicar a classe CSS que eu desejo
        $('.jumbotron').addClass('bg-light')
        $('a').addClass('text-dark')
        $('.dropdown-menu').addClass('bg-white')
    })

    $('.dark').click(function(dark){
        dark.preventDefault()
        //Remover o CSS existente do tem(jumbotron)
        $('.jumbotron').removeClass('bg-jumbotron')
        $('.jumbotron').removeClass('bg-light')
        $('a').removeClass('text-dark')
        $('.dropdown-menu').removeClass('bg-white')
        //Aplicar a classe CSS que eu desejo
        $('.jumbotron').addClass('bg-dark')
        $('a').addClass('text-white')
        $('.dropdown-menu').addClass('bg-bold')
    })

    $('.primary').click(function(danger){
        danger.preventDefault()
        //Remover o CSS existente do tem(jumbotron)
        //Seleciono o jumbotron e excluo o CSS existente
        $('.jumbotron').removeClass('bg-light')
        $('.jumbotron').removeClass('bg-dark')
        $('a').removeClass('text-dark')
        $('.dropdown-menu').removeClass('bg-white')
        //Aplicar a classe CSS que eu desejo
        $('.jumbotron').addClass('bg-jumbotron')
        $('a').addClass('text-white')
        $('.dropdown-menu').addClass('bg-bold')

    })
})

