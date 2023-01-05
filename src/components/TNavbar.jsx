import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { displaynews } from '../context/GlobalActions';
import GlobalContext from '../context/GlobalContext';

function TNavbar() {
  const {dispatch} = useContext(GlobalContext)
  const [topic, setTopic]= useState("")  
  
  async function handleSubmit(e)
  {
    e.preventDefault();
    const data= await displaynews(topic, "all");
    dispatch({
      type : "SAVE_NEWS",
      payload: data
    })  
    setTopic("");
  }
  
  return (
    <nav className="navbar bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to={"/"}>News App</Link>
          <form className="d-flex" role="search" onSubmit={(e)=>handleSubmit(e)}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={topic} onChange={(e)=>setTopic(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </nav>
  )
}

export default TNavbar