
import { Routing } from "./routes/Routes";
import { Navigation } from "./components/navigation/Navigation";
import { UserProvider } from "./shared/Provider/UserProvider";


// const { render } = require("@testing-library/react");

function App () {
  return (
    <UserProvider>
     <Routing>
       <Navigation />
     </Routing>
    </UserProvider>
  );
};


export default App;