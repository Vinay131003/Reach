import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import Footer from "./components/Footer";
import User from "./components/User";
import LandingPage from "./components/LandingPage";
import Search from "./components/Search"
// import { authenticate } from "./services/auth";
import { authenticate } from "./store/session";

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);

  const user = useSelector(state => state.session.user)
  let userBool = (user) => {
    if(user){
      return true
    } else {
      return false
    }
  }

  let userBoolFlip = (user) => {
    if(user){
      return false
    } else {
      return true
    }
  }

  useEffect(() => {
    (async() => {
      await dispatch(authenticate())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <ProtectedRoute path="/users" exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <User />
        </ProtectedRoute>
        <Route path="/" exact={true}>
          {userBoolFlip(user) && <LandingPage />}
          {userBool(user) && <Search />}
          {userBool(user) && <Footer />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
