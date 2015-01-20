var movies = [ "Boyhood", "Whiplash", "Nightcrawler", "Gloria", "Gravity",
    "Her", "Skyfall", "The Imitation Game", "Kill Bill: Vol. 1",
    "Kill Bill: Vol. 2"
]

var counter = 0;

var firstImg = $( "#i1" )
    .first();
var lastImg = $( "#i10" )
    .last();

var xhr = new XMLHttpRequest();

var createPosters = function ( posterURL ) {
    function frontHandler() {
        $( '.back' )
            .addClass( 'flip' );
        displayInfo();
    }
    $( "div.front" )
        .each( function () {
            var li = $( "<li>", {
                "class": "image",
                "style": posterURL,
            } );
            $( this )
                .append( li );
            li.click( frontHandler );
        } );

}

var BackHandlers = function ( elem ) {}
$( '.back' )
    .click( function () {
        $( '.image' )
            .removeClass( 'flip' );
    } )

var movieGET = function () {
    var url = "http://omdbapi.com/?t=" + movies[ counter ]
    xhr.open( "GET", url );

    xhr.addEventListener( 'load', function ( e ) {
        var d = xhr.responseText
        var parsed = JSON.parse( d );
        var poster = 'background:url("' + parsed.Poster + '") no-repeat'
        createPosters( poster )
    } )
    xhr.send();
    counter++
    while ( counter >= movies.length ) {
        counter = 0;
    }
}

var generateMovieList = function () {
    // var url = "http://omdbapi.com/?t="
    movies.forEach( function ( name ) {
    // xhr.open("GET", url+name)
    movieGET();
    loadMovie();
    } )
}

var loadMovie = function () {

}

var movieSend = function () {
    xhr.send();
}

var searchMovie = function ( name ) {
    var input = document.querySelector( "input" )
    var safe_url = encodeURI( name )
    var url = "http://omdbapi.com/?t=" + safe_url;
}

// var posterDisplay = function ( elem, parsed ) {
//     xhr.addEventListener( 'load', function () {
//         var poster = 'background:url("' + parsed.Poster + '") no-repeat'
//         console.log( poster );
//         $( elem )
//             .attr( 'style', poster )
//     } )
// }

// var loadNextMovie = function ( elem ) { // Potentially recursive danger!
//     loadMovie( elem )
//     if ( elem == lastImg ) {
//         firstImg = lastImg.next();
//     }

// }

var displayInfo = function ( elem ) {
    xhr.addEventListener( 'load', function ( e ) {

        var d = xhr.responseText //comes in in JSON so you will have to parse it
        var parsed = JSON.parse( d );

    } )
}

$( document )
    .ready( function () {
        generateMovieList();

    } )

$( ".main" )

.onepage_scroll( {

    beforeMove: function ( index ) {

    },
    afterMove: function ( index ) {

    },

    direction: "horizontal",
    easing: "ease",
    animationTime: 500,
    loop: false

} )

$( 'li' )
    .click( function () {
        $( '.back' )
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