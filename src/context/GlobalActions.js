

export async function displaytemp(lat,lng){;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7aeffb5feemshdc8f154a9eb0cb3p15ec5ejsncbf3fe6024bb',
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  };
  
 const  response = await fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${lng}&lat=${lat}`, options)
 const data = await response.json();
 return(data.data[0])
  }

  export async function displaynews(city){
    const key = 'd329d98f1ecc48be80fcbbe480da46de';
    const Url = `https://newsapi.org/v2/everything?q=${city}&apiKey=${key}`;
    // const Url= "https://newsapi.org/v2/top-headlines/sources?category=sports&apiKey=d329d98f1ecc48be80fcbbe480da46de";
    const response = await fetch(Url)
    const data = await response.json()
    const news= data.articles;
    console.log(news)
    return news;
  }