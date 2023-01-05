import React, { useContext, useEffect } from 'react'
import Quotes from '../components/Quotes';
import { displaynews } from '../context/GlobalActions';
import GlobalContext from '../context/GlobalContext';
import Home from './Home';

function Entertainment() {
  const {dispatch,news}= useContext(GlobalContext)
  async function getNews()
  {
    const data= await displaynews("entertainment");
    dispatch({
      type : "SAVE_NEWS",
      payload: data
    })
   
  }
  useEffect(()=>{
    getNews()
  },[])
  if(news===null){
    return(<Quotes/>)
  }
  return (
    <Home/>
  )
}

export default Entertainment