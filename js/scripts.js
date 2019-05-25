console.log("Welcome to my Portfolio website!")

$(window).resize(checkWindowWidth);
function checkWindowWidth() {
    var width = $(window).width();
    var x = document.getElementById('mynavtoggle');
    if (width >= 640) {
        x.className = 'navtoggle';
    }
}

function menuToggle() {
  var x = document.getElementById('mynavtoggle');
if (x.className === 'navtoggle') {
  x.className += ' responsive';
} else {
  x.className = 'navtoggle';
}
}
$(document).click(function(event) {
  $target = $(event.target);
  var x = document.getElementById('mynavtoggle');
  if(!$target.closest('#mynavtoggle').length &&
  $('#mynavtoggle').is(":visible")) {
    x.className = 'navtoggle';
  }
});
