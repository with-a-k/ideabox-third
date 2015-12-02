function renderIdea(incomingIdea){
	var $ideaList = $('#all-ideas')

	$ideaList.prepend(
		'<div id="idea-' + incomingIdea.id + '"">' +
		'<h3>' + incomingIdea.title + '</h3>' +
		'<p class="idea-body">' + incomingIdea.body + '</p>' +
		'<h5>Quality: <button class="downvote">Downvote</button> ' + incomingIdea.quality + ' <button class="upvote">Upvote</button></h5>' +
		'<button class="edit-idea">Edit</button><button class="delete-idea">Delete</button>' +
		'</div>'
	)
}