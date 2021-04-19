function myFunction(x) {
  x.classList.toggle("change");
  $("#main-menu-list").toggleClass("menu-hidden", 800, "easeOutQuint");
}
// $(".modal").each(function() {
//   $(this).wrap('<div class="overlay"></div>');
// });
function modalToggle() {
  $(".open-modal").on("click", function(e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
      modal = $($this).data("modal");

    $(modal)
      .parents(".overlay")
      .addClass("open");
    setTimeout(function() {
      $(modal).addClass("open");
    }, 350);

    $(document).on("click", function(e) {
      var target = $(e.target);

      if ($(target).hasClass("overlay")) {
        $(target)
          .find(".modal")
          .each(function() {
            $(this).removeClass("open");
          });
        setTimeout(function() {
          $(target).removeClass("open");
        }, 350);
      }
    });
  });

  $(".close-modal").on("click", function(e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
      modal = $($this).data("modal");

    $(modal).removeClass("open");
    setTimeout(function() {
      $(modal)
        .parents(".overlay")
        .removeClass("open");
    }, 350);
  });
}
