import React, {useState} from 'react';

const Project = (props) => {
    const { title, likesCount, desc} = props;

    const [likes, setLikes] = useState(likesCount);
    const likesClickHandler = (event) => {
        let newLikes = likes + 1;
        console.log("new likes count: " + newLikes);
        setLikes(newLikes);
    }
    return(
        <div style = {{ border: "solid 1px black", width: "270px", height: "200px", margin: "40px 25px", padding: "15px 5px", display: "inline-block"}}>
            <h4>{ title }</h4>
            <button onClick = { (event) => likesClickHandler(event) }>Like Project</button>
            <h4>Likes:{ likesCount }</h4>
            <h4>Description:</h4>
            <p>{ desc }</p>
        </div>
    )
}
export default Project;