$(function() {
    scrollToSection();
    changeFolioPics();
    waveCounter();
    clientQuote();
});

function scrollToSection() {
    $('.nav-item a, .hvr-sink').click(function(e) {
        e.preventDefault();
        var sectionID = e.currentTarget.id + "Section";

        $('.nav li:nth-child(1)').removeClass('active');
        $('.nav li:nth-child(2)').removeClass('active');
        $('.nav-item a').removeClass('active');
        $(this).addClass('active');
        if (sectionID == 'aboutSection') {
            $('.hvr-sink').removeClass('active');
            $('.nav li:nth-child(2)').addClass('active');
        }

        $('html body').animate({
            scrollTop: $("#" + sectionID).offset().top - 60
        }, 1000);
    });
}

var branding = [
        ["images/portfolio/power.jpg", "No One Man"],
        ["images/portfolio/itaewon.jpg", "Hello Itaewon"],
        ["images/portfolio/club.jpg", "Leeds Menagerie"],
        ["images/portfolio/africa.jpg", "Lace Up, Save Lives"]
    ],
    webDesign = [
        ["images/portfolio/ajuma.jpg", "New York Fashion Week"],
        ["images/portfolio/ballet.jpg", "Brooklyn Ballet"],
        ["images/portfolio/standard.jpg", "Cine Studio"],
        ["images/portfolio/modern-art.jpg", "Gregoire Mellor Gallery"]
    ],
    socMedia = [
        ["images/portfolio/paradise.jpg", "Together in Paradise"],
        ["images/portfolio/playground.jpg", "Americana Urbana"],
        ["images/portfolio/redhead.jpg", "Zara: Spring 2016"],
        ["images/portfolio/zhong.jpg", "Young Art Taipei"]
    ],
    campaign = [
        ["images/portfolio/shades.jpg", "Vector Post Portwear"],
        ["images/portfolio/green.jpg", "The Harlem Rendezvous"],
        ["images/portfolio/maxi.jpg", "Maxi Dress"],
        ["images/portfolio/washed.jpg", "With and Without"]
    ];

function showFolioPics(tabClicked) {
    var boxNum = 1;
    for (var i = 0; i < 4; i++) {
        $('.portfolioGrid > div:nth-child(' + boxNum + ') > ul > li').css('background-image', 'url(' + (tabClicked)[i][0] + ')').css('transition', 'all 0.6s');
        $('.portfolioGrid > div:nth-child(' + boxNum + ') > ul > li > div > div.caption-text > h1').html((tabClicked)[i][1]);
        boxNum++;
    }
}

function changeFolioPics() {
    showFolioPics(branding);

    $('#branding').click(function(e) {
        e.preventDefault();
        showFolioPics(branding);
    });
    $('#webDesign').click(function(e) {
        e.preventDefault();
        showFolioPics(webDesign);
    });
    $('#socMedia').click(function(e) {
        e.preventDefault();
        showFolioPics(socMedia);
    });
    $('#campaign').click(function(e) {
        e.preventDefault();
        showFolioPics(campaign);
    });
};

function waveCounter() {
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
}

function clientQuote() {
  $('.zooey span').mouseover(function(e) {
    e.preventDefault();
    $('.clientQuote').html('\"Lorem ipsum dolor sit amet, consectetur adipisicing elit!\"');
  });
  $('.power span').mouseover(function(e) {
    e.preventDefault();
    $('.clientQuote').html('\"Fusce hendrerit tristique ante, eget sagittis magna commodo ut!\"');
  });
  $('.jackie span').mouseover(function(e) {
    e.preventDefault();
    $('.clientQuote').html('\"Vestibulum pharetra amet porta tincidunt. Donec dictum lorem sit!\"');
  });
  $('.ava span').mouseover(function(e) {
    e.preventDefault();
    $('.clientQuote').html('\"Fusce cursus molestie risus eu finibus. Quisque dictum tellus!\"');
  });
}
