/**
 * Created by Prabhakarana on 7/2/2014.
 */
function loadUser() {
    $.get('templates/template.mst', function(template){
        var rendered = Mustache.render(template, {name: "Prabhakar"});
        $('#target').html(rendered);
    });
}

$(window).on('load', loadUser);