import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputValueList, setInputValueList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if(inputValue === "") return;

    setInputValue("");
    setInputValueList([...inputValueList, {
      text: inputValue,
      complete: false
    }]);
  }

  const deleteHandler = (index) => {
    setInputValueList(inputValueList.filter((_item,i) => i!== index));
  }

  const handleToggleChecked = (idx) => {
    const updatedValue = inputValueList.map((item,i) => {
      if (idx === i){
        item.complete = !item.complete;
      }
      return item;
    });
    setInputValueList(updatedValue);
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
                <span style={{fontSize: "30px",fontWeight: "bold", textDecoration: item.complete && "line-through"}}>{ item.text }</span>
                <input style={{ marginLeft: "15px", width: "30px",height: "20px"}} 
                type="checkbox" 
                checked={item.complete}
                onChange = { (e) => {
                  handleToggleChecked(i);
                }}/>
                <button onClick = { () => deleteHandler(i)} style={{backgroundColor: "black",color: "white", marginLeft: "15px"}}>Delete</button>
              </div>
          ))
      }
      
    </div>
  );
}

export default App;
