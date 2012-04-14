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
            clickable(player);
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

    var clickable = function(elt){
        $(elt).click(function(){
            var box = $(elt).children()[0];
            var checked = box.checked;
            if(checked){
                box.checked=false;
            }else{
                box.checked=true;
            }
        });

    }

    $('.player').each(function(ind, elt){
        clickable(elt);    
    });

});
