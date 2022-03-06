import React from 'react'
import { AiOutlineLeft , AiOutlineRight } from 'react-icons/ai'
import { useEffect } from 'react'
import { useState } from 'react'


function SliderBar({img,imgText,text_color,arrow_color,textColorHover}) {
  const[num,setNum]=useState(0)
  useEffect(()=>{
    setNum(0)

  },[])

  function rightButton(){
    if (num >img.length-2) {
      setNum(0)
      
    }else{
        setNum(num=>num+1)
    }
  
  }


  function leftButton(){
    if (num <1) {
      setNum(img.length-1)
      
    }else{
      setNum(num=>num-1)
        
    }
  
  }
  
  function changeColor(a){
    a.target.style.color=textColorHover || 'red';
    a.target.style.transform='scale(0.95)'
    a.target.style.transition='2000ms'
  }

  function changeColorPrevius(b){
    b.target.style.color=text_color || 'white';
    b.target.style.transform='scale(1)'
    b.target.style.transition='700ms'
  }

















  
  return (
  
        <div className="main" style={{backgroundImage:`url(${img[num]})` }}>



           <div className="left_arrow">
           <button className="arrow" ><AiOutlineLeft   style={{color: arrow_color || 'white'}} onClick={leftButton}  /></button>  
        
           </div>




           <div className="centerDiv">

             <div className="centerDiv_items" style={{color:text_color || 'white'}}>
               <div onMouseEnter={changeColor} onMouseLeave={changeColorPrevius}>{imgText[num]}</div>
             </div>

           </div>




           <div className="right_arrow">
          
          <button className="arrow"><AiOutlineRight  style={{color: arrow_color || 'white'}} onClick={rightButton} /></button>  
        
         </div>

        </div>


 
  )
}

export default SliderBar;