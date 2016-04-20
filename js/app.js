$(document).ready(function() {
    $(".link").click(function() {
        var loc = $(this).attr("alt");
        loc = loc+".html";
        $.get( loc, function( data ) {
            $( ".modal" ).html(data).fadeIn();
        })
    })
});