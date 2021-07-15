import React, {useState} from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log("Welcome",  newUser );
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    return(
        <div className="container pt-4 bg-dark text-white">
            <form onSubmit = { (e) => createUser (e)}>
                <div>
                    <label style={{ width: "100px"}} for="firstName">First Name</label>
                    <input style={{ width: "300px", margin:"10px", padding: "5px"}} type="text" 
                    name = "firstName" 
                    value = {firstName} 
                    onChange = { (e) => setFirstName(e.target.value) }/>
                </div>
                <div>
                    <label style={{ width: "100px"}} for="lastName">Last Name</label>
                    <input style={{ width: "300px", margin:"15px", padding: "5px"}} type="text" 
                    name = "lastName" 
                    value = {lastName} 
                    onChange = { (e) => setLastName(e.target.value) }/>
                </div>
                <div>
                    <label style={{ width: "100px"}} for="email">Email</label>
                    <input  style={{ width: "300px", margin:"15px", padding: "5px"}} type="email" 
                    name = "email" 
                    value = {email} 
                    onChange = { (e) => setEmail(e.target.value) }/>
                </div>
                <div>
                    <label style={{ width: "100px"}} for="password">Password</label>
                    <input style={{ width: "300px", margin:"15px", padding: "5px"}} type="password" 
                    name = "password" 
                    value = {password} 
                    onChange = { (e) => setPassword(e.target.value) }/>
                </div>
                <div>
                    <label style={{ width: "100px"}} for="confirmPassword">Confirm Password</label>
                    <input style={{ width: "300px", margin:"2px 5px", padding: "5px"}} type="password" 
                    name = "confirmPassword" 
                    value = {confirmPassword} 
                    onChange = { (e) => setConfirmPassword(e.target.value) }/>
                </div>
                <input style = {{margin: "15px"}}type="submit" value="Create User"/>
            </form>
            <div>
                <h3>Your Form Date:</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    );
};
export default Form;