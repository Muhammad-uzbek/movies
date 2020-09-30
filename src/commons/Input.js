import React from 'react';
export const Input = ({name, label, erorr, ...rest}) =>{
    return <div className="form-group">
                <label htmlFor="userName">{label}</label>

                <input 
                    id={name}
                    name={name}
                    className="form-control" 
                    {...rest}
                ></input>
                {erorr && <p className='alert alert-danger'>{erorr}</p>}

            </div>
}