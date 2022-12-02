import React from "react";
import './style.scss';

const RoundBox = () => {
    const [changeBgColor, setChangeBgColor] = useState([]);
    const [windLoader, setWInLoader]=useState(false)
windLoader([
window.location(setChangeBgColor)
])

    changeBgColor([
        {
            bgColor: ` rgba(${Math.random() * 255},${Math.random() * 255}, ${Math.random() * 255},${Math.random()})
    }
   ] )
  
  useEffect(()=>{
      if(setChangeBgColor){
         setWInLoader 
      }
  })
        
    

    const handelChangeBgColor = () => {
      window.location()
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

)
}