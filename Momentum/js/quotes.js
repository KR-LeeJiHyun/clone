function init(){
    const quotes = [
        { author: "Carol burnett",
        quote: "When you have a dream, you've got to grab it and never let go."},
        {author: "Mahatma Gandhi",
        quote:"The future depends on what we do in the present."},
        {author: "Alan Kay",
        quote:"The best way to predict the future is to invent it."},
        {author: "Lewus carroll",
        quote:"I can't go back to yesterday because I was a different person then."},
        {author: "Helen Keller",
        quote:"Although the world is full of suffering it is full also of the overcoming of it."},
        {author: "Helen keller",
        quote:"I am not afraid of storms for I am learning how to sail my ship."},
        {author: "Bejamin Franklin",
        quote:"Energy and persistence conquer all things."},
        {author: "Walt Disney",
        quote:"All our dreams can come true if we have the courage to pursue them."},
        {author: "Robert H. Goddard",
        quote:"It is difficult to say what is impossible, for the dream of yesterday is the hope of today and the reality of tommorrow."},
        {author: "Bejamin Franklin",
        quote:"Resolve to perform what your ought, perform without fail what you resolve."},
        {author: "Greg S, Reid",
        quote:"A dream written down with a date becomes a goal. A goal broken down becomes a plan. A plan backed by Action makes your dream come true."},
        {author: "Winston Churchill",
        quote:"Never,Never,Never,Never give up."}
    ];
    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");
    const todayQuote = quotes[parseInt(Math.random()*quotes.length)];
    
    quote.innerText = todayQuote.quote;
    author.innerText = "-" + todayQuote.author + "-";
}

init();