function upvoteIdea(idea) {
	var qualityNumerizer = {
		'swill': '0',
		'plausible': '1',
		'genius': '2'
	}

	var qualityStringer = {
		0: 'swill',
		1: 'plausible',
		2: 'genius',
		3: 'genius'
	}

	var ideaId = idea.attr('data-id');
	var newQuality = qualityStringer[parseInt(idea.find('h5 .quality').attr('data-quality')) + 1];
	$.ajax({
		type: 'put',
		url: 'api/v1/ideas/' + ideaId,
		data: {
			idea: {
				quality: newQuality
			}
		},
		success: function() {
			idea.find('h5 .quality').attr('data-quality', qualityNumerizer[newQuality])
			idea.find('h5 .quality').text(newQuality)
		}
	});
}