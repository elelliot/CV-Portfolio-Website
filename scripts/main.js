// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  // initialize animate on scroll library
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); 
});




// Smooth scroll for links with hashes (those with smooth-scroll class)
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 600, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});



//Vanilla JavaScript Solution for SmoothScroll
// Define selector for selecting
        // anchor links with the hash
        // let anchorSelector = 'a[href^="#"]';
     
        // // Collect all such anchor links
        // let anchorList =
        //     document.querySelectorAll(anchorSelector);
         
        // // Iterate through each of the links
        // anchorList.forEach(link => {
        //     link.onclick = function (e) {
     
        //         // Prevent scrolling if the
        //         // hash value is blank
        //         e.preventDefault();
         
        //         // Get the destination to scroll to
        //         // using the hash property
        //         let destination =
        //             document.querySelector(this.hash);
         
        //         // Scroll to the destination using
        //         // scrollIntoView method
        //         destination.scrollIntoView({
        //             behavior: 'smooth'
        //         });
        //     }
        // });
