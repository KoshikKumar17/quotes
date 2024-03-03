function getRandomQuote() {
  const category = document.getElementById('category-select').value;
  
  fetch(`https://api.quotable.io/random?tags=${category}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('quote-text').textContent = data.content;
      document.getElementById('quote-author').textContent = '- ' + data.author;
    })
    .catch(error => console.error('Error fetching quote:', error));
}

getRandomQuote(); // Load a quote from the default category when the page is loaded
