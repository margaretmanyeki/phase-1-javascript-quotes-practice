const quoteList = document.querySelector("#quote-list")
const newQuoteForm = document.querySelector("#new-quote-form")

newQuoteForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const newQuote = document.querySelector("#new-quote").value
  const newAuthor = document.querySelector("#author").value
  const quoteList = document.querySelector("#quote-list")
  const newQuoteForm = document.querySelector("#new-quote-form")
  
  newQuoteForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const newQuote = document.querySelector("#new-quote").value
    const newAuthor = document.querySelector("#author").value



    fetch("http://localhost:3000/likes", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        quoteId: quote.id
      })
    })
      .then(r => r.json())
      .then(() => {
        const likesSpan = newLi.querySelector("span")
        likesSpan.textContent = parseInt(likesSpan.textContent) + 1
      })







    fetch("http://localhost:3000/quotes?_embed=likes")
    .then(r => r.json())
    .then(quoteArray => renderAllQuotes(quoteArray)) 
  