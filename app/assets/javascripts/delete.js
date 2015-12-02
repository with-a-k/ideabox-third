function deleteIdeas() {
	var $deleteButton = $('.delete-idea')

	$deleteButton.each(function (index, button){
		$(button).on('click', function (){
			var ideaId = $(button).parent().attr('data-id');
			console.log('Clicked a delete button. It is associated with idea ' + $(button).parent().attr('data-id') )
			$.ajax({
				type: 'delete',
				url: 'api/v1/ideas/' + ideaId,
				success: removeIdeaFromPage(ideaId),
				error: removeIdeaFromPage(ideaId)
			});
		});
	});

	function removeIdeaFromPage(id){
		$("[data-id='" + id + "']").remove()
	}
}