import React from 'react';
import { Link } from "react-router-dom";
import { Home } from '../home';
import { UserProfile } from './profile';


import './style.scss';


export const UserCard = (props) => {
    const { username, id } = props
    return (
        <div className="user-card border">
            <div className="user-card__img">
            </div>
            <div className="user-card__body">
                <div className="user-card__name">
                    <Link to={"/user/" + id}>
                        {username}
                    </Link>
                </div>
            </div>
        </div >
    )
}