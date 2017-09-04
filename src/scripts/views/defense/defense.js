import React   from 'react'
import STORE   from '../../store'
import ACTIONS from '../../actions'

// Components
import Header     from '../components/header'
import Navigation from '../components/navigation'
import Loading    from '../components/loading'

// Defense
import DefensiveButtons from './defensiveButtons'
// Current Season Defense (Per Game)
import CurrentDefenseQBPPG 	 from './currentDefPPG/currentDefenseQBPPG'
import CurrentDefenseRBPPG 	 from './currentDefPPG/currentDefenseRBPPG'
import CurrentDefenseWRPPG 	 from './currentDefPPG/currentDefenseWRPPG'
import CurrentDefenseTEPPG 	 from './currentDefPPG/currentDefenseTEPPG'
// Current Season Defense (Total)
import CurrentDefenseQBTotal from './currentDefTTL/currentDefenseQBTotal'
import CurrentDefenseRBTotal from './currentDefTTL/currentDefenseRBTotal'
import CurrentDefenseWRTotal from './currentDefTTL/currentDefenseWRTotal'
import CurrentDefenseTETotal from './currentDefTTL/currentDefenseTETotal'
// Last Season Defense (Per Game)
import LastDefenseQBPPG 	 from './lastDefPPG/lastDefenseQBPPG'
import LastDefenseRBPPG 	 from './lastDefPPG/lastDefenseRBPPG'
import LastDefenseWRPPG 	 from './lastDefPPG/lastDefenseWRPPG'
import LastDefenseTEPPG 	 from './lastDefPPG/lastDefenseTEPPG'
// Last Season Defense (Total)
import LastDefenseQBTotal 	 from './lastDefTTL/lastDefenseQBTotal'
import LastDefenseRBTotal 	 from './lastDefTTL/lastDefenseRBTotal'
import LastDefenseWRTotal 	 from './lastDefTTL/lastDefenseWRTotal'
import LastDefenseTETotal 	 from './lastDefTTL/lastDefenseTETotal'

var Defense = React.createClass({
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
					{ this.state.showCurrentDefense ? 
						<CurrentSeasonDefense 
							showCurrentDefensePPG = {this.state.showCurrentDefensePPG}
							showQBDef =    		{this.state.showQBDef}
							showRBDef =    		{this.state.showRBDef}
							showWRDef =    		{this.state.showWRDef}
							showTEDef =    		{this.state.showTEDef}
							qbDefButtonColor =  {this.state.qbDefButtonColor}
							rbDefButtonColor =  {this.state.rbDefButtonColor}
							wrDefButtonColor =  {this.state.wrDefButtonColor}
							teDefButtonColor =  {this.state.teDefButtonColor}
							ppgDefButtonColor = {this.state.ppgDefButtonColor}
							ttlDefButtonColor = {this.state.ttlDefButtonColor}
							csDefButtonColor =  {this.state.csDefButtonColor}
							lsDefButtonColor =  {this.state.lsDefButtonColor}
							qbDefButtonFontColor =  {this.state.qbDefButtonFontColor}
							rbDefButtonFontColor =  {this.state.rbDefButtonFontColor}
							wrDefButtonFontColor =  {this.state.wrDefButtonFontColor}
							teDefButtonFontColor =  {this.state.teDefButtonFontColor}
							ppgDefButtonFontColor = {this.state.ppgDefButtonFontColor}
							ttlDefButtonFontColor = {this.state.ttlDefButtonFontColor}
							csDefButtonFontColor =  {this.state.csDefButtonFontColor}
							lsDefButtonFontColor =  {this.state.lsDefButtonFontColor}	/> 
					: 
						<LastSeasonDefense 
							showLastDefensePPG = {this.state.showLastDefensePPG}
							showQBDef =    		{this.state.showQBDef}
							showRBDef =    		{this.state.showRBDef}
							showWRDef =    		{this.state.showWRDef}
							showTEDef =    		{this.state.showTEDef}
							qbDefButtonColor =  {this.state.qbDefButtonColor}
							rbDefButtonColor =  {this.state.rbDefButtonColor}
							wrDefButtonColor =  {this.state.wrDefButtonColor}
							teDefButtonColor =  {this.state.teDefButtonColor}
							ppgDefButtonColor = {this.state.ppgDefButtonColor}
							ttlDefButtonColor = {this.state.ttlDefButtonColor}
							csDefButtonColor =  {this.state.csDefButtonColor}
							lsDefButtonColor =  {this.state.lsDefButtonColor}
							qbDefButtonFontColor =  {this.state.qbDefButtonFontColor}
							rbDefButtonFontColor =  {this.state.rbDefButtonFontColor}
							wrDefButtonFontColor =  {this.state.wrDefButtonFontColor}
							teDefButtonFontColor =  {this.state.teDefButtonFontColor}
							ppgDefButtonFontColor = {this.state.ppgDefButtonFontColor}
							ttlDefButtonFontColor = {this.state.ttlDefButtonFontColor}
							csDefButtonFontColor =  {this.state.csDefButtonFontColor}
							lsDefButtonFontColor =  {this.state.lsDefButtonFontColor}	/> 
					}
		        </div>
			</div>
		)
	}
})

