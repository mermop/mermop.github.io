var what_i_do_array = ["Agile project management", "Photography", "Print design", "Editing", "Illustration", "Having great opinions", "Owning many grey markers", "Event management", "Diversity consulting?", "Intellectual labour", "Emotional labour"]
var talk_to_me_if_array = ["You frequently preface sentences with the phrase 'this might sound crazy, but hear me out'.", "You have a terrible idea.", "You have a great idea.", "You pay bills on time.", "You need a UX consultant who doesn't charge as much as most UX consultants. ", "Maybe you have some kind of dev outreach job? I could totally do that.", "You just don't know where to use apostrophes and will pay for me to tell you when you are using apostrophes incorrectly.", "You like the cut of my jib.", "You will pay me for giving you advice about diversity.", "You will pay me for giving you advice about design.", "You will pay me for making you a website.", "You will pay me for talking through your website idea and making wireframes.", "You will pay me for drawing pictures.", "You are doing interesting work.", "You are doing work that makes the world a little better."]

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
  console.log ('number: ' + number + '. array length: ' + array_length)

  $list.append("<li class='" + list_id + "_added added'>" + item + "</li>")

  array.splice(number, 1)

  console.log( list_id + ' added: ' + $('.' + list_id + '_added').length )
});
