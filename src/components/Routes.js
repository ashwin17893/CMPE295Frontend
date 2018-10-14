import React, {Component} from 'react';
import {Route,Router, Switch} from 'react-router-dom';
import Login from "./Login";
import Home from "./Home";
import Welcome from "./Welcome";
import Projects from "./Projects";
import Myprojects from "./Myprojects";
import Profile from "./Profile";
import Post from "./Post";
import Signup from "./Signup";
import Terms from "./Terms";
import UserHome from "./UserHome";
import '../App.css';
import history from "./history";

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route  path='/login' component={Login}/>
                    <Route  path='/welcome' component={Welcome}/>
                    <Route  path='/signup' component={Signup}/>
                    <Route  path='/post' component={Post}/>
                    <Route  path='/profile' component={Profile}/>
                    <Route  path='/projects' component={Projects}/>
                    <Route  path='/my' component={Myprojects}/>
                    <Route  path='/terms' component={Terms}/>
                    <Route  path='/UserHome' component={UserHome}/>
                </Switch>
            </Router>
        );

    }
}
export default Routes;