function pitchIdea(){
	var $titleField = $('#new-idea-title')
	var $bodyField = $('#new-idea-body')
	var $submitButton = $('#submit-idea')

	$submitButton.on('click', function(){
		$.post('api/v1/ideas', {'idea': { 'title': $titleField.val(), 'body': $bodyField.val() }})
		.then(function (data){postSuccessCallback(data)});
	});
}

function postSuccessCallback(data){
	renderIdea(data);
	$('#new-idea-title').val('');
	$('#new-idea-body').val('');
}