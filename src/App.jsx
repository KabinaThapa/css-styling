import { useState } from 'react'

import './App.css'

function App() {
  const headlines=['I am Strata','a super responsive website(not yet)','crafted by Kabina']
  const result=[];
  for(let i=0;i<headlines.length; i++){
     result[i]=<li>{headlines[i]}</li>
  }

  return (
    <>
    <div className="outline">
    <nav className="navbar">
      <ul>
        <li><a href="#">Strata</a></li>
        <li><a href="#">Mobile</a></li>
        <li><a href="#">Desktop</a></li>
        <li><a href="#">Tablet</a></li>
        <li><a class="download" href="#">Download</a></li>
      </ul>
    </nav>
    </div>
    <div className="flex">
      <div className="intro">
          <h2>{result}</h2>
      </div>
      <div className="section">
        <main className="main">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, excepturi! Dolor laudantium repellendus, deserunt officia, adipisci sed accusantium 
            quisquam quos quia possimus modi facere quas nostrum cumque ipsa doloribus tempora?</p>
        </main>
        </div>
      </div>
      
    </>
  )
}

export default App
