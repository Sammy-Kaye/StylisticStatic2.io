var sectionArray = [1, 2, 3, 4, 5, 6];
var currentSectionIndex = 0;

$(document).scroll(function() {
  var docScroll = $(document).scrollTop();
  for (var i = 0; i < sectionArray.length; i++) {
    var offsetSection = $('#' + 'section_' + sectionArray[i]).offset().top - 83;
    if (docScroll >= offsetSection) {
      currentSectionIndex = i;
    }
  }
  updateNavigation();
});

function updateNavigation() {
  $('.navbar-nav .nav-item .nav-link').removeClass('active').addClass('inactive');
  $('.navbar-nav .nav-item .nav-link').eq(currentSectionIndex).addClass('active').removeClass('inactive');
}

$.each(sectionArray, function(index, value) {
  $('.click-scroll').eq(index).click(function(e) {
    e.preventDefault();
    var offsetClick = $('#' + 'section_' + value).offset().top - 83;
    $('html, body').animate({
      'scrollTop': offsetClick
    }, 300);
  });
});

$(document).ready(function() {
  updateNavigation();
});

(function ($) {

    "use strict";
  
      // MENU
      $('.navbar-collapse a').on('click',function(){
        $(".navbar-collapse").collapse('hide');
      });
  
      // CUSTOM LINK
      $('.smoothscroll').click(function(){
        var el = $(this).attr('href');
        var elWrapped = $(el);
        var header_height = $('.navbar').height();
  
        scrollToDiv(elWrapped,header_height);
        return false;
  
        function scrollToDiv(element,navheight){
          var offset = element.offset();
          var offsetTop = offset.top;
          var totalScroll = offsetTop-navheight;
  
          $('body,html').animate({
          scrollTop: totalScroll
          }, 300);
        }
      });
  
  })(window.jQuery);
  
  window.onscroll = function() {myFunction()};

  function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("navbar navbar-expand-lg").style.top = "0";
    } else {
      document.getElementById("navbar navbar-expand-lg").style.top = "50px"; // adjust this value to your needs
    }
  } 

// Function to handle posting a comment
function postComment() {
  const commentInput = document.getElementById("comment-input").value.trim();
  const commentList = document.getElementById("comment-list");

  if (commentInput !== "") {
      const commentElement = document.createElement("div");
      commentElement.classList.add("comment");
      commentElement.innerHTML = `<p>${commentInput}</p>`;
      commentList.appendChild(commentElement);

      // Clear comment input after posting
      document.getElementById("comment-input").value = "";
  } else {
      alert("Please enter a comment before posting.");
  }
}

// Event listener for comment button
document.getElementById("comment-button").addEventListener("click", postComment);



