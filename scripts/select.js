$( document ).on( 'click', '[id^=select]', function() {
  var $this = $( this ); // clicked element
  var selected = this.id.replace( /^select-/, '' );
  var classes = $this.attr("class").split(' ');
  var option;

  for (var i = classes.length - 1; i >= 0; i--) {
    if ( classes[i].match(/^select-/) ) {
      var option = classes[i].replace( /^select-/, '' );
    }
  };

  $('.select-' + option).addClass( 'unselected' );
  $('.select-' + option).removeClass( 'selected' );
  $this.removeClass( 'unselected' );
  $this.addClass( 'selected' );


  console.log(selected + ' class is ' + option )
});
