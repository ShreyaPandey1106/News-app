import React, { useEffect, useState } from 'react'

function Quotes() {

  const quotation =["The news is the first rough draft of history." , 
  "News is something somebody doesn't want printed; all else is advertising.",
  "All news is an exaggeration of life.",
  "Good news is often buried on page 8. Bad news is splashed across page 1.", 
  "News is what a chap who doesn't care much about anything wants to read. And it's only news until he's read it. After that it's dead."];

  const auth= ["Philip L. Graham","William Randolph Hearst","Fred Allen","David Brinkley","Evelyn Waugh" ]
  var i=0;

  const [quote, setQuote]= useState("News is what a chap who doesn't care much about anything wants to read. And it's only news until he's read it. After that it's dead.")
  const [author, setAuthor]=useState("Evelyn Waugh")
  
  async function getData(){
    setQuote(quotation[i]);
    setAuthor(auth[i]);
    i++;
    if(i>=5)
    i=0;
 } 
 useEffect(() => {
  const interval = setInterval(() => {
    getData();
  }, 5000);

  return () => clearInterval(interval);
}, []);
  return (
    <div className="bg-dark text-light d-flex flex-column justify-content-center align-items-center" style={{height: "100vh"}}>
    <h1>{quote}</h1>
    <h2>{author}</h2>
    </div>
  )
}

export default Quotes