function getRandomQuote() {
  const category = document.getElementById('category-select').value;
  
  // Show loader
  document.getElementById('loader').style.display = 'block';
  
  fetch(`https://api.quotable.io/random?tags=${category}`)
    .then(response => response.json())
    .then(data => {
      // Hide loader
      document.getElementById('loader').style.display = 'none';
      
      // Update quote and author
      document.getElementById('quote-text').textContent = data.content;
      document.getElementById('quote-author').textContent = '- ' + data.author;
      document.getElementById('quote-category').textContent = 'Category: ' + data.tags.join(', ');
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
      // Hide loader on error
      document.getElementById('loader').style.display = 'none';
    });
}

getRandomQuote(); // Load a quote from the default category when the page is loaded
