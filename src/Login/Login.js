import React from 'react';
import './Login.css'

const login = (props) => {
    return <div className="Login">
        <form>
            <div>
                <label htmlFor="mail">E-mail</label>
            </div>
            <div>
                <input className="Input" type="email" id="mail" name="mail" onChange={props.emailChange} value={props.email} />
            </div>
            <div>
                <label htmlFor="pass">Password</label>
            </div>
            <div>
                <input type="password" id="pass" name="pass" onChange={props.passwordChange} value={props.password} />
            </div>
            <div >
                <label htmlFor="table">Table Name</label>
            </div>
            <div>
                <input type="text" id="table" name="table" onChange={props.tableNameChange} value={props.tableName} />
            </div>
            <div>
                <p id="errors" name="errors" value={props.error}/>
            </div>
            <div>
                <button className="Button" type="button" onClick={props.loginClick} >Login</button>
                <button className="Button" type="button" onClick={props.CreateUserClick} >Create User</button>
            </div>
        </form>
    </div>;
}

export default login;