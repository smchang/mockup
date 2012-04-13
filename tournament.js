var numAdmins = 1;
var numBoots = 0;

$(document).ready(function(){
    var sidebar = $('#adminbar');
    $('#bar').click(function(){
        console.log('expand/collapse sidebar');
    });

    $('#makeAdminBtn').click(function(){
        var selected = $('input:checked');
        var numSelected = selected.length;
        $(selected).each(function(ind, elt){
            if($(elt).parent().hasClass('admin')){
                numSelected--;
            }else{
                $(elt).parent().addClass('admin');
            }
            elt.checked=false;
        });
        numAdmins += numSelected;
        console.log(numAdmins);
/*        $('#playerList').children().each(function(ind, elt){
            if(ind<numAdmins){
                $(elt).addClass('admin');
            }
        });*/
    });
});
