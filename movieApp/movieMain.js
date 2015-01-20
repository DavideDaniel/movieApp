var movies = [ "Interstellar", "Boyhood", "Control", "Whiplash", "Nightcrawler", "Gloria", "Gravity",
    "Her", "Skyfall", "The Imitation Game", "Kill Bill: Vol. 1",
    "Kill Bill: Vol. 2"
]

// var userMovies = [];
// var searchedMovies = [];


var xhr = new XMLHttpRequest();

var createFlipPanels = function () {
    // Select main div
    var main = document.querySelector( "div.main" );
    // create section
    var section = document.createElement( "section" )
    $( section )
        .appendTo( main )
    // create inside div to hold flipping divs
    var insidePanel = document.createElement( "div" )
    $( insidePanel )
        .addClass( "inside panel" )
    // $(insidePanel).attr("id", "'m" + index + "'") // this works for looping FYI
    $( section )
        .append( insidePanel );
    // create 2 divs to hold front and back divs - the divs will flip inside these
    var posterDiv = document.createElement( "div" )
    $( posterDiv )
        .addClass( "poster" )
    $( posterDiv )
        .appendTo( insidePanel )
    var infoDiv = document.createElement( "div" )
    $( infoDiv )
        .addClass( "movieInfo" )
    $( infoDiv )
        .appendTo( insidePanel )
    // create 2 divs to hold front and back content
    var frontDiv = document.createElement( "div" )
    $( frontDiv )
        .addClass( "content front" )
    $( frontDiv )
        .appendTo( posterDiv )
    var backDiv = document.createElement( "div" )
    $( backDiv )
        .addClass( "content back" )
    $( backDiv )
        .appendTo( infoDiv )

    // create img items in here
    var img = document.createElement( "img" )
    $( img )
        .addClass( "image" )
        .appendTo( frontDiv );

    // create back content
    var hTitle = document.createElement( "h3" )
    $( hTitle )
        .addClass( "title" )
    $( hTitle )
        .appendTo( backDiv )
    var hYear = document.createElement( "h2" )
    $( hYear )
        .addClass( "year" )
    $( hYear )
        .appendTo( backDiv )
    var hDirector = document.createElement( "h3" )
    $( hDirector )
        .addClass( "director" )
    $( hDirector )
        .appendTo( backDiv )
    var hActors = document.createElement( "h3" )
    $( hActors )
        .addClass( "actors" )
    $( hActors )
        .appendTo( backDiv )
    var hRating = document.createElement( "h3" )
    $( hRating )
        .addClass( "rating" )
    $( hRating )
        .appendTo( backDiv )
    var hPlot = document.createElement( "h2" )
    $( hPlot )
        .addClass( "plot" )
    $( hPlot )
        .appendTo( backDiv )

}

movies.forEach( function () {
    createFlipPanels()
    $( ".front" )
        .click( function () {
            $( '.inside.panel' )
                .addClass( 'flip' );

        } )

    $( ".back" )
        .click( function () {
            $( ".inside.panel" )
                .removeClass( 'flip' );
        } )
} )


// make a function and pass the img in here to get it to work
var displayMovie = function ( img, title, year, actors, director, plot, rating ) {
    var url = "http://omdbapi.com/?t=" + movies[ i ]
    var xhr = new XMLHttpRequest();
    xhr.open( "GET", url );

    xhr.addEventListener( 'load', function () {
        var d = xhr.responseText
        var parsed = JSON.parse( d );
        console.log( parsed.Poster );
        $( img )
            .attr( "src", parsed.Poster )
        $( title )
            .text( parsed.Title )
        console.log( parsed.Title );
        $( year )
            .text( parsed.Year )
        $( actors )
            .text( parsed.Actors )
        $( director )
            .text( parsed.Director )
        $( plot )
            .text( parsed.Plot )
        console.log( parsed.Plot );
        $( rating )
            .text( parsed.Rated )

        // stupid while loop
        // while ( counter >= movies.length ) {
        // counter = 0;
        // }
    } )
    xhr.send();
}

var allImg = document.querySelectorAll( "img" )
var allTitle = document.querySelectorAll( ".title" )
var allYear = document.querySelectorAll( ".year" )
var allDirector = document.querySelectorAll( ".director" )
var allActors = document.querySelectorAll( ".actors" )
var allPlot = document.querySelectorAll( ".plot" )
var allRating = document.querySelectorAll( ".rating" )

// OMG for loop wins! =D
for ( var i = 0; i < allImg.length; i++ ) {
    displayMovie( allImg[ i ], allTitle[ i ], allYear[ i ], allActors[ i ],
        allDirector[ i ], allPlot[ i ], allRating[ i ] )

};


$( ".main" )

.onepage_scroll( {

    direction: "horizontal",
    easing: "ease",
    animationTime: 1000,
    loop: false

} )
