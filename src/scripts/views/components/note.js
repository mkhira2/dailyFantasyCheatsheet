import React from 'react'
import Backbone from 'backbone'
import STORE from '../../store'
import ACTIONS from '../../actions'
import User from '../../models/userModel'

var Note = React.createClass({
    render: function() {
  	     return (
      		<div>
                <p className="note"></p>
      		</div>
  	     )
     }
})

export default Note
