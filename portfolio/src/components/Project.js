import React, {useState} from 'react';

const Project = (props) => {
    const { title, likesCount, desc} = props;

    const [likes, setLikes] = useState(likesCount);


    return(
        <div style = {{ border: "solid 1px black", width: "270px", height: "200px", margin: "40px 25px", padding: "15px 5px", display: "inline-block"}}>
            <h4>{ title }</h4>
            <button onClick = { () => setLikes(likes + 1) }>Like Project</button>
            <h4>Likes:{ likes }</h4>
            <h4>Description:</h4>
            <p>{ desc }</p>
        </div>
    )
}
export default Project;