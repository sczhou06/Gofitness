import React from 'react';

import TopMenuBar from "./components/TopMenuBar";
import HomeSlider from "./components/HomeSlider";
import {BrowserRouter, Route} from "react-router-dom";

import Home from "./pages/Home";
import Classes from "./pages/Classes";
import About from "./pages/About";
import Chat from "./pages/Chat";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TrainerHome from "./pages/TrainerHome";
import TraineeHome from "./pages/TraineeHome";
import TrainerList from "./pages/TrainerList";
import Classroom from "./pages/Classroom"


function App() {
  return (
    <div>

      <BrowserRouter>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/classes'} exact component={Classes}/>
          <Route path={'/about'} exact component={About}/>
          <Route path={'/chat'} exact component={Chat}/>
          <Route path={'/signin'} exact component={SignIn}/>
          <Route path={'/signup'} exact component={SignUp}/>
          <Route path={'/trainer'} exact component={TrainerHome}/>
          <Route path={'/trainee'} exact component={TraineeHome}/>
          <Route path={'/trainerinfo'} exact component={TrainerList}/>
          <Route path={'/classroom'} exact component={Classroom}/>
    </BrowserRouter>
    </div>
    /**/

  );
}

export default App;
