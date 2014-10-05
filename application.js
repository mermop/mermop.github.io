var numberOfClickableElements;
var numberOfClickedElements = 0;

$( document ).ready(function() {
  numberOfClickableElements = $('[id^=more]').length;
});

// take all clicks to document that have an id starting with 'more'
$( document ).on( 'click', '[id^=more]', function() {
  var $this = $( this ), // clicked element
    $reveal = $('#' + this.id.replace( /^more/, 'reveal' )); // matching 'reveal'
  $('.marked').removeClass('marked');
  $('.marker').remove();

  $this.toggleClass( 'clicked' );
  $reveal.toggleClass( 'hidden' );

  //Add red marker
  $reveal.addClass( 'marked' );
  $reveal.prepend( '<a class="marker" href=#'+ $this[0].id +'></a>' )

  //Update score
  if(!$this.hasClass('ever-clicked')) { 
    numberOfClickedElements++;
    score_update(numberOfClickedElements);
    $this.addClass('ever-clicked');
  }

} );

function score_update(score) {
  $("#clicked").text(score);
  $('#clickable').text("/" + numberOfClickableElements);
}