import React, { useState } from 'react';

const Form = (props) => {
    const [newColor, setNewColor] = useState("");
    const [size, setSize] = useState(200);
    const [boxesList, setBoxesList] = useState([]);

    const createBoxes = (e) => {
        e.preventDefault();
        setNewColor("");
        setSize("");
        setBoxesList( [...boxesList, {
            color: newColor,
            size: size + "px",
        }
        ] );

    }
    return(
        <div className="container pt-5">
            <form onSubmit = { (e) => createBoxes (e) }>
                <div>
                    <label style = {{margin: "8px ", fontSize: "30px", fontWeight: "bold"}}>Color</label>
                    <input style = {{ borderRadius: "10px", width: "400px", height: "50px", backgroundColor: "silver"}}type="text"
                    name = "newColor"
                    value = { newColor }
                    onChange = { (e) => setNewColor(e.target.value) }/>
                </div>
                <div>
                    <label style = {{margin: "15px ", fontSize: "30px", fontWeight: "bold"}}>Size</label>
                    <input style = {{ borderRadius: "10px", width: "400px", height: "50px", backgroundColor: "silver"}}type="text"
                    name = "size"
                    value = { size }
                    onChange = { (e) => setSize(e.target.value) }/>
                </div>
                <button style = {{margin: "8px", borderRadius: "10px", width: "100px", height: "50px", fontSize: "20px"}}>Add</button>
            </form>
            {
                boxesList.map((box, index) => (
                    <div key={ index }
                    style={{
                    backgroundColor: box.color,
                    width: box.size,
                    height: box.size,
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