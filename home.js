$(document).ready(function(){
    var makeCloseable = function(listing){
        var closeButton = $('<button>');
        closeButton.addClass('closeButton');
        closeButton.html('&times;');
        $(listing).append(closeButton);
    }
    $('.listing').each(function(ind, elt){
//        makeCloseable(elt);
    });

    $('.closeButton').click(function(){
        $(this).parent().remove();
    });
    
    $('#createLink').button();

    $('.listing .button').click(function(){
        $(this).parent().remove();
    });

    var showSearchResults = function(query){
        $('#yourTournaments').children().each(function(ind, elt){
            if(ind!=0 && $(elt).attr("name")!=query){
                $(elt).remove();
            }
        });
    }    
});
