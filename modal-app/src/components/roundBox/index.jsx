import React, {useEffect, useState} from "react";
import './style.scss';

const RoundBox = () => {
    const [changeBgColor, setChangeBgColor] = useState([]);
    const [windLoader, setWinLoader]=useState(true)


  
  useEffect(()=>{
      setWinLoader(windLoader)
      setTimeout(() => {
          setChangeBgColor([
              {
              bgColor:
              }

          ])
      }, 3000)
  }, [])
  })
        
    

    const handelChangeBgColor = () => {
        setWinLoader(!windLoader)
    }


    return <div className={'G-container G-flex G-center'}>
        <div className={'P-random-box G-flex G-center G-flex-column'}>
            <p>if you want change random background color</p>
            <p>then ... </p>
            <button onClick={handelChangeBgColor}>click me</button>
        </div>
    </div>


}

export default RoundBox;

