import { Link, useNavigate } from "react-router-dom";
import Routingpath from "../../../routes/Routingpath";
import './NavigationDesktop.css';
import { useContext } from "react";
import { UserContext, UserProvider } from "../../../shared/Provider/UserProvider";

export const NavigationDesktop = () => {
    const navigate = useNavigate();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext); //använd en context, UserContext just den specifika contexten
    return (
        <div className="nav-desktop">
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
                    <button onClick={() => navigate(Routingpath.signInView)}>Sign in</button>
                </li>
                <li>
                    <button onClick={() => navigate(Routingpath.storeView)}>Store</button>
                </li>
            </ul>
        </div>
    );
};