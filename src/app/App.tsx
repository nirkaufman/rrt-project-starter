import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from '../features/auth/Login';
import Register from "../features/auth/Register";
import Members from "../features/members/Members";
import Header from '../shared/components/Header';
import NewMember from "../features/members/NewMember";
import Albums from '../features/albums/Albums';


function App() {
  return (
      <Router>
          <div className="container">
          <Header />
          <Switch>
              <Route path="/login"><Login /></Route>
              <Route path="/register"><Register/></Route>

              <Route exact path="/members"><Members/></Route>
              <Route exact path="/members/new"><NewMember/></Route>

              <Route exact path="/Albums"><Albums/></Route>

              <Redirect from="*" to="/login"/>
          </Switch>
          </div>
      </Router>
  );
}

export default App;
