function getRandomQuote() {
  const category = document.getElementById('category-select').value;
  
  // Show the loader
  document.getElementById('loader').style.display = 'block';
  
  fetch(`https://api.quotable.io/random?tags=${category}`)
    .then(response => response.json())
    .then(data => {
      // Hide the loader
      document.getElementById('loader').style.display = 'none';
      
      // Clear existing quote
      document.getElementById('quote-text').innerHTML = '';
      
      // Animate new quote
      new Typed('#quote-text', {
        strings: [data.content],
        typeSpeed: 500,
        showCursor: false,
      });

      document.getElementById('quote-author').textContent = '- ' + data.author;
      
      // Show the quote
      document.getElementById('quote-text').classList.remove('hidden');
      document.getElementById('quote-author').classList.remove('hidden');
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
      // Hide the loader if there's an error
      document.getElementById('loader').style.display = 'none';
    });
}

getRandomQuote(); // Load a quote from the default category when the page is loaded
