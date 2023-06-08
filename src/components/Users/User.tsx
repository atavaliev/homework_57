import React from 'react';
import {IUser} from "../../types";


interface IProps {
    user:IUser;
}
const User:React.FC<IProps> = ({user}) => {
    return (
        <div className="card mb-2">
            <div className="row no-gutters">
                <div className="col-sm-8">
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text small">{user.email}</p>
                        <p className="card-text">{user.role}</p>
                        <p className="card-text">{user.isActive ? "Active" : "Disabled"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;