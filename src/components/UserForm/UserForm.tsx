import React from 'react';

const UserForm = () => {
    return (
        <form >
            <h4>Add new dish</h4>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"

                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email"
                       name="email"
                       id="email"
                       className="form-control"

                />
            </div>

            <div className="form-group">
                <label htmlFor="isactive">Active</label>
                <textarea
                    name="isactive"
                    id="isactive"
                    className="form-control"

                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="role">Role</label>
                <select
                    className="form-control"
                    id="role"
                    name="role"
                >
                    <option value="user">user</option>
                    <option value="editor">editor</option>
                    <option value="admin">admin</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    );
};

export default UserForm;