import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView} from "../view/Homeview/Homeview";
import { SignInView } from "../view/SignInView/SignInView";
import { StoreView } from "../view/StoreView/StoreView";
import Routingpath from "./Routingpath";
import LocalStorage from "../shared/storage/LocalStorage";
import { useContext, useEffect } from "react";
import { UserContext } from "../shared/Provider/UserProvider";


export const Routing = ({children}) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

    const isUserAuthenticated = () => {
        const loggedInUser = localStorage.getItem(LocalStorage.username);
        setAuthenticatedUser(loggedInUser);
    };

    useEffect(() => {
        isUserAuthenticated();
    },[]);

    return (
        // Huvudansvar för routringen
        <BrowserRouter>  
        
        {children}
            <Routes>
                <Route exakt path={Routingpath.signInView} element={<SignInView/>} />
                <Route path={Routingpath.homeView} element={<HomeView/>} />
                <Route path={Routingpath.storeView} element={<StoreView />} />
            </Routes>
        </BrowserRouter>
    );
};