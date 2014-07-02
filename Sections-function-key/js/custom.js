/**
 * Created by Prabhakarana on 7/2/2014.
 */
function loadUser() {
    var template = $('#template').html();
    Mustache.parse(template);
    var test = {
        "name": "Prabhakar",
        "bold": function(){
            return function(text, render){
                return "<b>" + render(text) + "</b>";
            }
        }
    };
    var rendered = Mustache.render(template, test);
    $('#target').html(rendered);
}

$(window).on('load', loadUser);