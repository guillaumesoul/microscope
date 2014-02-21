Template.postPage.helper({
	currentPost: function() {
		return Posts.findOne(Session.get('currentPostId'));
	}
})