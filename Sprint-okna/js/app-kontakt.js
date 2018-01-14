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