var quotes = [

    "In a hole in the ground there lived a hobbit",
    'May the wind under your wings bear you where the sun sails and the moon walks.',
    'May the hair on your toes never fall out!',
    'The road goes ever on and on',
    'A safe fairyland is untrue to all worlds.',
    'If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.',
    'Your lullaby would waken a drunken goblin!',
    'It seemed like all the way to tomorrow and over it to the days beyond.',
    'The quiet was so deep that their feet seemed to thump along while all the trees leaned over them and listened.',

    ]
    

var btn = document.getElementById( 'newQuote' );
btn.addEventListener( 'click', function(){
    
var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    document.getElementById( 'twitterShare' ).href="https://twitter.com/intent/tweet/?text=" + 
    quotes[randomNumber];
});


