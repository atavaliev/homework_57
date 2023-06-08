import React from 'react';
import './App.css';
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";

function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col  border border-dark">
                    <UserForm/>
                </div>
                <div className="col border border-dark">
                    <Users/>
                </div>
            </div>
        </div>
    );
}

export default App;
