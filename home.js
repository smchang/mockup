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

    $('#searchIcon').button();
    $('#search').keypress(function(evt){
        if(evt.which==13){
            showSearchResults($('#search').val());
        }
    });
    $('#searchIcon').click(function(){
        showSearchResults($('#search').val());
    });

    $('#passwordPrompt').dialog({
        autoOpen: false,
        height:300,
        width:450,
        modal: true,
        buttons:{
            "Join":function(){
                $('#promptError').css('visibility','visible');
            },
        Cancel: function(){
                    $(this).dialog('close');
                }
        },
        close:function(){
                  $('#inviteError').css('visibility','hidden');
              }
    });

    var showSearchResults = function(query){
        $('#yourResults').append("Your Tournaments:\<br/\>");
        $('#yourTournaments').children().each(function(ind, elt){
            if(ind!=0 && $(elt).attr("name")!=query){
                $(elt).remove();
            }
        });
        if($('#yourTournaments').children().length==1){
            $('#yourResults').append('No matches for "'+query+'" in your tournaments');
        }
        $('#globalResults').append("All Tournaments:\<br/\>");
        if(query.split(' ')[0].toLowerCase()==="office"){
            $([1,2,3]).each(function(ind,elt){
                var link = $('<a href="roundrobin.html">');
                link.addClass("listingLink");
                if(ind>0){
                    link.addClass("private");
                }
                var tempListing = $('<div>');
                tempListing.addClass('tournament');
                tempListing.addClass('listing');
                var tempInfo = $('<div>');
                tempInfo.attr('id','officeIcon'+elt);
                tempInfo.addClass("icon icon3");
                tempListing.append(tempInfo);
                tempListing.append('Office Ping Pong '+elt);
                link.append(tempListing);
               
                $('#allTournaments').append(link);
                if(ind>0){
                    $('.private').click(function(evt){
                        evt.preventDefault();
                        $('#passwordPrompt').dialog('open');
                    });
                }
            });
        }
    }    
});
