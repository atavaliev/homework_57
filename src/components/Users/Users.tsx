import React from 'react';
import User from "./User";
import {IUser} from "../../types";

interface IProps {
    users: IUser[];
}

const Users: React.FC<IProps> = ({users}) => {
    return (<>
            <h2 className="text-center mb-2">Users List</h2>
            <div className="row">
                {
                    users.map((user => (
                        <User key={user.id} user={user}/>
                    )))
                }
            </div>
        </>
    );
};

export default Users;