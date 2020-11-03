$(function() {
    $("#loginButton").click(function() {
        $("#loginModal").modal('show');
    });
    $("#signUpButton").click(function() {
        $("#signUpModal").modal("show");
    });
    $("#bodySignUP").click(function() {
        $("#signUpModal").modal("show");
    });
    $("#signUpModal").on('show.bs.modal', function (e) {
        $("#loginModal").modal("hide");
    });
    $("#loginModal").on('show.bs.modal', function (e) {
        $("#signUpModal").modal("hide");
    });
});