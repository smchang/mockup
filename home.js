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
        if(query.split(',')[0]==="office"){
            $([1,2,3]).each(function(ind,elt){
                $('#allTournaments').append('<a href="roundrobin.html" name="office'+elt+'" class="listingLink"><div class="tournament listing"><div id="officeIcon'+elt+'" class="icon icon3"></div>Office Ping Pong '+elt+'</div></a>');
                console.log($('#allTournaments').children()[1]);
                $($('#allTournaments').children()).click(function(evt){
                    evt.preventDefault();
                });
            });
        }
    }    
});
