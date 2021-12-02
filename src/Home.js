import React from 'react'
import "./App.css"
import fire from './fire'

const handleLogout = () => {
    fire.auth().signOut()
  }

const Home = () => {
    return (
        <section className="hero">
        <div className="welcome-div">
            <h1 className="Welcome">welcome<span className="blog-title-emoji">👋</span> to the Home page </h1>
            <button onClick={handleLogout} className="logout-btn">Log Out</button>
            
        </div>
        </section>
    )
}

export default Home