var CurrentSeasonDefense = React.createClass({
	showDvpModal: function(){
      alert('DvP Modal')
    },
	render: function() {
		return (
			<div className='data-container'>
				<div className='section-header'>
					<div className='section-overlay'>
		          		<h4>Defense vs. Position &nbsp;<i className="fa fa-info-circle" aria-hidden="true" onClick={this.showDvpModal}></i></h4>
		          	</div>
		        </div>
				<div className='stat-data-wrapper'>
					<DefensiveButtons 
						qbDefButtonColor =  {this.props.qbDefButtonColor}
						rbDefButtonColor =  {this.props.rbDefButtonColor}
						wrDefButtonColor =  {this.props.wrDefButtonColor}
						teDefButtonColor =  {this.props.teDefButtonColor}
						ppgDefButtonColor = {this.props.ppgDefButtonColor}
						ttlDefButtonColor = {this.props.ttlDefButtonColor}
						csDefButtonColor =  {this.props.csDefButtonColor}
						lsDefButtonColor =  {this.props.lsDefButtonColor}
						qbDefButtonFontColor =  {this.props.qbDefButtonFontColor}
						rbDefButtonFontColor =  {this.props.rbDefButtonFontColor}
						wrDefButtonFontColor =  {this.props.wrDefButtonFontColor}
						teDefButtonFontColor =  {this.props.teDefButtonFontColor}
						ppgDefButtonFontColor = {this.props.ppgDefButtonFontColor}
						ttlDefButtonFontColor = {this.props.ttlDefButtonFontColor}
						csDefButtonFontColor =  {this.props.csDefButtonFontColor}
						lsDefButtonFontColor =  {this.props.lsDefButtonFontColor}	/> 
					{ this.props.showCurrentDefensePPG ? 
						<CurrentDefensePPG 
							showQBDef =    	{this.props.showQBDef}
							showRBDef =    	{this.props.showRBDef}
							showWRDef =    	{this.props.showWRDef}
							showTEDef =    	{this.props.showTEDef} /> 
					: 
						<CurrentDefenseTotal 
							showQBDef =    	{this.props.showQBDef}
							showRBDef =    	{this.props.showRBDef}
							showWRDef =    	{this.props.showWRDef}
							showTEDef =    	{this.props.showTEDef} />   
					}
				</div>
			</div>
		)
	}
})

