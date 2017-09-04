import Backbone from 'backbone'

export var Contest = Backbone.Model.extend({
	urlRoot: '/api/contest',
	idAttribute: '_id'
})

export var ContestCollection = Backbone.Collection.extend({
	model: Contest,
	url: '/api/contest'
})