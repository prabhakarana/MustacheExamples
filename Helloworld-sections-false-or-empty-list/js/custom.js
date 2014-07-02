/**
 * Created by Prabhakarana on 7/2/2014.
 */
function loadUser() {
    var template = $('#template').html();
    Mustache.parse(template);
    var test = {
        "showdata": false
    };
    var rendered = Mustache.render(template, test);
    $('#target').html(rendered);
}

$(window).on('load', loadUser);