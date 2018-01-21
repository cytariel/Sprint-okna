//skrypt walidacji formularza
function formValidate() {
    var id = "#" + $(event.target).attr('id');
    if ($(id).val() == "") {
        $(id).removeClass("correct");
        $(id).addClass("wrong");
        $(id).next().remove('.mark');
        $(id).after('<i class="fas fa-times mark mark-wrong" ></i> <span class="mark mark-wrong comment">Pole musi być wypełnione!</span>');

    } else if ($(id).val() != "") {
        $(id).removeClass("wrong");
        $(id).addClass("correct");
        $(id).next().remove('.mark');
        $(id).next().remove('.mark')
        $(id).after('<i class="fas fa-check mark mark-ok"></i>');
    }
};
$(function (){
$("#phone").mask("999-999-999");
$("#tele").mask("999-999-999");
     })
//<!-- skrypt szybkosci zmiany slajdow w karuzeli -->
$('.carousel').carousel({
    interval:5000
})
$('[id^=carousel-selector-]').click(function () {
    var id_selector = $(this).attr("id");
    try {
        var id = /-(\d+)$/.exec(id_selector)[1];
        console.log(id_selector, id);
        jQuery('#myCarousel').carousel(parseInt(id));
    } catch (e) {
        console.log('Regex failed!', e);
    }
});

$(window).scroll(function(){
var sticky = $('.sticky'),
  scroll = $(window).scrollTop();

if (scroll >= 100) sticky.addClass('fixed');
else sticky.removeClass('fixed');
});


function fullscreen(){
var current = $(".active").attr("id");
console.log(current);
$("#modal-img").html("<img class='img-fluid' src='../img/img-gallery-carousel/"+current+".jpg'>")
}