var what_i_do_array = ["Agile project management", "Photography", "Print design", "Editing", "Illustration", "Having great opinions", "Owning many grey markers", "Event management", "Diversity consulting?", "Intellectual labour", "Emotional labour", "I also make great coffee", "Telling computers what to do"]
var talk_to_me_if_array = ["You frequently preface sentences with the phrase 'this might sound crazy, but hear me out'.", "You have a terrible idea.", "You have a great idea.", "You need a UX consultant who doesn't charge as much as most UX consultants.", "Maybe you have some kind of dev outreach job? I could totally do that.", "You just don't know where to use apostrophes and would pay for me to tell you when you are using apostrophes incorrectly.", "You like the cut of my jib.", "You will pay me for giving you advice about diversity.", "You will pay me for making you a website.", "You want to talk through and plan a website or app.", "You would pay me for drawing pictures.", "You are doing interesting work.", "You are doing work that makes the world a little better."]

$( document ).ready(function() {
});

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
