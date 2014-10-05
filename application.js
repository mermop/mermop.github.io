var numberOfClickableElements = $('[id^=more]').length;
var numberOfClickedElements = 0;

// take all clicks to document that have an id starting with 'more'
$( document ).on( 'click', '[id^=more]', function() {
  var $this = $( this ), // clicked element
    $reveal = $('#' + this.id.replace( /^more/, 'reveal' )); // matching 'reveal'

  $this.toggleClass( 'clicked' );
  $reveal.toggleClass( 'hidden' );

  if($this.hasClass('ever-clicked') == false) { 
    numberOfClickedElements++;
    score_update(numberOfClickedElements);
    $this.addClass('ever-clicked');
  }

} );

function score_update(score) {
  $("#clicked").text(score);
  $('#clickable').text("/" + numberOfClickableElements);
}