import React, { useState } from 'react';

const Form = (props) => {
    const [newColor, setNewColor] = useState("");
    const [boxesList, setBoxesList] = useState([]);

    const createBoxes = (e) => {
        e.preventDefault();
        setNewColor("");
        setBoxesList( [...boxesList, newColor] );
    }
    return(
        <div className="container pt-5">
            <form onSubmit = { (e) => createBoxes (e) }>
                <label style = {{margin: "15px ", fontSize: "30px", fontWeight: "bold"}}>Color</label>
                <input style = {{ borderRadius: "10px", width: "400px", height: "50px", backgroundColor: "silver"}}type="text"
                name = "newColor"
                value = { newColor }
                onChange = { (e) => setNewColor(e.target.value) }/>
                <button style = {{margin: "8px", borderRadius: "10px", width: "100px", height: "50px", fontSize: "20px"}}>Add</button>
            </form>
            {
                boxesList.map((color, index) => (
                    <div key={ index }
                    style={{
                    backgroundColor: color,
                    width: "200px",
                    height: "200px",
                    margin: "20px",
                    display: "inline-block"
                    }}>
                    </div>
                ))
            }
        </div>
    )
}
export default Form;