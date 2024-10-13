const newQuotes = document.getElementsByClassName('new-quote')[0];
const quoteText = document.getElementsByClassName('quote-text')[0];
const loader = document.getElementById('loader');
const quoteContainer = document.getElementById('quote-container');
// Show Loader
function showLoader() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loader

function hideLoader() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// Tweet Quote
function tweetQuote(){
    var quote = document.getElementById("quote").textContent;
    var author = document.getElementById("author").textContent;
}

// Get Quotes From API
async function getQuotes() {
    showLoader();
    var category = document.getElementById('categories').value;
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'M7GMVV8P2yvbmLSUdA+U1Q==7ELKo1At9hUcKGJ4'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        if(result[0].quote.length > 100){
            quoteText.classList.add('long-quote');
        }   else {
            quoteText.classList.remove('long-quote');
        }
        document.getElementById("quote").innerHTML = result[0].quote;
        document.getElementById("author").innerHTML = result[0].author;
        hideLoader();
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
}
// Event Listeners
newQuotes.addEventListener('click', getQuotes);

