import React, {useEffect} from 'react';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';
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
  const history = useHistory();

  useEffect(() => {
    history.listen( (location) => {
      dispatch(uiSlice.actions.routeUpdated(location.pathname))
    })
  }, []);

  useEffect(() => {
    try {
      const storedUiState = localStorage.getItem(UI_STATE);
      if (storedUiState) {
        dispatch(uiSlice.actions.uiStateRestored(JSON.parse(storedUiState)));
      }
    } finally {}
  }, []);


  return (
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
  );
}

export default App;
