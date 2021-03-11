let front = {
  hamburger: $('.hamburger'),
  nav: $('.navbar'),
  init: function () {
      this.events();      
  },
  toggleNav: function () {
    if (!this.hamburger.hasClass('open')) {
        this.hamburger.addClass('open');
        this.nav.slideDown('fast');
        } else {
            this.hamburger.removeClass('open');
            this.nav.hide();
        }
    },


  events: function () {
      let self = this;
      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });

      $(document).on('click', '.sidebar-title', function () {
        let item = $(this);
        let list = $(this).next('.sidebar-content');
        if (item.hasClass('active')) {
            item.removeClass('active');
            list.slideToggle();
        } else {
            item.addClass('active');
            list.slideToggle();
        }
      });
      // $(document).on('click', '.btn-filter', function () {
      //     let item = $(this);
      //     let list = $(this).next('.filter-container');
      //     $('body').toggleClass('active');
      //     $('.filter-container').toggleClass('active');
      //   });
  }
};

jQuery(function () {
  front.init();
});

function showLanguages() {
  $(".lang").toggleClass("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.lang-btn')) {
    var dropdowns = $(".lang");
    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 235,
    values: [ 6, 235 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "€" + ui.values[ 0 ] + " - €" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "€" + $( "#slider-range" ).slider( "values", 0 ) +
    " - €" + $( "#slider-range" ).slider( "values", 1 ) );
} );