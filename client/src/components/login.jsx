import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    signUpHandler() {
        var user = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/api/user/signup', user)
          .then( response => {
             console.log('Server replied with... ', response);
             res.send('Successful Signup');
          })
          .catch( err => {
              console.log('Server replied with ...', err);
          })
    }

    onLoginHandler() {
        console.log('fired login handler');
        var user = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post(`/api/user/login`, user)
          .then( response => {
              console.log('Server replied with ... ', response);
          })
          .catch( err => {
              console.log('Server errored out with ', err);
          })

    }

    logoutHandler() {
        axios.get('/api/logout')
          .then(response => {
              console.log('Sucessfully Logged Out', response);
          })
          .catch( err => {
              console.log('There was an error Logging Out', err);
          });
    }
    
    render() {
        return (
            <div>
                <div>Username: </div>
                <input name='username' onChange={ this.onChangeHandler.bind(this) }/>
                <div>Password: </div>
                <input name='password' type='password' onChange={ this.onChangeHandler.bind(this) }/>
                <br/><br/>
                <button onClick={this.signUpHandler.bind(this)} > Sign Up</button>
                <button onClick={this.onLoginHandler.bind(this)} >Login</button>
                <button onClick={this.logoutHandler.bind(this)} >Logout</button>
            </div>
        )
    }
}

export default Login
