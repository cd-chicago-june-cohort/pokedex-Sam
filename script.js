//set the src of images to diff links
//step one is setting it to one 

function pokepic(dex) {
    return "<div class='frames'><img class='pokemon' src='http://pokeapi.co/media/img/" + dex + ".png'></div>";
};

function pokedex() {
    var str = "";
    for (var i = 1; i <= 151; i++) {
        str = str + pokepic(i);
    }
    return str;
}

$('document').ready(function () {
    $('#container').html(pokedex());
});