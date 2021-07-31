import React from 'react';
const Output = ({output}) => {
    if(!isNaN(+output)){
    return (  
        <h1> The number is : {output} </h1>   
    );
    }else {
        return <h1> The word is: {output}</h1>
    }
}
export default Output;