var LastSeasonDefense = React.createClass({
	showDvpModal: function(){
      alert('DvP Modal')
    },
	render: function() {
		return (
			<div className='data-container'>
				<div className='section-header'>
		          <div className='section-overlay'>
		          		<h4>Defense vs. Position &nbsp;<i className="fa fa-info-circle" aria-hidden="true" onClick={this.showDvpModal}></i></h4>
		          	</div>
		        </div>
				<div className='stat-data-wrapper'>
					<DefensiveButtons 
						qbDefButtonColor =  {this.props.qbDefButtonColor}
						rbDefButtonColor =  {this.props.rbDefButtonColor}
						wrDefButtonColor =  {this.props.wrDefButtonColor}
						teDefButtonColor =  {this.props.teDefButtonColor}
						ppgDefButtonColor = {this.props.ppgDefButtonColor}
						ttlDefButtonColor = {this.props.ttlDefButtonColor}
						csDefButtonColor =  {this.props.csDefButtonColor}
						lsDefButtonColor =  {this.props.lsDefButtonColor}
						qbDefButtonFontColor =  {this.props.qbDefButtonFontColor}
						rbDefButtonFontColor =  {this.props.rbDefButtonFontColor}
						wrDefButtonFontColor =  {this.props.wrDefButtonFontColor}
						teDefButtonFontColor =  {this.props.teDefButtonFontColor}
						ppgDefButtonFontColor = {this.props.ppgDefButtonFontColor}
						ttlDefButtonFontColor = {this.props.ttlDefButtonFontColor}
						csDefButtonFontColor =  {this.props.csDefButtonFontColor}
						lsDefButtonFontColor =  {this.props.lsDefButtonFontColor}	/> 
					{ this.props.showLastDefensePPG ? 
						<LastDefensePPG 
							showQBDef =    	{this.props.showQBDef}
							showRBDef =    	{this.props.showRBDef}
							showWRDef =    	{this.props.showWRDef}
							showTEDef =    	{this.props.showTEDef} />
					: 
						<LastDefenseTotal 
							showQBDef =    	{this.props.showQBDef}
							showRBDef =    	{this.props.showRBDef}
							showWRDef =    	{this.props.showWRDef}
							showTEDef =    	{this.props.showTEDef} />
					}
				</div>
			</div>
		)
	}
})

var CurrentDefensePPG = React.createClass({
	render: function() {
		return (
			<div className='positional-wrapper'>
	          	<CurrentDefenseQBPPG 
	          		showQBDef = {this.props.showQBDef} />
	          	<CurrentDefenseRBPPG 
					showRBDef = {this.props.showRBDef} />
	          	<CurrentDefenseWRPPG 
					showWRDef = {this.props.showWRDef} />
	          	<CurrentDefenseTEPPG 
					showTEDef = {this.props.showTEDef} />
			</div>
		)
	}
})

var CurrentDefenseTotal = React.createClass({
	render: function() {
		return (
			<div className='positional-wrapper'>
	          	<CurrentDefenseQBTotal 
	          		showQBDef = {this.props.showQBDef} />
	          	<CurrentDefenseRBTotal 
					showRBDef = {this.props.showRBDef} />
	          	<CurrentDefenseWRTotal 
					showWRDef = {this.props.showWRDef} />	
	          	<CurrentDefenseTETotal 
					showTEDef = {this.props.showTEDef} />
			</div>
		)
	}
})

var LastDefensePPG = React.createClass({
	render: function() {
		return (
			<div className='positional-wrapper'>
	          	<LastDefenseQBPPG 
	          		showQBDef = {this.props.showQBDef} />
	          	<LastDefenseRBPPG 
					showRBDef = {this.props.showRBDef} />
	          	<LastDefenseWRPPG 
					showWRDef = {this.props.showWRDef} />	
	          	<LastDefenseTEPPG 
					showTEDef = {this.props.showTEDef} />
			</div>
		)
	}
})

var LastDefenseTotal = React.createClass({
	render: function() {
		return (
			<div className='positional-wrapper'>
	          	<LastDefenseQBTotal 
	          		showQBDef = {this.props.showQBDef} />
	          	<LastDefenseRBTotal 
					showRBDef = {this.props.showRBDef} />
	          	<LastDefenseWRTotal 
					showWRDef = {this.props.showWRDef} />	
	          	<LastDefenseTETotal 
					showTEDef = {this.props.showTEDef} />
			</div>
		)
	}
})

export default Defense