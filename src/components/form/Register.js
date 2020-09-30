import Joi from 'joi-browser';
import React from 'react'
import Form from './Form';

export default class Register extends Form {
   
    state = {
        data: {
            userName: '',
            password: '',
            name: '',
        },
        errors : {},
    }
    
      
    schema = {
        userName: Joi.string().required().label('User Name'),
        password: Joi.string().required().label('Password'),
        name: Joi.string().required().label('Name'),
    }

    doSubmit = () =>{
        console.log('Register');
    }

  render() {
      const {handlerSubmit} = this;
    return (
      <div className='container p-4'>
        <form onSubmit={handlerSubmit}>
            
            {this.renderInput('userName', 'User Name')}
            {this.renderInput('password', 'Password', 'password')}
            {this.renderInput('name', 'Full Name')}
           
            {this.renderBtn('registered')}
            
        </form>
      </div>
    )
  }
}
