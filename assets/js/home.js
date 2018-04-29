console.log('App running');

$(function(){

    /*******************************/
    //          ON LOAD
    /*******************************/
    var arrayCat = [["website","language"], ["social media","group"], ["email","email"], ["development","code"], ["confidential","security"], ["wifi","rss_feed"], ["work & studies","work"], ["other","devices_other"]];
    var content = "";
    for(i=0; i<arrayCat.length; i++){
        content += '<div class="home-btn-container">';
        content += '<button id=btn-'+arrayCat[i][0]+' class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored btn-categories">';
        content += '<div class="cat-title">';
        content += '<i class="material-icons">'+arrayCat[i][1]+'</i>'+arrayCat[i][0];
        content += '</div>';
        content += '<div class="cat-number">1</div>';
        content += '</button>';
        content += '</div>';
    }
    $('#home').append(content);

    setTimeout(function(){ 
        $('.cs-loader').fadeOut();
    }, 3000);
    setTimeout(function(){ 
        $('#home').fadeIn('slow');
    }, 3500);

});
