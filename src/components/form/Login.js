import Joi from 'joi-browser';
import React from 'react'
import Form from './Form';

export default class Login extends Form {
   
      state = {
          data: {
              userName: '',
              password: '',
          },
          errors : {},
      }
    

    schema = {
      userName: Joi.string().required().label('User Name'),
      password: Joi.string().required().label('Password'),
  }

    doSubmit = () =>{
        console.log('Login submited');
    }

  render() {
      const {handlerSubmit} = this;
    return (
      <div className='container p-4'>
        <form onSubmit={handlerSubmit}>
            {this.renderInput('userName', 'User Name')}
            {this.renderInput('password', 'Password', 'password')}
            
            {this.renderBtn('send')}
            
        </form>
      </div>
    )
  }
}
