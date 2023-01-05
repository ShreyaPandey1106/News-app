import React, { useContext, useEffect } from 'react'
import GlobalContext from '../context/GlobalContext'
import background from '../Images/mainimg.webp'

function Main() {
  const{news}= useContext(GlobalContext);
  const {urlToImage, url, title, description, publishedAt}= news[0];
  return (
    <>
      <div className="card bg-dark text-dark">
        <img src={ urlToImage? urlToImage: background} className="card-img" alt="..." />
        <div className="card-img-overlay ">
          <div className='bg-dark text-light m-md-5 p-5 mainContainer'>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{publishedAt}</p>
            <a href={url} className="btn btn-primary">Read More</a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Main