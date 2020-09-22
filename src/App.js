import React from 'react';
import * as firebase from "firebase/app";
import "firebase/analytics";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { firebaseConfig } from './config';
import Login from './Login';
import Dashboard from './Dashboard';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/">
         <Login />
       </Route>
       <Route path="/:id/dashboard">
         <Dashboard />
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
