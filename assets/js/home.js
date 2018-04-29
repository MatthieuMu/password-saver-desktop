console.log('App running');

$(function(){

    /*******************************/
    //          ON LOAD
    /*******************************/
    var arrayCat = [["website","language"], ["social media","group"], ["email","email"], ["development","code"], ["confidential","security"], ["wifi","rss_feed"], ["work & studies","work"], ["other","devices_other"]];
    var content = "";
    for(i=0; i<arrayCat.length; i++){
        var query = find_by_category(arrayCat[i][0]);
        console.log(query);
        content += '<div class="home-btn-container">';
        content += '<button category='+arrayCat[i][0]+' class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored btn-categories">';
        content += '<div class="cat-title">';
        content += '<i class="material-icons">'+arrayCat[i][1]+'</i>'+arrayCat[i][0];
        content += '</div>';
        content += '<div class="cat-number">'+query.length+'</div>';
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

    /*******************************/
    //     btn-categories on click
    /*******************************/

    $('.btn-categories').on('click', function () {
        var category = $(this).attr('category');

        // // Gestion de l'affichage du résultat dans le tableau
        // var tableContent = appendContent(fetchResult);

        // // Gestion de l'affichage du résultat dans le tableau

        // $('#table-content').html(tableContent);

        setTimeout(function () {
            $('#home').fadeOut('slow');
        }, 500);
        setTimeout(function () {
            // $('#back').show();
            $('.mdl-layout-title').html(category);
            $('#section-content').fadeIn('slow');
            $('#table-content').fadeIn('slow');
        }, 1000);

    });

    // CreateForm POST
    $('#btn-add').on('click', function () {
        var formContent = appendFormPost();
        $('.mdl-dialog__content').html(formContent);
    });

    // Submit POST
    $('#submit-post').on('click', function () {
        var category = $('#app-title').text();

        var key = [];
        var val = [];
        var postObject = {};
        postObject["category"] = category;

        var inputPost = $('.input-post');
        inputPost.each(function () {
            key.push($(this).attr('name'));
            val.push($(this).val());
        });

        for (var i = 0; i < key.length; i++) {
            if (key[i] == "password")
                postObject[key[i]] = encrypted(val[i]);
            else
                postObject[key[i]] = val[i];
        }

        console.log(postObject);

        store_data();

    });

});
