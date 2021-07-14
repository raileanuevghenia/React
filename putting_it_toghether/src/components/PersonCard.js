
import React, {useState} from 'react';

const PersonCard = (props) => {
    const {firstName ,lastName ,age ,hairColor} = props;

    const [birthdayAge, setBirthdayAge] = useState(age);
    return(
        <div>
            <h1>{lastName}, {firstName}</h1>
            <h4>Age:{birthdayAge}</h4>
            <h4>Hair Color:{hairColor}</h4>
            <button onClick = { () => setBirthdayAge (birthdayAge + 1) }>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
}
export default PersonCard;