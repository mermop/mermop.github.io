// take all clicks to document that have an id starting with 'more'
$( document ).on( 'click', '[id^=more]', function() {
  var $this = $( this ), // clicked element
    $reveal = $('#' + this.id.replace( /^more/, 'reveal' )); // matching 'reveal'

  $this.toggleClass( 'clicked' );
  $reveal.toggleClass( 'hidden' );
} );
