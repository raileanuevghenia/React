import React, { useState } from 'react';

const Tabs = (props) => {
    const[selectedIdx, setSelectedIdx] = useState(1);
    return (
        <div className="container pt-5">
            <header>
                {props.tabItems.map((tab, i) => {
                    const labelStyles = {
                        border: "3px solid",
                        margin:"10px",
                        padding: "20px 40px"
                    }
                    if(selectedIdx === i){
                        labelStyles.backgroundColor = "black";
                        labelStyles.color = "white";
                    }
                    return <span 
                    key={i}
                    style={ labelStyles }
                    onClick={(e) => {
                        setSelectedIdx(i);
                        props.tabItems[i].callback();
                    }}>{tab.label}</span>
                })
                }
            </header>
            <main style={{margin: "auto",width: "600px"}}>
                <h3 style={{border: "3px solid",marginTop: "60px",padding: "30px"}}>{props.tabItems[selectedIdx].content}</h3>
            </main>
        </div>
    )
}
export default Tabs;