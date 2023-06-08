import React, {useState} from 'react';
import './App.css';
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import {IUser} from "./types";

function App() {

    const [users, setUsers] = useState<IUser[]>([
        {id: '1', name: 'Bob', email: 'bob@bob.ob', role:'user', isActive:true},
        {id: '2', name: 'Tina', email: 'Tina@mail.ge', role:'editor', isActive:true},
        {id: '3', name: 'Yakov', email: 'kovalski@okt.ava', role:'admin', isActive:true},
        {id: '4', name: 'Serik', email: 'sberik@lot.kz', role:'admin', isActive:false},
    ]);

    const addUser = (newUser:IUser) => {
        setUsers(prevState => [...prevState, newUser])
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col  border border-dark">
                    <UserForm onSubmit={addUser}/>
                </div>
                <div className="col border border-dark">
                    <Users users={users}/>
                </div>
            </div>
        </div>
    );
}

export default App;
