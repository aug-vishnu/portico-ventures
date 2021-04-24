$(window).scroll(function() {
    console.log("ashduh");
    if ($(window).scrollTop() > 10) {
        $('#navBar').addClass('floatingNav');
    } else {
        $('#navBar').removeClass('floatingNav');
    }
});


function validateform() {
    var name = document.myform.name.value;
    var email = document.myform.email.value;
    var message = document.myform.message.value;

    console.log("ashd");
}

$("form").submit(function() {
    alert("Submitted");
});