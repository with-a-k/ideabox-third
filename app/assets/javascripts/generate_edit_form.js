function generateEditForm(idea) {
	var title = idea.find('.idea-title').text();
	var body = idea.find('.idea-body').text();
	idea.find('.idea-title').text('');
	idea.find('.idea-body').text('');
	$('<input type="text" class="temp-title">').attr({value: title}).appendTo(idea.find('.idea-title'));
	$('<input type="text" class="temp-body">').attr({value: body}).appendTo(idea.find('.idea-body'));
	$('<button class="save-idea">Revise</button>').appendTo(idea.find('.idea-body'));
	idea.find('.edit-idea').prop('disabled', true);
}