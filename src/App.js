import Details from "./components/Details";
import Favourites from "./components/Favourites";
import Home from "./components/Home";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { toast } from "react-toastify";

toast.configure();
function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <Route path="/" exact component={Home} />
        <Route path="/details/:id" exact component={Details} />
        <Route path="/favourites" exact component={Favourites} />
      </Router>
    </>
  );
}

export default App;
