import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../shared/Provider/UserProvider";
import LocalStorage from "../../shared/storage/LocalStorage";

export const SignInView = () => {
    const [username, setUsername] = useState("Mikael");
    const [password, setPassword] = useState();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const navigate = useNavigate();

    const logIn = () => {
        setAuthenticatedUser(username);
        localStorage.setItem(LocalStorage.username, username); // Pekar på localstorage termen i webbläsaren, sedan LocalStorage.js 
        localStorage.setItem(LocalStorage.password, password);
        navigate(-1); //Tillbaka en sida i webbläsaren
    };


    return (
        <div>
            <h1>This is the SignIn View</h1>
            <h2>{username}</h2>
            <input 
                type="text" placeholder="username" 
                onChange={ (event) => 
                setUsername(event.target.value)}>
            </input>
            <br />
            <h2>{password}</h2>
            <input 
                type="password" placeholder="password" 
                onChange={ (event) => 
                setPassword(event.target.value)}>   
            </input>
            <br />
            <button onClick={() => logIn()}>Login</button>
        </div>
        
    );
};