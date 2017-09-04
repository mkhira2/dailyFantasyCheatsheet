import React from 'react'
import STORE from '../../store'
import ACTIONS from '../../actions'

var Signup = React.createClass({
	_handleSubmit: function(evt) {
		evt.preventDefault()
		var formInput = evt.target
		var userData = {
			email: formInput.email.value,
			firstName: formInput.firstName.value,
			lastName: formInput.lastName.value,
			password: formInput.password.value
		}
		ACTIONS.registerUser(userData)
		formInput.reset()
	},
	render: function() {
		return (
			<div className='signup-container'>
				<div className='signup-jumbotron'>
					<div className='signup-jumbo-overlay'>
						<img src='images/untitled.png' width='500'/>
						<div className='signup-box'>
							<p>WELCOME! <br/>THANKS FOR CHECKING US OUT!</p>
							<form onSubmit={this._handleSubmit}>
							<input type="text" name="email" placeholder='Email' />
							  <br />
							  <input type="text" name="firstName" placeholder='First Name' />
							  <br />
							  <input type="text" name="lastName" placeholder='Last Name' />
							  <br />
							  <input type="password" name="password" placeholder='Password' />
							  <br /><br />
							  <input id='submit' name='submit' type="submit" value="Submit" />
							</form> 
							<p id='smaller'>Already have an account? <a href='#login'><span id='login-here'>Login here &#187;</span></a></p>
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

export default Signup