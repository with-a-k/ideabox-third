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
		}
	})
}