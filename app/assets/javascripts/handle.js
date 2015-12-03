function handleIdeas() {
	var $ideas = $('#idea-holder')

	$ideas.on('click', function (event){
		var $idea = $(event.target).closest('.idea');
		if ($(event.target).hasClass('delete-idea')) {
			deleteIdea($idea);
		} else if ($(event.target).hasClass('upvote')) {
			upvoteIdea($idea);
		} else if ($(event.target).hasClass('downvote')) {
			downvoteIdea($idea);
		} else if ($(event.target).hasClass('edit-idea') || $(event.target).hasClass('idea-title') || $(event.target).hasClass('idea-body')) {
			generateEditForm($idea);
		} else if ($(event.target).hasClass('save-idea')) {
			saveEdits($idea);
		}
	});

	$ideas.on('focusout', function (event){
		saveEdits($(event.target).closest('.idea'));
	});
}