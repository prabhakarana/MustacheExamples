/**
 * Created by Prabhakarana on 7/2/2014.
 */
function loadUser() {
    var template = $('#template').html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, {name: "Prabhakar"});
    $('#target').html(rendered);
}

$(window).on('load', loadUser);