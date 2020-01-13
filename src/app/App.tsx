import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from '../features/auth/Login';
import Register from "../features/auth/Register";
import Members from "../features/members/Members";
import Member from "../features/members/Member";

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/login"><Login /></Route>
              <Route path="/register"><Register/></Route>
              <Route path="/members"><Members/></Route>
              <Route path="/members/:id"><Member/></Route>
              <Redirect from="*" to="/login"/>
          </Switch>
      </Router>
  );
}

export default App;
