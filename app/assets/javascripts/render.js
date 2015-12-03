function renderIdea(incomingIdea){
	var $ideaList = $('#idea-holder')

	$ideaList.prepend(
		'<div class="idea" data-id="' + incomingIdea.id + '">' +
		'<h3 class="idea-title">' + incomingIdea.title + '</h3>' +
		'<p class="idea-body">' + incomingIdea.body + '</p>' +
		'<h5>Quality: <button class="downvote">Downvote</button> <span class="quality" data-quality="0">' + incomingIdea.quality + '</span> <button class="upvote">Upvote</button></h5>' +
		'<button class="edit-idea">Edit</button><button class="delete-idea">Delete</button>' +
		'</div>'
	)
}