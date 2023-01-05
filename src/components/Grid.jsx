import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import Card from './Card'
import Hcard from './Hcard'

function Grid() {
  const {news}= useContext(GlobalContext);
  return (
    <div className="bg-dark p-5">
      {
        news.map((item, index)=>{
          while(index>0 && index<=2)
          return(<Hcard key={index} item={item}/>)
        })
       }
      <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
       {
        news.map((item, index)=>{
          while(index>2)
          return(<Card key={index} item={item}/>)
        })
       }
      </div>
    </div>
  )
}

export default Grid