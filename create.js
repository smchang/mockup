$(document).ready(function(){
    $('#tournamentScope').change(function(){
        if($("input:radio[name='scope']:checked").val()=='private'){
            $('#passwordDiv').css('display','block');
        }
        else{
            $('#passwordDiv').css('display','none');
        }
    });
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
                if($('#users').val().trim()=="" && $('#emails').val().trim()==""){
                    $('#inviteError').css('visibility','visible');
                }else{
                    addMembers($('#users').val(), $('#emails').val());
                    $(this).dialog('close');
                    $('#createStatus').css('visibility','visible');
                    $('#createStatus').text('Invites Sent');
                }
            },
        Cancel: function(){
                    $(this).dialog('close');
                }
        },
        close:function(){
                  $('#inviteError').css('visibility','hidden');
                  console.log("closing");
              }
    });

    $('#inviteBtn').click(function(){
        console.log("invite members");
        $('#users').val('');
        $('#emails').val('');
        $('#inviteForm').dialog("open");
    });

    $('#createBtn').click(function(){
        console.log($('#name').val().trim());
        console.log($('#type').val());
        if($('#name').val().trim()==""){
            $('#createStatus').text('Please enter a name for tournament');
            $('#createStatus').css('visibility','visible');
            $('#createStatus').css('color','red');
        }else if($('#type').val()=="none"){
            $('#createStatus').text('Please select tournament type');
            $('#createStatus').css('visibility','visible');
            $('#createStatus').css('color','red');
        }else{
            $('#createStatus').text('Tournament Created');
            $('#createStatus').css('visibility','visible');
            $('#createStatus').css('color','black');
            $('#createBtn').remove();
            var updateBtn = $('<button id="updateBtn">');
            updateBtn.text("Update Tournament Info");
            updateBtn.click(function(){
                $('#createStatus').text("Tournament Information Updated");
            });
            $('#left').append(updateBtn);
        }
    });



//    $('#inviteBtn').button();
//    $('#createBtn').button();
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
