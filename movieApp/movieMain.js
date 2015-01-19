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

        // $( elem )
        // .attr( "src", parsed.Poster )
        console.log( elem );
        posterDisplay( elem, parsed );
        // var nextImg = $( elem ).next();

        // console.log( nextImg );

        if ( elem == lastImg ) {
            firstImg = lastImg.next();
        }
        // posterDisplay( parsed )
        // img1.src = parsed.Poster;
        // img2.src = parsed.Poster;
        // img3.src = parsed.Poster;

        // description.innerText = parsed.Plot;

        // var movie = new movieObj( parsed.Title, parsed.Actors, parsed.Director,
        //     parsed.imdbRating, parsed.Poster, parsed.Plot );

        // movieDB.push( movie )

        // movies.forEach( function ( movItem ) {
        //     if ( movie.title.indexOf( movItem.title ) < 0 ) movieDB.push( movie );
        // } )

        //        if (movie.title == movie.title){
        //     movieDB.splice(movie[i], 1)
        // }   movies[i]

        // };

        // movieDB.forEach( function ( movie ) {
        //     console.log( movie.title );
        // } )

    } )
}


var posterDisplay = function ( elem, parsed ) {
    xhr.addEventListener( 'load', function ( e ) {
        var d = xhr.responseText //comes in in JSON so you will have to parse it
        var parsed = JSON.parse( d );
        $( elem )
            .attr( "src", parsed.Poster )
        // .each( function () {
        // $( this )

        // } )
    } )
}
// function posterDisplay = function (movie, div){
//     var url = " http://omdbapi.com/?t=" + movie;
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.addEventListener('load',function(e){
//         var d = xhr.responseText;
//         var parsed = JSON.parse(d);
//         $(div).attr('src', parsed.Poster)
//     });
//     xhr.send();
// };
// $( "img" ) var posterDisplay = function ( parsed ) {
//     xhr.addEventListener( 'load', function ( e ) {
//             var d = xhr.responseText //comes in in JSON so you will have to parse it
//             var parsed = JSON.parse( d );
//             $( this )
//                 .attr( "src", parsed.Poster )
//             // .each( function () {
//             // $( this )

//             // } )
//         }

var loadNextMovie = function () {

}
var displayInfo = function () {

}
var urlArray = [];
console.log( urlArray );

var movieRequest = function () {
    var input = document.querySelector( "input" )
    var description = document.querySelector( "description" )
    var url = "http://omdbapi.com/?t=" + movies[ counter ]
    urlArray.push( url )
    xhr.open( "GET", url );
    console.log( url );
    loadMovie( firstImg );
    xhr.send();
    counter++
    while ( counter >= movies.length ) {
        counter = 0;
    }

    console.log( counter );
}

// var nextMovie = function(){

// }

$( document )
    .ready( function () {
        // $(movies).each(movieRequest());
        // movies.forEach( function () {
        movieRequest();
        // } )
    } )

$( ".main" )

.onepage_scroll( {

    beforeMove: function ( index ) {
        movieRequest();

    },

    direction: "horizontal",
    easing: "ease",
    animationTime: 300,
    loop: true

} )

$( 'img' )
    .click( function () {
        $( '.inside' )
            .addClass( 'flip' );
    } )

$( '.movieInfo' )
    .click( function () {
        $( '.inside' )
            .removeClass( 'flip' );
    } )