import React from 'react'
import image from "../Images/img1.jpg"
function Card({item}) {
  const {urlToImage, url, title, description}= item;
  return (
    <div className="col">
          <div className="card">
            <img src={urlToImage? urlToImage: image} className="card-img-top" alt="..." style={{height:"25vh"}}/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={url} className="btn btn-primary">View</a>
            </div>
          </div>
        </div>
  )
}

export default Card