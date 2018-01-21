//    <!-- skrypt do określania aktywnego linku poprzez dodanie klasy active -->
$(function () {
    var current = location.pathname;
    $('nav li a').each(function () {
        var $this = $(this);
        if ($this.attr('href').indexOf(current) !== -1) {
            $this.addClass('active');
        }
    })
})
//skrypt navbara
var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $("nav").slideUp(400);

    } else {
        $("nav").slideDown(400);

    }
    lastScrollTop = st;
});

//skrypt dropdowna
//group1
$(".dropdown-toggle1").mouseover(
    function () {
        $('.dropdown-menu1').slideDown('medium');
    });

$(".dropdown-group1").mouseleave(
    function () {
        $('.dropdown-menu1').slideUp('medium');
    });
//group2
$(".dropdown-toggle2").mouseover(
    function () {
        $('.dropdown-menu2').slideDown('medium');
    });

$(".dropdown-group2").mouseleave(
    function () {
        $('.dropdown-menu2').slideUp('medium');
    });