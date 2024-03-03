function getRandomQuote() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      document.getElementById('quote-text').textContent = data.content;
      document.getElementById('quote-author').textContent = '- ' + data.author;
      document.getElementById('quote-category').textContent = 'Category: ' + data.tags.join(', ');
    })
    .catch(error => console.error('Error fetching quote:', error));
}

getRandomQuote(); // Loads a quote when the page is loaded
