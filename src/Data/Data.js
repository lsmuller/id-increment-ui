import React from 'react';
import './Data.css'

const data = (props) => {
    return <div className="Data">
        <div>
            <label htmlFor="mail">E-mail</label>
        </div> 
        <div>
            <input type="email" id="mailData" name="mailData" value={props.email} disabled/>
        </div>
        <div>
            <label htmlFor="api">Api Key</label>
        </div>
        <div>
            <input type="text" id="api" name="api" value={props.api} disabled/>
        </div>
        <div>
            <label htmlFor="current" >Id in use</label>
        </div>
        <div>
            <input type="number" id="current" name="current" defaultValue={props.current} onChange={props.currentIdChange} />
        </div>
        <div>
            <button className="Button" type="button" onClick={props.generateClick} >Get Next</button>
            <button className="Button" type="button" onClick={props.resetClick} >Reset</button>
        </div>
    </div>;
}

export default data;