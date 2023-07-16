// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote:`"Fill your paper with the breathings of your heart."`,
    person: `William Wordsworth`
  },
  {
    quote: `"The art of writing is the art of discovering what you believe."`,
    person: ` Gustav Flaubert`
  },  
  {
    quote:`"Fill your paper with the breathings of your heart."`,
    person: `William Wordsworth`
  },  
  {
    quote:`"It’s the possibility of having a dream come true that makes life interesting."`,
    person: ` Paulo Coelho`
  }, 
  {
    quote:`"Creativity is a combination of discipline and childlike spirit."`,
    person: `  Robert Greene`
  }, 
  ];

btn.addEventListener('click', function(){
    
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
