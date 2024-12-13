  //Side nav

  $(function() {
	"use strict";


  $("#DarkMode").on("click", function() {
    $("html").attr("data-bs-theme") == "dark" ? $("html").attr("data-bs-theme" ,"light")  :  $("html").attr("data-bs-theme", "dark")
  }),

    
  $(function () {

      $('#sidenav').metisMenu();

  });



});