// fade in grid items  ==================================

  $(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".fadein")

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i]

      if ($(tag).offset().top < pageBottom) {
        $(tag).addClass("visible")
      } else {
        $(tag).removeClass("visible")
      }
    }
  })

  $(document).ready(function() {
    $('.foot').hide(); 
    $(".answer").css("display", "none");
    $("#hundred").css("display", "block");
    $("#family").css("display", "none");


    $(window).on('scroll', function() {
      if ($(window).scrollTop() === 0) {
        $('.foot').fadeOut();
      } else {
        $('.foot').fadeIn(1000); // Display with fade effect
      }
    });

    $(".btn").click(function() {
      var $answer = $(this).closest(".fadein").find(".answer");
      $answer.slideToggle("slow");
      var $closeImage = $(this).closest(".fadein").find(".close");
      var newSrc = $closeImage.attr("src") === "./assets/image/seventh_v/spread_plus.svg" ? "./assets/image/seventh_v/spread_minus.svg" : "./assets/image/seventh_v/spread_plus.svg";
      $closeImage.attr("src", newSrc);
    });

    $(".que_btn").on('click', function() {
      $("#hundred").css("display", "block");
      $("#family").css("display", "none");
    });
  
    $(".fam_btn").on('click', function() {
        $("#family").css("display", "block");
        $("#hundred").css("display", "none");
    });

    $(".que_btn").on('click', () => {
    });


    $(".que_btn").on('click', function() {
        $(this).removeClass("hid").addClass("show"); // 
        $(".fam_btn").removeClass("show").addClass("hid");
    });
    $(".fam_btn").on('click', function() {
        $(this).removeClass("hid").addClass("show"); // 
        $(".que_btn").removeClass("show").addClass("hid");
    });

    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    $("#change_color").mouseover(function() {
      $(this).find("img").attr("src", "./assets/image/header/right/nav_pink.svg"); // Embrace the change of src attribute upon the link's hover [[1]](https://poe.com/citation?message_id=225075848726&citation=1).
    }).mouseleave(function() {
      $(this).find("img").attr("src", "./assets/image/header/right/nav_black.svg"); // Embrace the return to the original src attribute upon the departure of the mouse [[1]](https://poe.com/citation?message_id=225076609558&citation=1).
    });

    // $("#change_color")
  });
