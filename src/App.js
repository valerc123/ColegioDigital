import './scss/app.scss';
import house1 from "./Assets/1.png"
import house2 from "./Assets/4.png"
import toggle from "./Assets/toggle.png"
import house3 from "./Assets/11.png"
import panel from "./Assets/panel-vacio.png"
import btn from "./Assets/fondo.png"
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { BiHome, BiImage } from "react-icons/bi";

function App() {
  let [home, setHome] = useState(0);
  let [photo, setPhoto] = useState("");
  let [hidden, setHidden] = useState(false);
  let prevCount = usePrevious(home);
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  let fetchImg = async () => {
    axios.get("https://api.unsplash.com/photos/random?count=1&client_id=oDHIjrJBtOZfqVrYE2Zx1JWoW8T3GYDUzduWyO9_irI")
      .then(res => {
        setPhoto( photo =  res.data[0].urls.small );
        setHidden(hidden = true);
      })
  }
  let reset = () =>{
    setHome( home = 0 )
    setHidden( hidden = false )
    setPhoto( photo =  "" );
  }
  let toggleAnimation = (home) => {
    let doc = document.getElementsByClassName("slidetop")[0].classList;
    if (doc.contains("slidebottom")){
      doc.remove("slidebottom")
      setHome(home = prevCount)
    }else{
      doc.add("slidebottom")
      setHome(home = 0)
    }
  }
  return (
    <div className="App">
      <div className={hidden ? 'hidden' : 'houses row'}>
        <button className="botonimagen m-4 col" onClick={() => setHome( home = 1 )}>
           <img src={house1} alt="house 1" />
        </button>
        <button className="botonimagen m-4 col" onClick={() => setHome( home = 2 )}>
           <img src={house2} alt="house 2"  />
        </button>
        <button className="botonimagen m-4 col" onClick={() => setHome( home = 3 )}>
           <img src={house3} alt="house 3" className="botonimagen" />
        </button> 
      </div>
      <div className="panel">
        <div className="mt-5">
          <img src={photo} alt=""></img>
        </div>
        <div className="container">
          <div className="slidetop">
            <img src={toggle} alt="toggle" className="toggle" onClick={() => toggleAnimation(home)}></img>
            <img src={panel} alt="panel" className="board" ></img>
            <div className="botones">
              { home === 1 ?
                <div>
                  <button className="botonimagen"  onClick={() => reset()}>
                    <div >
                      <img src={btn} alt="boton">
                      </img>
                      <BiHome className="ico" />
                    </div>
                  </button>
                  <button className="botonimagen" onClick={() => fetchImg()}>
                    <img src={btn} alt="boton">
                    </img>
                    <BiImage className="ico" />
                  </button>
                </div>
                : home === 2 ?
                <div>
                  <button className="botonimagen" onClick={() => reset()}><img src={btn} alt="boton"></img>
                  <BiHome className="ico" />
                  </button>
                  <button className="botonimagen" onClick={() => fetchImg()}><img src={btn} alt="boton"></img>
                  <BiImage className="ico" />
                  </button>
                  <button className="botonimagen" onClick={() => fetchImg()}><img src={btn} alt="boton"></img>
                  <BiImage className="ico" />
                  </button>
                </div>
                : home === 3 ?
                <div>
                  <button className="botonimagen" onClick={() => reset()}><img src={btn} alt="boton"></img>
                  <BiHome className="ico" />
                  </button>
                  <button className="botonimagen" onClick={() => fetchImg()}><img src={btn} alt="boton"></img>
                  <BiImage className="ico" />
                  </button>
                  <button className="botonimagen" onClick={() => fetchImg()}><img src={btn} alt="boton"></img>
                  <BiImage className="ico" />
                  </button>
                  <button className="botonimagen" onClick={() => fetchImg()}><img src={btn} alt="boton"></img>
                  <BiImage className="ico" />
                  </button>
                </div>
                :
                <div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
