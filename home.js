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
});
