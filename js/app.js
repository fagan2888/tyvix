$(document).ready(function() {
    //show modals
    $(".star").click(function() {
        var pos = $(window).scrollTop();
        var loc = $(this).attr("alt");
        loc = loc+".html";
        $(".scrim").fadeIn(200);
        $.get( loc, function( data ) {
            $( ".modal" ).html(data).fadeIn(200).css("top",pos);
        })
        .done(function() {
                //init mathjax again
                MathJax.Hub.Typeset();
               //dismiss modals
                $(".fa-times").click(function() {
                    $(".modal, .scrim").hide();
                })     
        })
        .fail(function() {
            $(".modal, .scrim").hide();
            alert("Sorry, something went wrong with that request. Please try again");
        })
    })
    //Show intro modal
    $.get( "intro-disclaimer.html", function( data ) {
    $( ".modal" ).html(data).fadeIn(200).css({"top":20,"width":600,"margin-left":-312.5});
    })
    .done(function() {
            //dismiss modals
            $(".fa-times").click(function() {
                $(".modal, .scrim").hide();
            })     
    })
    .fail(function() {
        $(".modal, .scrim").hide();
    })
});