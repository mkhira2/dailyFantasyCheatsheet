import React from 'react'
import STORE from '../../store'
import ACTIONS from '../../actions'

var Login = React.createClass({
	_handleSubmit: function(evt) {
		evt.preventDefault()
		var formInput = evt.target
		ACTIONS.loginUser(formInput.email.value, formInput.password.value)
		formInput.reset()
	},
	render: function() {
		return (
			<div className='login-container'>
				<div className='login-jumbotron'>
					<div className='login-jumbo-overlay'>
						<img src='images/untitled.png' width='500'/>
						<div className='login-box'>
							<p>WELCOME BACK!</p>
							<form onSubmit={this._handleSubmit}>
							  <input type="text" name="email" placeholder='Email' />
							  <br />
							  <input type="password" name="password" placeholder='Password' />
							  <br /><br />
							  <input id='submit' type="submit" value="Login" />
							</form> 
							<p id='smaller'>Don't have an account? <a href='#signup'><span id='login-here'>Sign up here &#187;</span></a></p>
						</div>
					</div>
				</div>

				<div className='footer-line'>
					<p>&copy; 2017 Daily Fantasy CheatSheet. All Rights Reserved. | Design by Blue Elephant Studios</p>
				</div>
			</div>
		)
	}
})

export default Login