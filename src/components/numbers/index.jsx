import React, { useState } from 'react'
import '../numbers/index.scss'

const Numbers = () => {

   const arr = [1,2,3,"+",4,5,6,"-",7,8,9,"*","C",0,"/ ","=" ]
   const [yazi, setYazi] = useState("")

   const handleButtonClick = (value) =>{

     if(value=="C"){

        setYazi("")

     }else if(value ==="="){

        try {
            const result = eval(yazi); // Use JavaScript's eval function to evaluate the expression
            setYazi(result.toString()); // Display the result
          } catch (error) {
            setYazi("Error"); // Handle invalid expressions
          }
          
     }else{
        setYazi(yazi+value)
     }

   }

  return (
    <div id='home_div'>
        <div id='result_div'>
           <div>{yazi}</div> 
        </div>
     <div id='calc_div'>
       {arr.map((elem,i)=>{
         return 
         <button key={i} onClick={()=>handleButtonClick(elem)}>{elem}</button>
       })} 
     </div>
    </div>
  )
}

export default Numbers