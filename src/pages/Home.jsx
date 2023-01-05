import React from 'react'
import { useContext, useEffect } from "react";
import GlobalContext from '../context/GlobalContext';
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Main from "../components/Main";
import {displaynews, displaytemp } from "../context/GlobalActions";
import Quotes from '../components/Quotes';


function Home() {
    const{dispatch, city,news}= useContext(GlobalContext)
  
  
  const getNews = async (data) => {
      const newsArticles= await displaynews(data)
    dispatch({
      type : "SAVE_NEWS",
      payload: newsArticles
    })
   
  }
  async function getLocation(){
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async function(position) {
          var crd= position.coords;
          var lat = crd.latitude.toString();
          var lng = crd.longitude.toString();
          const data= await displaytemp(lat,lng);
          
            dispatch({
              type : "SAVE_CITY",
              payload: data.city_name
            })
            dispatch({
        type : "SAVE_TEMP",
        payload: data.app_temp
      })
        });
    } else {
      console.log("Not Available");
    }
  }
  useEffect(() => {
     if(city===null)
     {getLocation();} 
     getNews(city);
    
  }, []);

  if(city===null || news===null)
  {
    return(<Quotes/>)
  }
  return (
    <div>
        <Main />
        <Grid />
        <Footer />
    </div>
  )
}

export default Home