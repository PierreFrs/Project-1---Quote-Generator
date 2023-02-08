// let apiQuotes = [];

// Show New Quote
function newQuote() {
    // Pick a random quote from localQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}

// Get Quotes From API
// async function getQuotes() {
//     const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         //Catch Error Here
//     }
// }

// On Load
// getQuotes();
newQuote();