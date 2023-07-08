// Function to fetch a random quote from the Quotable API
async function fetchRandomQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return data.content;
  }
  
  // Function to display a random quote
  async function displayRandomQuote() {
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = await fetchRandomQuote();
  }
  
  // Display a random quote when the page loads
  document.addEventListener("DOMContentLoaded", displayRandomQuote);
  
  // Event listener for the "New Quote" button
  document.getElementById("new-quote").addEventListener("click", displayRandomQuote);
  
  