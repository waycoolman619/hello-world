var quotes = ['For I know the plans I have for you, "declares the LORD," plans to prosper you and not to harm you, plans to give you hope and a future',
              'One thing I ask from the LORD, this only do I seek: that I may dwell in the house of the LORD all the days of my life, to gaze on the beauty of the LORD and to seek him in his temple',
              'Taste and see that the LORD is good; blessed is the one who takes refuge in him',
              'A friend loves at all times, and a brother is born for a time of adversity',
              'Greater love has no one than this: to lay down one\'s life for one\'s friends',
              'And we know that in all things God works for the good of those who love him, who have been called according to his purpose',
              'What, then, shall we say in response to these things? If God is for us, who can be against us?',
              'For now we see only a reflection as in a mirror; then we shall see face to face. Now I know in part; then I shall know fully, even as I am fully known'
             ]
var authors = ['Jeremiah 29:11','Psalm 27:4','Psalm 34:8','Proverbs 17:17','John 15:13','Romans 8:28','Romans 8:31','1 Corinthians 13:12'
      ]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
document.getElementById("authorDisplay").innerHTML = authors[randomNumber];
} 

function tweet() {
   var randomQuote = document.getElementById('quoteDisplay').textContent + " - " + document.getElementById('authorDisplay').textContent;
   var tweetUrl = ' https://twitter.com/intent/tweet?text=' + encodeURIComponent(randomQuote);

   window.open(tweetUrl);  }
