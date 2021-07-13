import React from 'react';

const Header = (props) => {
    return(
        <div>
            <h1>Welcome To My Portfolio</h1>
            <button style={{backgroundColor: "lightblue" }}>Home</button>
            <button>Projects</button>
            <button>About Me</button>
            <button>Contact Me</button>
        </div>
    )
}
export default Header;