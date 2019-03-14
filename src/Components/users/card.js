import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Home } from '../home';
import { UserProfile } from './profile';


import './style.scss';


export const UserCard = (props) => {
    const { username, id } = props
    return (
        <Router>
            <div className="user-card border">
                <div className="user-card__img">
                </div>
                <div className="user-card__body">
                    <div className="user-card__name">
                        <Link to={"/user/" + id}>
                            {username}
                        </Link>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/user/:id" component={UserProfile} />
                        </Switch>
                    </div>
                </div>
            </div >
        </Router>
    )
}