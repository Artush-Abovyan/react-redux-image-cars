import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';



function App() {
  const dispatch = useDispatch()
  const images = useSelector((state) => state.imges);
  const talbot = useSelector((state) => state.talbot);
  const [displayLexus, setDisplayLexus] = useState(false); 
  const [displayTalbot, setDisplayTalbot] = useState(false); 

  const loadderLexusCarImage = () => {
    if (!displayLexus) {
      const img1 = <img style={{ width: "300px" }} src='lexus/lexus.jpg' alt='car' />;
      const img2 = <img style={{ width: "300px" }} src='lexus/lexus1.jpg' alt='car lexus' />
      dispatch({ type: 'ADD-CARIMAGE', payload: [img1, img2] });
      setDisplayLexus(true);
      setDisplayTalbot(false)
    }
  }

  const loadderTalbotCarImage = () => {
    if (!displayTalbot) {
      const img1 = <img style={{ width: "300px" }} src='Talbot/Talbot-Lago America .jpg' alt='car' />;
      const img2 = <img style={{ width: "300px" }} src='Talbot/Talbot Samba Sympa.jpg' alt='car lexus' />
      dispatch({ type: 'TALBOT', payload: [img1, img2] });
      setDisplayTalbot(true)
      setDisplayLexus(false)
    }
  }
  return (
    <div className="App">
      <div>
        <button onClick={loadderLexusCarImage}>
          <img style={{width:"40px"}} src='logo/Lexuslogo.svg.png'/>
        </button>
        {displayLexus && images.map((image, index)=>(
        <div  key={index}>{image}</div>
        ))}
        </div>
        <div>
          <button onClick={loadderTalbotCarImage}>
          <img style={{width:"35px"}} src='logo/talbot logo.png'/>
        </button>
        {displayTalbot && talbot.map((image, index) =>(
           <div key={index}>{image}</div>
        ))}
        </div>
    </div>
  );
}

export default App;
