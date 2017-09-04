import React from 'react'
import Backbone from 'backbone'
import STORE from '../../store'
import ACTIONS from '../../actions'
import User from '../../models/userModel'

var Note = React.createClass({
    render: function() {
  	     return (
      		<div>
                <p className="note">Red headers indicate stats/grades reflective of 2016 season</p>
      		</div>
  	     )
     }
})

export default Note
