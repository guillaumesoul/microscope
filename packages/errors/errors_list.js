// Template.meteorErrors.helpers({
// 	errors: function() {
// 		return Meteor.errors.find();
// 	}
// });

// Template.meteorErrors.rendered = function(){
// 	var error: this.data;
// 	Meteor.defer(function(){
// 		Meteor.error.update(error._id, {$set: {seen: true}});
// 	});
// };