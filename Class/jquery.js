$(document).ready(function () {
  $("#btn").click(() => {
    // $("#p").toggle();
    $("#p").toggle(1000, hidefinish);
  });
});
function hidefinish() {
  $("#p").css("color", "red");
}
