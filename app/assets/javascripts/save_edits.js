function saveEdits(idea) {
	var ideaId = idea.attr('data-id');
	var title = idea.find('.temp-title').val();
	var body = idea.find('.temp-body').val();
	$.ajax({
		type: 'put',
		url: 'api/v1/ideas/' + ideaId,
		data: {
			idea: {
				title: title,
				body: body
			}
		},
		success: function (){
			idea.find('.temp-title').remove();
			idea.find('.temp-body').remove();
			idea.find('.idea-title').text(title);
			idea.find('.idea-body').text(body);
			idea.find('.edit-idea').prop('disabled', false);
		}
	});
}