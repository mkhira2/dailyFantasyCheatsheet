import React from 'react'
import STORE from '../../store'
import ACTIONS from '../../actions'

import Header from '../components/header'
import Navigation from '../components/navigation'
import CasualPlanner from './components/casualPlanner'
import ModeratePlanner from './components/moderatePlanner'
import AggressivePlanner from './components/aggressivePlanner'


var Planner = React.createClass({
	componentWillMount: function() {
    	STORE.on('dataUpdated', () => {
	      this.setState(STORE.data)
    	})
  	},

	componentWillUnmount: function() {
		STORE.off('dataUpdated')
	},

	getInitialState: function() {
	    return STORE.data
	},

	render: function() {
		return (
			<div className='statistics-container'>
        		<Header />
		        <div className="statistics-wrapper">
					<Navigation />
					<PlannerData
            bankroll={this.state.bankroll}
            showCasualPlanner={this.state.showCasualPlanner}
            showModeratePlanner={this.state.showModeratePlanner}
            showAggressivePlanner={this.state.showAggressivePlanner}
            showPlannerButtons = {this.state.showPlannerButtons}
            error = {this.state.error}
            plannerError = {this.state.plannerError} />
		        </div>
			</div>
		)
	}
})

var PlannerData = React.createClass({
  showPlannerModal: function(){
    alert('Planner Modal')
  },
  handleCasualClick: function() {
    STORE.set({
      showPlannerButtons: false,
      showCasualPlanner: true,
      showModeratePlanner: false,
      showAggressivePlanner: false,
		})

  },
  handleModerateClick: function() {
    STORE.set({
      showPlannerButtons: false,
      showCasualPlanner: false,
      showModeratePlanner: true,
      showAggressivePlanner: false,
		})
  },
  handleAggressiveClick: function() {
    STORE.set({
      showPlannerButtons: false,
      showCasualPlanner: false,
      showModeratePlanner: false,
      showAggressivePlanner: true,
		})
  },
  render: function() {
    // If I want to hide the buttons.....
    // if (this.props.showPlannerButtons === false) {
    //   console.log("This is false")
    //   var hidden = {
    //       display: 'none',
    //     }
    // }
  	return (
  		<div className='data-container'>
        <div className='section-header'>
          <div className='section-overlay'>
            <div className='section-info'>
              <h4>Bankroll Planner &nbsp;<i className="fa fa-info-circle" aria-hidden="true" onClick={this.showPlannerModal}></i></h4>
            </div>
          </div>
        </div>
  			<div className='planner-wrapper'>
          <div className='planner-buttons' >
            <div>
              <p>What type of player are you?</p>
            </div>
            <div className="bankroll-buttons">
              <button onClick={this.handleCasualClick} >Casual</button>
              <button onClick={this.handleModerateClick}>Moderate</button>
              <button onClick={this.handleAggressiveClick}>Aggressive</button>
            </div>
            <div className="bankroll-rec">
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
          {this.props.showCasualPlanner ? <CasualPlanner  bankroll={this.props.bankroll}
                                                          error = {this.props.error}
                                                          plannerError = {this.props.plannerError}/> : null }
          {this.props.showModeratePlanner ? <ModeratePlanner  bankroll={this.props.bankroll}
                                                              error = {this.props.error}
                                                              plannerError = {this.props.plannerError}/> : null }
          {this.props.showAggressivePlanner ? <AggressivePlanner  bankroll={this.props.bankroll}
                                                                  error = {this.props.error}
                                                                  plannerError = {this.props.plannerError}/> : null }
	      </div>
  		</div>
  	)
  }
})


export default Planner
