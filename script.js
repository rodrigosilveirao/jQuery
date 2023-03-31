$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#cancel').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const inputUrlImg = $('urlImage').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src='${inputUrlImg}'/>`).appendTo(novoItem);
        $(
            `<div class='imgLink'
                <a href="${inputUrlImg}" target="_blank title="Ver imagem em tamanho real"
                Ver imagem em tamanho real
                </a>
            </div>`
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#urlImage').val('');
    })

})
