var movies = [ "Boyhood", "Whiplash", "Nightcrawler", "Gloria", "Gravity",
    "Her", "Skyfall", "The Imitation Game", "Kill Bill: Vol. 1",
    "Kill Bill: Vol. 2"
]

var counter = 0;

var firstImg = $( "#i1" )
    .first();
var lastImg = $( "#i3" )
    .last();

var xhr = new XMLHttpRequest(); //making an object from a constructor

var loadMovie = function ( elem ) {

    xhr.addEventListener( 'load', function ( e ) {

        var d = xhr.responseText //comes in in JSON so you will have to parse it
        var parsed = JSON.parse( d );

        console.log( elem );
        posterDisplay( elem, parsed );

    } )
}

var searchMovie = function(name) {
    var safe_url = encodeURI()
}




var movieRequest = function () {
    var input = document.querySelector( "input" )
    var description = document.querySelector( "description" )
    var url = "http://omdbapi.com/?t=" + movies[ counter ]


    xhr.open( "GET", url );
    console.log( url );

    xhr.send();
    counter++
    while ( counter >= movies.length ) {
        counter = 0;
    }

    console.log( counter );
}


var posterDisplay = function ( elem, parsed ) {
    xhr.addEventListener( 'load', function ( e ) {
        var d = xhr.responseText //comes in in JSON so you will have to parse it
        var parsed = JSON.parse( d );
        $( elem )
            .css( "background-cover", parsed.Poster )

    } )
}

var loadNextMovie = function ( elem ) { // Potentially recursive danger!
    loadMovie( elem )
    if ( elem == lastImg ) {
        firstImg = lastImg.next();
    }

}

var displayInfo = function ( elem ) {
    xhr.addEventListener( 'load', function ( e ) {

        var d = xhr.responseText //comes in in JSON so you will have to parse it
        var parsed = JSON.parse( d );

    } )
}

// var nextMovie = function(){

// }
$(document).ready(function(){
    loadMovie(firstImg);

})

     

$( ".main" )

.onepage_scroll( {

    beforeMove: function ( index ) {
        loadNextMovie()
    },
    afterMove: function ( index ) {
        movieRequest()

    },

    direction: "horizontal",
    easing: "ease",
    animationTime: 500,
    loop: false

} )



$( '#i1' )
    .click( function () {
        $( '#m1' )
            .addClass( 'flip' );
        displayInfo()
    } )
$( '#i2' )
    .click( function () {
        $( '#m2' )
            .addClass( 'flip' );
        displayInfo()
    } )
$( '#i3' )
    .click( function () {
        $( '#m3' )
            .addClass( 'flip' );
        displayInfo()
    } )
$( '#b1' )
    .click( function () {
        $( '#m1' )
            .removeClass( 'flip' );
    } )
$( '#b2' )
    .click( function () {
        $( '#m2' )
            .removeClass( 'flip' );
    } )
$( '#b3' )
    .click( function () {
        $( '#m3' )
            .removeClass( 'flip' );
    } )

