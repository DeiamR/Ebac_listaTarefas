$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const tarefaFazer = $('#nomeTarefa').val();
        const novaListagem = $('<li class="objetoClick"> </li>');
        $(`<p>${tarefaFazer}</p>`).appendTo(novaListagem);
        $(novaListagem).appendTo('ul');
        $('#nomeTarefa').val('');

        $(document).on('click', 'li.objetoClick', function(){
            $(this).toggleClass('tachado');
        });
    })
})
