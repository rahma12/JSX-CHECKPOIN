import React from 'react';
import './App.css';
import './style.css';

function App() {
  return (
  
    <div style={{border:'solid 1px black', maxWidth:'100vw'}}>

      <h1 className="h1"> My title</h1>

     <div><img src="./imageInSrc.jpg" /></div> 

     <div><img src="/public/imageInPublic.jpg" /></div> 




    
    </div>
  );
}

export default App;
