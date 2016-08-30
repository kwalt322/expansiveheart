$( document ).ready(function() {

    // Blog Accordion Hash override -------------------------------
    // Getting hash from URL bar and forcing
    // accordion link to open and show blog URL
    var hash = window.location.hash;

    if(window.location.hash) {
      console.log(hash);
      $("html, body").animate({
        scrollTop: $(hash).offset().top
      });
      $(hash).addClass("active");
      $(hash + '+div.panel').addClass("show");
    }

    //note to self - write on click hash to URL bar

    // Haburger animation ------------------------------------------
    $("#hamburger").click(function(){
         // $("#mobilenav").toggleClass("mobileactive");
         //  $("#content").toggleClass("toggle-content");
         // $(this).toggleClass("testblue", 1000, "easeOut");
         // e.preventDefault();
         $("#mobilenav").toggleClass("mobileactive");
         $(".main-chunk").toggleClass("quiet");
         $("#nav-icon3").toggleClass("open");
    });

/////////////////////////////////////////////////////////////////////

// check to see if height is above breakpoint on page load
    if ($(window).height() > 1300) {
     		console.log("sticky");
     		$(".main-chunk.internal-pages#content p.footer-text").addClass("stick");
     		$(".main-chunk.internal-pages#content").addClass("stickyfoot");
  		}
  		else if ($(window).height() < 1300) {
  			console.log("no stiky");
  			$(".main-chunk.internal-pages#content p.footer-text").removeClass("stick");
     		$(".main-chunk.internal-pages#content").removeClass("stickyfoot");
  		}

// when window is resized, keep checking to make
// sure page classes are still correct
 	$(window).resize(function() {
  		if ($(window).height() > 1300) {
     		console.log("sticky");
     		$(".main-chunk.internal-pages#content p.footer-text").addClass("stick");
     		$(".main-chunk.internal-pages#content").addClass("stickyfoot");
  		}
  		else if ($(window).height() < 1300) {
  			console.log("no stiky");
  			$(".main-chunk.internal-pages#content p.footer-text").removeClass("stick");
     		$(".main-chunk.internal-pages#content").removeClass("stickyfoot");
  		}
  	});

// script for service page tabs to work

$('ul.tabs li').click(function(){
	var tab_id = $(this).attr('data-tab');

	$('ul.tabs li').removeClass('current');
	$('.tab-content').removeClass('current');

	$(this).addClass('current');
	$("#"+tab_id).addClass('current');
});


// script to make the accordion work
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}










});