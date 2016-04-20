$(document).ready(function() {
    //show modals
    $(".link").click(function() {
        var loc = $(this).attr("alt");
        loc = loc+".html";
        $.get( loc, function( data ) {
            $( ".modal" ).html(data).fadeIn();
        })
    })
    //dismiss modals
    $(".fa-times").click(function() {
        $(".modal").fadeOut();
    })
});