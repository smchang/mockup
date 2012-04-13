$(document).ready(function(){
    $('#type').change(function(){
        var type = $('#type option:selected').val();
        if(type==='singleElim'){
            $('#preview').css('background','url(graphics/singleElim.png) no-repeat');
        }else if(type==='doubleElim'){
            $('#preview').css('background','url(graphics/doubleElim.png) no-repeat');
        }else if(type==='roundRobin'){
            $('#preview').css('background','url(graphics/grid.png) no-repeat');
        }else{
            $('#preview').css('background','');
        }
        $('#preview').css('background-size','400px 300px');
    });

    $('#inviteForm').dialog({
        autoOpen: false,
        height: 500,
        width: 550,
        modal: true,
        buttons:{
            "Invite Members": function(){
                console.log("inviting members inside dialog");
                addMembers($('#users').val(), $('#emails').val());
                $(this).dialog('close');
            },
        Cancel: function(){
                    $(this).dialog('close');
                }
        },
        close:function(){
                  console.log("closing");
              }
    });

    $('#inviteBtn').click(function(){
        console.log("invite members");
        $('#users').val('');
        $('#emails').val('');
        $('#inviteForm').dialog("open");
    });

    $('#inviteBtn').button();
});

var addMembers = function(users, emails){
    var usernames = users.split(',');
    var addresses = emails.split(',');
    $(usernames).each(function(ind, elt){
        console.log(elt);
        if(elt)
            $('#members').append('<tr><td>'+elt+'</td><td>(invited)</td></tr>');
    });
    $(addresses).each(function(ind, elt){
        console.log(elt);
        if(elt)
            $('#members').append('<tr><td>'+elt+'</td><td>(invited)</td></tr>');
    });
}
