function filterIdeas() {
	var $ideas = $('.idea');

  $('#filter-title').on('keyup', function (){
    var searchTerm = this.value.toLowerCase();
    $('.idea').each(function (index, idea) {
      var text = $(idea).children('p.idea-body').text().toLowerCase() + $(idea).children('h3').text().toLowerCase();
      var matches = text.indexOf(searchTerm) !== -1;
      $(idea).toggle(matches);
    });
  });
}