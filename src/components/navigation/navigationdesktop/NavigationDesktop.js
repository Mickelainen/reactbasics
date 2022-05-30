import { Link, useNavigate } from "react-router-dom";
import Routingpath from "../../../routes/Routingpath";
import './NavigationDesktop.css';
import { useContext } from "react";
import { UserContext, UserProvider } from "../../../shared/Provider/UserProvider";
import { Profile } from "../../profile/profile";

export const NavigationDesktop = () => {
    const navigate = useNavigate();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext); //använd en context, UserContext just den specifika contexten

    const renderLogin =() => {
        if (authenticatedUser) {
            return (
                <div className="nav-desktop-login"><Profile /></div>
            )
        }

        else{
            return (
            <div className="nav-desktop-login">
                <button onClick={() => navigate(Routingpath.signInView)}>Sign in</button>
            </div>
            )
        }
        
    }

    return (
        <nav className="nav-desktop">
            <span className="nav-desktop-logo">Logo</span>
            <span>{authenticatedUser}</span>
            <ul className="nav-desktop-list">
                <li>
                    <Link to={Routingpath.homeView}>Home</Link>
                </li>
                <li>
                    <Link to={Routingpath.signInView}>Sign in</Link>
                </li>
                <li>
                    <button onClick={() => navigate(Routingpath.homeView)}>Home</button>
                </li>
                <li>
                    <button onClick={() => navigate(Routingpath.storeView)}>Store</button>
                </li>
            </ul>
            
            {renderLogin()}
            
        </nav>
    );
};