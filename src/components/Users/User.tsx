import React from 'react';
import {IUser} from "../../types";

interface IProps {
    user:IUser;
}
const User:React.FC<IProps> = ({user}) => {
    return (
        <div className="col-6">
        <div className="card mb-2 px-2">
            <div className="row no-gutters">
                    <div className="card-body">
                        <h5 className="card-title mb-1">{user.name}</h5>
                        <p className="card-text small mb-1">{user.email}</p>
                        <p className="card-text mb-1">{user.role}</p>
                        <p className="card-text mb-1">{user.isActive ? <span style={{color:"green"}}>Active</span> : <span style={{color:"red"}}>Disabled</span>}</p>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default User;