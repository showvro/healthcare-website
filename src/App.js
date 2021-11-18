import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import initializeAuthentication from "./components/Firebase/firebase.init";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Testimonial from "./components/Testimonial/Testimonial";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Register from "./components/Register/Register";
import AuthProvider from "./components/Context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Details from "./components/Details/Details/Details";

//initialize Firebase Authentication
initializeAuthentication();

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/testimonial">
              <Testimonial></Testimonial>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/blogs">
              <Blogs></Blogs>
            </PrivateRoute>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
