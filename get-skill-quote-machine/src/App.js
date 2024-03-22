//import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.scss';
import COLORS_ARRAY from './colorsArray.js';
let quoteDBUrl= "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
  const  [quote, setQuote] = useState("Do what you can, where you are, with what you have.")
  const [author, setAuthor] = useState("Ian Wachira")
  const [randomNumber, setRandomNumber] = useState(0)
  const [quotesArray,setQuotesArray] = useState(null)
  const [accentColor, setAccentColor] = useState('green')

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
   }

  useEffect(()=>{
   fetchQuotes(quoteDBUrl)
  })



  const getRandomQuote =()=>{
    let randomInteger = Math.floor(quotesArray.length * Math.random())
    setRandomNumber(randomInteger)
    setAccentColor(COLORS_ARRAY[randomInteger])
    setQuote(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)
    
  }
 
 /* const OurquotesArray =[{quote: "Do what you can, where you are, with what you have.",author: "Ian Wachira"},
{quote:"If you want your children to turn out well, spend twice as much time with them, and half as much money.",author:"Abigail Van Buren"},
{quote:"If you're offered a seat on a rocket ship, don't ask what seat! Just get on.",author:"Sheryl Sandberg"},
{quote:"First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",author:"Aristotle"}
]; */

 
  
  
  return (
    <div className="App">
      <header className="App-header" style={
        {backgroundColor:accentColor, color: accentColor}}>
        <div id="quote-box"style={
        { color: accentColor}}>
          <h1>Random Number: {randomNumber}</h1>
          <p id="text">"{quote}"</p>
          <p id="author">~ {author}</p>
          <div className='button'>
            <a href={`https://www.twitter.com/intent/tweet?text=${quote} - ${author}`} 
            id="tweet-quote" style={
            { backgroundColor: accentColor}}>Tweet Quote</a>
          </div>
           <button  id="new-quote" style={
          { backgroundColor: accentColor}} onClick= {()=>getRandomQuote()}>Generate A Random Number</button>
        </div>
      </header>
    </div>
  );
  }

export default App;
