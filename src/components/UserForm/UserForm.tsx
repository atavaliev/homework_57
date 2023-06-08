import React, {useState} from 'react';
import {IDishMutation, IUser} from "../../types";
import {nanoid} from "nanoid";


interface IProps {
    onSubmit: (newUser: IUser) => void;
}

enum ERole {
    User = 'user',
    Admin = 'Admin',
    Editor = 'editor'
}

const UserForm: React.FC<IProps> = ({onSubmit}) => {

    const [user, setUser] = useState<IDishMutation>({
        name: '',
        email: '',
        role: '',
        isActive: false
    })


    const onTextFiledChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLSelectElement>) => {
        const {name, value} = e.target;

        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    const getSelectOptions = () => {

        return Object.keys(ERole).map((key) => (
            <option
                key={key}
                value={ERole[key as keyof typeof ERole]}
            >
                {key}
            </option>
        ))
    }

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onSubmit({
            id: nanoid(),
            ...user,
        })

    }

    return (
        <form onSubmit={onFormSubmit}>
            <h4>Add new dish</h4>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={user.name}
                    onChange={onTextFiledChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Email</label>
                <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    value={user.email}
                    onChange={onTextFiledChange}
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="role">Role</label>
                <select name="role"
                        id="role"
                        value={user.name}
                        className="form-control"
                        onChange={onTextFiledChange}
                >
                    <option value="" disabled defaultValue="">Select a role</option>
                    {getSelectOptions()}
                </select>
            </div>

            <div className="form-group mb-3">
                <label htmlFor="isActive">Name</label>
                <input
                    type="checkbox"
                    name="isComplete"
                    id="name"
                    checked={user.isActive}
                    onChange={(e) => setUser(prevState => ({...prevState, isActive: e.target.checked}))}
                />
            </div>

            <button type="submit" className="btn btn-primary">Create</button>
        </form>

    );
};

export default UserForm;