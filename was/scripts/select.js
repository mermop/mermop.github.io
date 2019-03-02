// hello welcome to this javascript file
// in the markup elements need to have a class select-[x] in common with all the other things you are selecting between
// it needs an ID of select-[something]
// the thing you click on will get a class of 'selected'
// all the other things with the same select-[x] class will get a class of 'unselected'
$( document ).on( 'click', '[id^=select]', function() {
  var $this = $( this ); // clicked element
  var selected = this.id.replace( /^select-/, '' ); // selected item id (eg find 'coffee' from 'select-coffee')
  var classes = $this.attr("class").split(' '); // this could break if classes are separated by characters other than ' '
  var option;
  for (var i = classes.length - 1; i >= 0; i--) {
    if ( classes[i].match(/^select-/) ) { // find the class with the format select-[x]
      var option = classes[i].replace( /^select-/, '' ); // we are calling that thing 'option'
    }
  };
  // unselect everything with the option of the one you clicked, select only the one you have clicked
  $('.select-' + option).addClass( 'unselected' );
  $('.select-' + option).removeClass( 'selected' );
  $this.removeClass( 'unselected' );
  $this.addClass( 'selected' );
  // note that update_contact_links is specific to 'drink' and 'week'
  update_contact_links();
});

function update_contact_links () {
  // create phrase
  var phrase;
  var selected_drink = $('.select-drink.selected').text();
  var selected_week = $('.select-week.selected').text();
  if(selected_drink == ""){
    phrase = "Let's chat " // default if none selected
  } else {
    phrase = "Let's talk over " + selected_drink
  }
  if(selected_week == ""){
    phrase = phrase + " sometime." // default if none selected
  } else {
    phrase = phrase + " " + selected_week + "."
  }
  // update links to include phrase
  $('#twitter-link').attr("href", "https://twitter.com/intent/tweet?text=%40merxplat%20" + encodeURI(phrase) )
  $('#email-link').attr("href", "mailto:hello@merr.in?Subject=" + encodeURI(phrase) )
}
// that's all!! bye <3
