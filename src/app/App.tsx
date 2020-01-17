import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from '../features/auth/Login';
import Register from "../features/auth/Register";
import Members from "../features/members/Members";
import Header from '../shared/components/Header';
import NewMember from "../features/members/NewMember";
import Albums from '../features/albums/Albums';
import MemberAlbums from "../features/albums/MemberAlbums";
import {useDispatch} from 'react-redux';
import {UI_STATE} from "../shared/middleware/persistent";
import {uiSlice} from "./ui.slice";
import Loader from "../shared/components/Loader";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const storedUiState = localStorage.getItem(UI_STATE);
      if (storedUiState) {
        dispatch(uiSlice.actions.uiStateRestored(JSON.parse(storedUiState)));
      }
    } finally {}
  }, []);


  return (
      <Router>
        <div className="container">
          <Loader/>
          <Header/>
          <Switch>
            <Route path="/login"><Login/></Route>
            <Route path="/register"><Register/></Route>

            <Route exact path="/members"><Members/></Route>
            <Route exact path="/members/new"><NewMember/></Route>

            <Route exact path="/albums"><Albums/></Route>
            <Route exact path="/albums/group"><MemberAlbums/></Route>

            <Redirect from="*" to="/login"/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
