import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView} from "../view/Homeview/Homeview";
import { SignInView } from "../view/SignInView/SignInView";
import { StoreView } from "../view/StoreView/StoreView";
import Routingpath from "./Routingpath";


export const Routing = ({children}) => {
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