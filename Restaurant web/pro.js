$(document).ready(function () {
  // Make the navbar sticky after scrolling down
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });

  // Display current year in the footer
  function newDate() {
    return new Date().getFullYear();
  }

  $("#autodate").text(newDate());
});
