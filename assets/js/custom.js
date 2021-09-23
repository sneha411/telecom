var winWidth,
    winHeight;


function set_background() {
    $('.set-bg').each(function() {
        if (typeof $(this).attr('data-mob-img') === 'undefined') {
            $(this).css({
                'background': 'url(' + $(this).attr('data-img') + ')',
                'background-size': 'cover'
            });
        } else {
            if (winWidth > mobile_breakbpoint) {
                if (typeof $(this).attr('data-img') != 'undefined') {
                    $(this).css({
                        'background': 'url(' + $(this).attr('data-img') + ')',
                        'background-size': 'cover'
                    });
                }
            } else {
                $(this).css({
                    'background': 'url(' + $(this).attr('data-mob-img') + ')',
                    'background-size': 'cover'
                });
            }
        }
    });
}

function get_height_width() {
    winWidth = $(window).width(),
        winHeight = $(window).height();
}

function set_height_width() {
    if ($('body').height() < winHeight) {
        $('.wh').outerHeight(winHeight);
    }
    $('.wh-min').css('min-height', winHeight);
    $('.ww').outerWidth(winWidth);
}

function stickyMenu() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 60) {
            $('.bs-header').addClass("sticky");
        } else {
            $('.bs-header').removeClass("sticky");
        }
    });
}

function menuActive() {
    var m = $('.bs-header').attr('data-nav').toLowerCase();
    $('.main-nav li a').each(function(index) {
        if ($(this).html().toLowerCase() == m) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
}

function customer_testimonial() {
    var swiper = new Swiper('.customer-testimonial', {
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 1,
            },
        }
    });
}
function partners_testimonial(){
    var swiper = new Swiper('.partners-testimonial', {
        slidesPerView: 5,
        spaceBetween: 40,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            767: {
                slidesPerView: 2,
            },
        }
    });
   
}
function wow_animation(){
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       false,       // default
        live:         true        // default
      }
      )
      wow.init();
}
function counter() {
    $(".counter").each(function() {
        var $this = $(this),
            countTo = $this.attr("data-count");
        $({ countNum: $this.text() }).animate({ countNum: countTo }, {
            duration: 10000,
            easing: "linear",
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });
}
$(window).load(function() {
    counter();
});

function bannr_anim() {
    if($("#canvas").length==1){
      var renderer, scene, camera, composer, circle, skelet, particle;
    window.onload = function () {
      init();
      //animate();
    };
    function init() {
      // renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      // renderer.setPixelRatio(
      //   window.devicePixelRatio ? window.devicePixelRatio : 1
      // );
      // renderer.setSize(window.innerWidth, window.innerHeight);
      // renderer.autoClear = false;
      // renderer.setClearColor(0xffffff, 0.0);
      if ($("#canvas").length) {
        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
        particlesJS.load('canvas', 'assets/js/libraries/particlesjs-config.json', function() {
          console.log('callback - particles.js config loaded');
        });
        //document.getElementById("canvas").appendChild(renderer.domElement);
      }
      window.addEventListener("resize", onWindowResize, false);
    }
    }
    
  
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
  
    function animate() {
      requestAnimationFrame(animate);
  
      particle.rotation.x += 0.0;
      particle.rotation.y -= 0.004;
      circle.rotation.x -= 0.002;
      circle.rotation.y -= 0.003;
      skelet.rotation.x -= 0.001;
      skelet.rotation.y += 0.002;
      renderer.clear();
  
      renderer.render(scene, camera);
    }
  }

  function gotobottom() {
    $("a.mod-gotobtm").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        { scrollTop: $($(this).attr("href")).offset().top - 120},
        800,
        "linear"
      );
    });
  }
$(function() {
    get_height_width();
    set_height_width();
    set_background();
    customer_testimonial();
    wow_animation();
    partners_testimonial();
    bannr_anim();
    stickyMenu();
    gotobottom();
});