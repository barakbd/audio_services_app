var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
	name: {type: String, minlength: 2, required: true},
	email: {type: String, minlength: 3, required: true},
	to: {type: String, minlength: 2, required: true},
	text: {type: String, minlength: 3, required: true},
	read: {type: Boolean, default: false},
	title: {type: String},
	// Saving the userid everytime, whether it's a reply or a new message.
	userid: {type: String, required: true}
}, {timestamps: true});

mongoose.model('Message', MessageSchema);