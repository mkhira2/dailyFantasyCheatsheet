import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import User from './models/userModel'

import Construction from './views/landing/construction'
import Landing from './views/landing/landing'
import Login from './views/landing/login'
import Signup from './views/landing/signup'
import Home from './views/home/home'
import Analyzer from './views/analyzer/analyzer'
import Statistics from './views/statistics/statistics'
import Lines from './views/lines/lines'
import Defense from './views/defense/defense'
import Picks from './views/picks/picks'
import Planner from './views/planner/planner'
import BankrollTracker from './views/tracker/bankrollTracker'

const app = function() {
  var MainRouter = Backbone.Router.extend({
  	routes: {
      "landing" : "handleLandingView",
      "construction" : "handleConstructionView",
      "login" : "handleLoginView",
      "signup" : "handleSignupView",
      "verifyLogin" : "verifyLogin",
      "verifySignup" : "verifySignup",
    	"home" : "handleHomeView",
      "analyzer" : "handleAnalyzerView",
      "picks" : "handlePicksView",
      "tracker" : "handleBankrollTrackerView",
      "statistics" : "handleStatsView",
      "lines" : "handleLinesView",
      "defense" : "handleDefenseView",
      "planner" : "handlePlannerView",
      "weather" : "handleWeatherView",
  		"*default" : "handleLandingView"
  	},
    // verifyLogin: function() {
    //   location.hash = User.getCurrentUser() ? 'home' : 'login'
    // },
    // verifySignup: function() {
    //   location.hash = User.getCurrentUser() ? 'home' : 'signup'
    // },
    handleConstructionView: function() {
      ReactDOM.render(<Construction />, document.querySelector('.container'))
    },
    handleLandingView: function() {
      ReactDOM.render(<Landing />, document.querySelector('.container'))
    },
    handleLoginView: function() {
      ReactDOM.render(<Login />, document.querySelector('.container'))
    },
    handleSignupView: function() {
      ReactDOM.render(<Signup />, document.querySelector('.container'))
    },
    handleHomeView: function() {
    	ReactDOM.render(<Home />, document.querySelector('.container'))
    },
    handleAnalyzerView: function() {
      ReactDOM.render(<Analyzer />, document.querySelector('.container'))
    },
    handlePicksView: function() {
      ReactDOM.render(<Picks />, document.querySelector('.container'))
    },
    handleBankrollTrackerView: function() {
      ReactDOM.render(<BankrollTracker />, document.querySelector('.container'))
    },
    handleStatsView: function() {
      ReactDOM.render(<Statistics />, document.querySelector('.container'))
    },
    handlePlannerView: function() {
      ReactDOM.render(<Planner />, document.querySelector('.container'))
    },
    handleLinesView: function() {
      ReactDOM.render(<Lines />, document.querySelector('.container'))
    },
    handleDefenseView: function() {
      ReactDOM.render(<Defense />, document.querySelector('.container'))
    },
  })
  new MainRouter()
  Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE.
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
