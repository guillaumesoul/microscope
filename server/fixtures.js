if (Posts.find().count() ==0 ){
	Posts.insert({
		title: 'Sang de bourbe',
		author: 'john flugu',
		url: 'www.google.com'
	});
	Posts.insert({
		title: 'Meteor',
		author: 'Sandy Bourbe',
		url: 'www.meteor.com'
	});
	Posts.insert({
		title: 'ya ya ya ya ya',
		author: 'Tom coleman',
		url: 'www.yahoo.com'
	});
}