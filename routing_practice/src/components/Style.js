import React from 'react';

const Style = ({str, backg, color}) => {
    if(isNaN(+str)){
    return ( 
        <div style={{backgroundColor: backg,color: color,margin: "20px",padding: "6px"}}>
            <h3>The word is : {str}</h3>
        </div>
     );
    }else{
        return <h1 style={{color: "red"}}>Sorry you a word not a number!</h1>
    }
}
 
export default Style;