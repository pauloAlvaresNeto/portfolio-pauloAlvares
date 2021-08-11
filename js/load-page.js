// Leitura completa do nosso documento HTML
$(document).ready(function(){

// Monitorar todos os cliques em cima do elemento "a" do nosso documento HTML

$('a').click(function(e){
    e.preventDefault()

    // Criar uma variável local que receba o atributo href do link
    let page = $(this).attr('href')

    $('.modal-title').empty() //Limpar
    $('.modal-body').empty() //Limpar

    // Verificar qual conteúdo eu devo carregar
    switch (page){
       
      // Se for para abrir a page Sobre Min:
      case 'about': 
          $('.modal-title').append('<strong>Sobre Min</strong>')
          $('.modal-body').append(`<p>Me chamo Paulo Alvares Neto, nasci em 2005 na cidade de Lins-SP, e cresci e moro em Getulina-SP.</p>`)
          $('#modal-info').modal('show')
        break
        
          // Se for para abrir a pagina Parcerias:
      case 'partners': 
          $('.modal-title').append('<strong>Parcerias</strong>')
          $('.modal-body').append(`<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quidem asperiores ipsa neque tenetur libero facere, corporis et magni pariatur dignissimos obcaecati voluptate consequuntur ipsam provident dolor odio doloribus quaerat.</p>`)
          $('#modal-info').modal('show')
        break
        
        // Se for para abrir a pagina Trabalhos:
        case 'jobs': 
          $('.modal-title').append('<strong>Trabalhos</strong>')
          $('.modal-body').append(`<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quidem asperiores ipsa neque tenetur libero facere, corporis et magni pariatur dignissimos obcaecati voluptate consequuntur ipsam provident dolor odio doloribus quaerat.</p>`)
          $('#modal-info').modal('show')
          break
        
          // Se for para abrir a pagina Contatos:
        case 'contacts': 
          $('.modal-title').append('<strong>Contatos</strong>')
          $('.modal-body').append(`<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quidem asperiores ipsa neque tenetur libero facere, corporis et magni pariatur dignissimos obcaecati voluptate consequuntur ipsam provident dolor odio doloribus quaerat.</p>`)
          $('#modal-info').modal('show')
        break
    }

  })
  $('span').click(function(e){
    e.preventDefault()

    $('.modal-title').empty() //Limpar
    
    $('.modal-title').append('<strong>Temas Da Página</strong>')
    $('#modal-info').modal('show')

  })
})