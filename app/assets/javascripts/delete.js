function deleteIdea(idea) {
	var ideaId = idea.attr('data-id');
	$.ajax({
		type: 'delete',
		url: 'api/v1/ideas/' + ideaId,
		success: idea.remove(),
		error: idea.remove()
	});
}