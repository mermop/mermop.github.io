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

  update_contact_links();

});

function update_contact_links () {
  // create phrase:
  var phrase;
  var selected_drink = $('.select-drink.selected').text();
  var selected_week = $('.select-week.selected').text();
  if(selected_drink == ""){
    phrase = "Let's chat "
  } else {
    phrase = "Let's talk over " + selected_drink
  }
  if(selected_week == ""){
    phrase = phrase + " sometime."
  } else {
    phrase = phrase + " " + selected_week + "."
  }
  $('#twitter-link').attr("href", "https://twitter.com/intent/tweet?text=%40merxplat%20" + encodeURI(phrase) )
  $('#email-link').attr("href", "mailto:hello@merr.in?Subject=" + encodeURI(phrase) )

}
