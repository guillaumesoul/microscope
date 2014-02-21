Template.postSubmit.events({
	'submit form': function(event){
		event.preventDefault();

		var post = {
			url: $(event.target).find('[name=url]').val(),
			title: $(event.target).find('[name=title]').val(),
			message: $(event.target).find('[name=message]').val()
		}

		//post._id = Posts.insert(post);
		Meteor.call('post', post, function(error, id) {
			if (error) {
				//affiche l'erreur à l'utilisateur
				throwError(error.reason);
				//Pour une erreur d'un post deja existant nous renvoyer ici
				if (error.error === 302) {
					Meteor.Router.to('postPage', error.details)
				} 

			} 
			else {
					Meteor.Router.to('postPage',id); 
				}
		});
	}
});