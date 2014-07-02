/**
 * Created by Prabhakarana on 7/2/2014.
 */
function loadUser() {
    var template = $('#template').html();
    Mustache.parse(template);
    var person = {
        "name": {
            "first": "Prabhakaran",
            "last": "Anbazhagan"
        },
        "age": "30"
    };
    var rendered = Mustache.render(template, person);
    $('#target').html(rendered);
}

$(window).on('load', loadUser);