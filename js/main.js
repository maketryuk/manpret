let front = {
  hamburger: $('.hamburger'),
  header: $('.header'),
  headerCategories: $('.header-bottom'),
  body: $('body'),
  init: function () {
      this.events();      
  },
  toggleNav: function () {
    let mainNavHeight = $('.header-top').height();
    console.log(mainNavHeight);
    if (!this.hamburger.hasClass('open')) {
        this.hamburger.addClass('open');
        this.header.addClass('active');
        this.body.addClass('overflow');
        this.headerCategories.css('padding-top', mainNavHeight + 10);
        } else {
            this.hamburger.removeClass('open');
            this.header.removeClass('active');
            this.body.removeClass('overflow');
        }
    },


  events: function () {
      let self = this;

    

          // if (window.matchMedia("(max-width: 992px)").matches) {
      //         let categories = $('.single-categories--mobile');
      //         let categoriesH = (-categories.height() - 52 );
      //         $(categories).css('margin-top', categoriesH);
      //     } else {
      //         null
      //     }


      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });
      $(document).on('click', '.close-mobile-menu', function () {
          self.toggleNav();
      });
      $(document).on('click', '.sidebar-mobile-toggler', function () {
        $('.sidebar').toggleClass('active');
      });
      // $(document).on('click', '.close-sidebar', function () {
      //   $('.sidebar').removeClass('active');
      // });
      $(document).on('click', '.products-text .more-btn', function () {
        $(this).hide();
        $('.products-text p').css('display', 'block');
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