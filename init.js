var navispinned=false;
var interval_id;

// Fixes the navbar to the top of the page based on scroll distance
function scrollFunc() {
  var scrollDistance = $(window).scrollTop();
  var threshold = $('#anchor').offset().top;

  // Scrolled past the scrollbar
  if ( scrollDistance >= threshold ) {
    $('.navclass').addClass('navbar-fixed');
    $('#anchor').css('margin-bottom','50px');
    navispinned=true;
  }
  // Scrolled back up
  else if (navispinned) {
    $('.navclass').removeClass('navbar-fixed');
    $('#anchor').css('margin-bottom','0');
  }
}


function getAge() {
  // Returns my age in years to 8 decimal places
  var birth = Date.parse("11/03/2001 17:23"); // My time of birth, in milliseconds.
  var today = new Date(); // Right now, in milliseconds
  var difference = today-birth; // My age, in milliseconds
  var seconds = Math.floor(difference/1000); // My age, in seconds
  var yearsOld = seconds/31536000; // My age, in years
  return yearsOld.toFixed(8);
}

function updateAge() {
  // Put my age in the about paragraph if it's on-screen
  var agespan = $('#myage');
  // Determine whether any part of the element is onscreen (vertically)
  var top = $(window).scrollTop(); // Top of window
  var bottom = top + $(window).height(); // Bottom of window
  var elemtop = agespan.offset().top; // Top of element
  var elembottom = elemtop+agespan.outerHeight(); // Bottom of element
  var isinview = (elembottom > top && elemtop < bottom && !document.hidden); // Element is onscreen?
  if (isinview) {
    agespan.text(getAge()); // Load current age into the span
  }

}

$(document).ready(function() {
  // Initially load text into span regardless
  $('#myage').text(getAge());
  // Register button (on small devices) to show the sidenav
  $('.button-collapse').sideNav();
  // Scroll event for the navbar to be pinned after scrolling.
  $(window).scroll(scrollFunc);
  // Update my age every second that it's onscreen
  interval_id = setInterval(updateAge,1000);
});
