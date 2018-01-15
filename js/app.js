//<!-- skrypt szybkosci zmiany slajdow w karuzeli -->
$('.carousel').carousel({
    interval:5000
})

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
