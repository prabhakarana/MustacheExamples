/**
 * Created by Prabhakarana on 7/2/2014.
 */
var person = {
    name: "Prabhakar"
};

$(document).ready(function(){
    var output = Mustache.render("Hello {{name}}!!!",person);
    $('#content').html(output);
});