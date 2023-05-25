import { useState } from "react";
import logo from './fb.png';
import logo1 from './insta.png';
import logo2 from './twit.png';
import "./App.css";

function App() {
  const headlines = [
    "I am Strata",
    "a super responsive website (not yet)",
    "crafted by Kabina",
  ];
  const result = [];
  for (let i = 0; i < headlines.length; i++) {
    result[i] = <li>{headlines[i]}</li>;
  }

  return (
    <>
      <div className="outline">
        <nav className="navbar">
          <ul class="Left">
            <li>
              <a href="#">Strata</a>
            </li>
            <div class="box">
            <li>
              <a href="#">Mobile</a>
            </li>
            <li>
              <a href="#">Desktop</a>
            </li>
            <li>
              <a href="#">Tablet</a>
            </li>
            </div>
          </ul>
          <ul class="Right">
            <li>
              <a class="download" href="#">
                Download
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex">
        <div className="intro">
          <h2>{result}</h2>
          <div class="Logo">
          <img src={logo} width="20px" height="20px"/>
          <img src={logo1} width="20px" height="20px"/>
          <img src={logo2} width="20px" height="20px"/>
        </div>
        </div>
        
          <main className="main">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum maxime alias dolore eveniet unde enim, provident 
              ipsam repudiandae architecto id. Qui eaque expedita aliquid dolorum temporibus saepe reiciendis sapiente totam.</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
              excepturi! Dolor laudantium repellendus, deserunt officia,
              adipisci sed accusantium quisquam quos quia possimus modi facere
              quas nostrum cumque ipsa doloribus tempora?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
              excepturi! Dolor laudantium repellendus, deserunt officia,
              adipisci sed accusantium quisquam quos quia possimus modi facere
              quas nostrum cumque ipsa doloribus tempora?
            </p>
            <button class="but">Learn More</button>
          </main>
        </div>
      
    </>
  );
}

export default App;
