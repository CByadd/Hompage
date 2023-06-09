  // Get a random quote from the API.
  var quotes = 
[
"A journey of a thousand miles begins with a single step.",
"The best way to predict the future is to create it.",
"The only way to do great work is to love what you do.",
"The only way to do great work is to love what you do. - Steve Jobs",
"“Believe you can and you’re halfway there.” - Theodore Roosevel",
"“Success is not final, failure is not fatal: it is the courage to continue that counts.” - Winston Churchill",
"“You miss 100% of the shots you don’t take.” - Wayne Gretzky",
"“I have not failed. I’ve just found 10,000 ways that won’t work.” - Thomas Edison",
"“The best way to predict the future is to create it.” - Peter Drucker",
"“The only person you are destined to become is the person you decide to be.” - Ralph Waldo Emerson",
"“Don’t let yesterday take up too much of today.” - Will Rogers",
"“People who are crazy enough to think they can change the world, are the ones who do.” - Rob Siltanen",
"“If you really look closely, most overnight successes took a long time.” - Steve Jobs",
"“Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.” - Christian D. Larson",
];
  var quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Display the quote.
  document.querySelector(".quote").innerHTML = quote;