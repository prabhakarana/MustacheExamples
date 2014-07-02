/**
 * Created by Prabhakarana on 7/2/2014.
 */
function loadUser() {
    var template = $('#template').html();
    Mustache.parse(template);
    var test = {
        "beatles": [
            { "firstName": "John", "lastName": "Lennon" },
            { "firstName": "Paul", "lastName": "McCartney" },
            { "firstName": "George", "lastName": "Harrison" },
            { "firstName": "Ringo", "lastName": "Starr" }
        ],
        "name": function(){
            return this.firstName + " " + this.lastName;
        }
    };
    var rendered = Mustache.render(template, test);
    $('#target').html(rendered);
}

$(window).on('load', loadUser);