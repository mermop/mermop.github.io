$( document ).ready(function() {
  $('.drag').draggable(); 
  $( "#merrin").click(function() {
    newCircle();
  });
});
pairs = [['creator', 'destroyer'], ['writer', 'deleter'], ['lover', 'hater'], ['thinker', 'feeler'], ['asleep', 'insomniac']]
newCircle = function() {
  console.log('yes')
}
