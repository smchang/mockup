$(document).ready(function(){
    var sidebar = $('#adminbar');
    $('#bar').click(function(){
        console.log('expand/collapse sidebar');
    });

    $('#makeAdminBtn').click(function(){
        var selected = $('input:checked');
        $(selected).each(function(ind, elt){
            var player = $(elt).parent();
            $(player).remove();
            $('#adminList').append(player);
            elt.checked=false;
        });
    });
    $('#bootBtn').click(function(){
        var selected = $('input:checked');
        $(selected).each(function(ind, elt){
            var player = $(elt).parent();
            $('#bootedList').prepend(player);
            elt.checked=false;
        });
    });

});
