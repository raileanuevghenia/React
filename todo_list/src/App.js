import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputValueList, setInputValueList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setInputValue("");
    setInputValueList([...inputValueList, inputValue]);
  }

  const deleteHandler = (index) => {
    setInputValueList(inputValueList.filter((_item,i) => i!== index));
  }
  return (
    <div className="App">
      <form style = {{textAlign: "center"}} onSubmit = { (e) => submitHandler (e) }>
          <div>
              <input style = {{ width: "450px", height: "75px", backgroundColor: "silver", borderRadius: "10px",marginTop: "50px" }}type="text"
              value = { inputValue }
              onChange = { (e) => setInputValue(e.target.value) }/>
          </div>
          <button style={{backgroundColor: "blue", width: "150px", height: "50px",marginTop: "15px",borderRadius: "10px", fontSize: "30px", color: "white"}}>Add</button>
      </form> 
      
      {
          inputValueList.map((item, i) => (
              <div key={i} >
                <span style={{marginTop: "30px",fontSize: "30px",fontWeight: "bold"}}>{ item }</span>
                <button onClick = { () => deleteHandler(i)} style={{backgroundColor: "black",color: "white", marginLeft: "15px"}}>Delete</button>
              </div>
          ))
      }
      
    </div>
  );
}

export default App;
