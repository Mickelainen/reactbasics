import { useContext} from "react";
import { UserContext } from "../../shared/Provider/UserProvider";
import "./profile.css";

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    return(
        <div className="profile">
            <img className="profile-img" src="https://thispersondoesnotexist.com/image" 
                alt="AI generated person" 
            />
            <span>{authenticatedUser}</span>
        </div>
    );
};