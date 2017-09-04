import React from 'react'
import STORE from '../../store'
import ACTIONS from '../../actions'

var Landing = React.createClass({
	render: function() {
		return (
			<div className='landing-container'>
				<div className='landing-header'>
					<img src='images/dfc_logo.png' width='300'/>
					<div className='login-div'>
						{/*<a href='#verifyLogin'><div id='login'>Login</div></a>*/}
						<a href='#analyzer'><div id='signup'>Let's get started</div></a>
					</div>

				</div>
				<div className='jumbotron'>
					<div className='jumbo-overlay'>
						<div className='jumbo-message'>
							<h2>THE DAILY FANTASY TOOLS YOU NEED TO WIN</h2>
							<p>Are you a casual DFS player?... Are you tired of being shark bait?</p>

							<h3>WE'RE HERE TO HELP!</h3>
							<div className='jumbo-login'>
								<a href='#analyzer'><div id='signup'>GET STARTED</div></a>
								<a href='#learn'><div id='learn-more'>LEARN MORE</div></a>
							</div>
							{/*<p id='smaller'>Already have an account? <a href='#login'><span id='login-here'>Login here &#187;</span></a></p>*/}
						</div>
					</div>
					<div className='optimized'>
						<p>&#42; Currently optimized for DraftKings and NFL Contests. More coming soon!</p>
					</div>
				</div>
				<div className='blue-strip' id='learn'>
					<h3>100% Free DFS Tools for the casual DFS player!</h3>
				</div>
				<div className='landing-section'>
					<div className='section-info'>
						<h2>The CheatSheet</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat optio facere
							vitae nobis quod architecto quos aliquid cumque, perspiciatis earum accusamus at
							veritatis deleniti. Eveniet possimus recusandae, nobis ratione corporis. Placeat optio facere
							vitae nobis quod architecto quos aliquid cumque, perspiciatis earum accusamus at
							veritatis deleniti. Eveniet possimus recusandae, nobis ratione corporis.
						</p>
					</div>
					<div className='section-img'>
						<img src='images/cheatsheet.png' width='600'/>
					</div>
				</div>
				<div className='landing-section' id='dark'>
					<div className='section-img'>
						<img src='images/vegas_lines.png' width='600'/>
					</div>
					<div className='section-info'>
						<h2>VEGAS</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat optio facere
							vitae nobis quod architecto quos aliquid cumque, perspiciatis earum accusamus at
							veritatis deleniti. Eveniet possimus recusandae, nobis ratione corporis. Placeat optio facere
							vitae nobis quod architecto quos aliquid cumque, perspiciatis earum accusamus at
							veritatis deleniti. Eveniet possimus recusandae, nobis ratione corporis.
						</p>
					</div>
				</div>
				<div className='landing-section'>
					<div className='section-info'>
						<h2>PLAYER STATS</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat optio facere
							vitae nobis quod architecto quos aliquid cumque, perspiciatis earum accusamus at
							veritatis deleniti. Eveniet possimus recusandae, nobis ratione corporis. Placeat optio facere
							vitae nobis quod architecto quos aliquid cumque, perspiciatis earum accusamus at
							veritatis deleniti. Eveniet possimus recusandae, nobis ratione corporis.
						</p>
					</div>
					<div className='section-img'>
						<img src='images/player_stats.png' width='600'/>
					</div>
				</div>
				<div className='landing-section'  id='dark'>
					<div className='section-img'>
						<img src='images/def_vs_position.png' width='600'/>
					</div>
					<div className='section-info'>
						<h2>DEFENSE VS POSITION</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat optio facere
							vitae nobis quod architecto quos aliquid cumque, perspiciatis earum accusamus at
							veritatis deleniti. Eveniet possimus recusandae, nobis ratione corporis. Placeat optio facere
							vitae nobis quod architecto quos aliquid cumque, perspiciatis earum accusamus at
							veritatis deleniti. Eveniet possimus recusandae, nobis ratione corporis.
						</p>
					</div>
				</div>

				<div className='landing-footer'>

				</div>
			</div>
		)
	}
})

export default Landing
