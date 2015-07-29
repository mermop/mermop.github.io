var what_i_do_array = ["Agile project management", "Photography", "Print design", "Editing", "Illustration", "Having great opinions", "Owning many grey markers", "Event management", "Diversity consulting", "I also make great coffee", "Teaching technology", "Telling computers what to do"]
var talk_to_me_if_array = ["You have a terrible idea.", "You have a great idea.", "You need lean and practical UX advice.", "You just don't know where to use apostrophes and would pay for me to tell you when you are using apostrophes incorrectly.", "You like the cut of my jib.", "You want to talk through and plan a website or app.", "You want to build a small website quickly.", "You are doing interesting work.", "You are doing work that makes the world a little better."]

$( document ).on( 'click', '[id$=_add]', function() {
  var $this = $( this ), // clicked element
  $list = $('#' + this.id.replace( /_add/, '_list' )); // matching 'list'

  var list_id = this.id.replace (/_add/, ''); // root ID

  var array = eval(list_id + '_array');

  var array_length = array.length
  var number = Math.floor(Math.random() * (array_length - 0)) + 0;

  var order = $('.' + list_id + '_added').length;

  var item = array[number]

  $list.append("<li class='" + list_id + "_added added'>" + item + "</li>")

  array.splice(number, 1)
  if(array.length == 0){
    $this.remove();
  }
});
