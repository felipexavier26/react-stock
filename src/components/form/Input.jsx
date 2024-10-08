import React from 'react';
import './input.css';

function Input({ type, name, placeholder, onChange, value, text }) {
    return (
        <div className='form_control'>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}  
                value={value} 
                required
            />
        </div>
    );
}

export default Input;