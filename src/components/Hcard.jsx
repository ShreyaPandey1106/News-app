import React from 'react'
import image from "../Images/img1.jpg"

function Hcard({item}) {
  const {urlToImage, url, title, description,publishedAt}= item;
  return (
    <div className="card mb-3 container bg-primary text-light" style={{ maxWidth: "80vw" }}>
        <div className="row g-0 float-sm-start">
          <div className="col-md-4">
            <img src={urlToImage? urlToImage: image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">{publishedAt}</small></p>
              <a href={url} className="btn btn-dark">Read more</a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hcard