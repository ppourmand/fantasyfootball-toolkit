$(function() {
    var params = {
        // Request parameters
        format: 'JSON',
        season: '2015REG',
        playerid: '732'
    };

    $.ajax({
        // player id starts at 732
        url: "https://api.fantasydata.net/v3/nfl/stats/JSON/Players?",
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key"," 01c35bafdc1b44f6b555db93e7997b0c");
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
    .done(function(data) {
        alert("yay");
        //console.log("NAME: " + data[0].Name + " FANTASY POSITION: " + data[0].FantasyPosition);
    })
    .fail(function() {
        alert("error");
    });
});
